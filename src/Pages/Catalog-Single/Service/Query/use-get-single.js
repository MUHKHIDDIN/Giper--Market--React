import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../Config/Request";
import { useParams } from "react-router-dom";


export const useGetSingle = () => {
    const {name} = useParams()
    return useQuery({
        queryKey:["catalog-get"],
        queryFn:()=> request.get(`/${name}`).then((res)=>res.data),
        onSuccess:()=>{
            console.log(name);
        }
    })
}