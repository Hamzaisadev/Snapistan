import kyInstance from "@/lib/ky";
import { FollowersInfo } from "@/lib/type";
import { useQuery } from "@tanstack/react-query";

export default function useFollowerInfo(
    userId : string,
    initialState: FollowersInfo
){
    const query = useQuery({
        queryKey: ['follower-info' , userId],
        queryFn:  () => 
            kyInstance.get(`api/users/${userId}/followers`).json<FollowersInfo>(),
        initialData : initialState,
        staleTime :Infinity

    })


    return query
}