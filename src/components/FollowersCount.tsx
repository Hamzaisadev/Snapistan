"use client"
import useFollowerInfo from "@/hooks/useFollowerInfo"
import { FollowersInfo } from "@/lib/type"
import { formatNumber } from "@/lib/utils"

interface FollowerCountProps{
    userId: string
    initialState: FollowersInfo

}


export default function FollowerCount({
    userId,
    initialState,
}: FollowerCountProps){
        const { data }= useFollowerInfo(userId , initialState)

        return(
            <span>
                Followers:{" "}
                <span className="font-semibold">{formatNumber(data.followers)} </span>
            </span>
        )
}