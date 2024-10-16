import { Prisma } from "@prisma/client";

export const userDataSelect ={
  id: true,
  username: true,
  displayName: true,
  avatarUrl: true,
} satisfies Prisma.UserSelect

export const postDataInclude ={
    user:{
        select: userDataSelect
      },
} satisfies Prisma.PostInclude;


export type postData = Prisma.PostGetPayload<{
    include: typeof postDataInclude
}>


export interface PostsPage{
  posts: postData[]
  nextCursor:string | null
}