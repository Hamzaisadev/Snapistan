import { Prisma } from "@prisma/client";

export function getUserDataSelect(loggedInUserId: string) {
 return {
  id: true,
  username: true,
  displayName: true,
  avatarUrl: true,
  followers: {
    where: {
        followerId: loggedInUserId

    },
    select:{
        followerId: true
    }
},
_count:{
    select:{
        followers: true
    }
}
} satisfies Prisma.UserSelect

}


export function getPostDataInclude(loggedInUserId: string){
  return {
    user:{
        select: getUserDataSelect(loggedInUserId)
      },
} satisfies Prisma.PostInclude;
}




export type postData = Prisma.PostGetPayload<{
    include: ReturnType <typeof getPostDataInclude>
}>


export interface PostsPage{
  posts: postData[]
  nextCursor:string | null
}

export interface FollowersInfo{
  followers : number;
  isFollowedByUser: boolean
}