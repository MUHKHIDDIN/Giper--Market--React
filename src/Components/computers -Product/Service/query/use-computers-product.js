import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../Config/Request";

export const useComputersProduct = () => {
  return useQuery({
    queryKey: ["computers-product"],
    queryFn: () => request.get("/computers").then((res) => res.data),
  });
};
