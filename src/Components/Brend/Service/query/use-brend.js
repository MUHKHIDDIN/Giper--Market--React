import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../Config/Request";

export const useBrend = () => {
  return useQuery({
    queryKey: ["brend-list"],
    queryFn: () => request.get("/brand").then((res) => res.data),
  });
};
