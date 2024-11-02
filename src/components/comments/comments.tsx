import { CommentsPage, PostData } from "@/lib/type";
import CommentInput from "./commentInput";
import { useInfiniteQuery } from "@tanstack/react-query";
import kyInstance from "@/lib/ky";
import Comment from "./comment";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface CommentsProps {
  post: PostData;
}

export default function Comments({ post }: CommentsProps) {
  const { data, fetchNextPage, hasNextPage, isFetching, status } =
    useInfiniteQuery({
      queryKey: ["comments", post.id],
      queryFn: ({ pageParam }) =>
        kyInstance
          .get(
            `/api/posts/${post.id}/comments`,
            pageParam ? { searchParams: { cursor: pageParam } } : {},
          )
          .json<CommentsPage>(),
      initialPageParam: null as string | null,
      getNextPageParam: (firstPage) => firstPage.previousCursor,
      select: (data) => ({
        pages: [...data.pages].reverse(),
        pageParams: [...data.pageParams].reverse(),
      }),
    });

  const comments = data?.pages.flatMap((page) => page.comments) || [];

  return (
    <div className="space-y-3">
      <CommentInput post={post} />
      {hasNextPage && (
        <Button
          variant="link"
          className="mx-auto block"
          disabled={isFetching}
          onClick={() => fetchNextPage()}
        >
          Load previous comments
        </Button>
      )}
      {status === "pending" && <Loader2 className="mx-auto animate-spin" />}
      {status === "success" && !comments.length && (
        <p className="text-center text-muted-foreground">No comments yet</p>
      )}
      {status === "error" && (
        <p className="text-center text-destructive">Error loading comments</p>
      )}
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
