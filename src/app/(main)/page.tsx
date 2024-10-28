import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/posts";
import TrendSideBar from "@/components/TrendsSidebar";
import prisma from "@/lib/prisma";
import Image from "next/image";
import ForYouFeed from "./ForYouFeed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FollowingFeed from "./followingFeed";

export default  function Home() {
  
  return (
     <main className=" w-full min-w-0 flex gap-5">
      <div className="w-full min-w-0 space-y-5">
      <PostEditor />
      <Tabs defaultValue="for-you">
        <TabsList>
          <TabsTrigger value="for-you">For you</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
        <TabsContent value="for-you">
          <ForYouFeed />
        </TabsContent>
        <TabsContent value="following">
          <FollowingFeed />
        </TabsContent>
      </Tabs>
      </div>
      <TrendSideBar />
     </main>
  );
}
