import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../Config/Request";

export const useAds = () => {
  return useQuery({
    queryKey: ["ads-list"],
    queryFn: () => request.get("/ads").then((res) => res.data),
  });
};
