import { useQuery } from "@tanstack/react-query";

import { request } from "../../../../Config/Request";

export const useGetCatalog = () => {
  return useQuery({
    queryKey: ["get-catalog"],
    queryFn: () => request.get("/catalog").then((res) => res.data),
  });
};
