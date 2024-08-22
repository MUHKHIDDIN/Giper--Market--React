import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../Config/Request";

export const useBunnor = () => {
  return useQuery({
    queryKey: ["bunnor-list"],
    queryFn: () => request.get("/banners").then((res) => res.data),
  });
};
