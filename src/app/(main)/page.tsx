import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/posts";
import TrendSideBar from "@/components/TrendsSidebar";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/type";
import Image from "next/image";
import ForYouFeed from "./ForYouFeed";

export default  function Home() {
  
  return (
     <main className=" w-full min-w-0 flex gap-5">
      <div className="w-full min-w-0 space-y-5">
      <PostEditor />
      <ForYouFeed />
      </div>
      <TrendSideBar />
     </main>
  );
}
