import { InfiniteData, QueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../ui/use-toast";
import { usePathname, useRouter } from "next/navigation";
import { deletePosts } from "./actions";
import { PostsPage } from "@/lib/type";


export function useDeletePostMutation(){
    const {toast} = useToast()

    const queryClient =useQueryClient()

    const Router = useRouter()
    const pathname = usePathname()

    const mutation = useMutation({
        mutationFn: deletePosts,
        onSuccess: async (deletedPost) => {
            const queryFilter : QueryFilters = {queryKey : ["post-feed"]}

            await queryClient.cancelQueries(queryFilter)

            queryClient.setQueriesData<InfiniteData<PostsPage, string | null>>(
            queryFilter,
            (oldData) => {
                if(!oldData) return

                return {
                    pageParams:oldData.pageParams,
                    pages: oldData.pages.map (page => ({
                        nextCursor: page.nextCursor,
                        posts: page.posts.filter((p) => p.id !== deletedPost.id),                    }))
                }
            }
        )
        toast({
            description: 'Post Deleted'
        })

        if (pathname === `/posts/${deletedPost.id}`){
            Router.push(`/users/${deletedPost.user.username}`)
        }
        },
        onError(error){
            console.log(error)
            toast({
                variant: 'destructive',
                description: 'Failed to delete post. Please try Again'
            })
        }


    })





    return mutation
}