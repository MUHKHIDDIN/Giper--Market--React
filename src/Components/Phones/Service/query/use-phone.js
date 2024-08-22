import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../Config/Request";

export const usePhone = () => {
  return useQuery({
    queryKey: ["phone-list"],
    queryFn: () => request.get("/phones").then((res) => res.data),
  });
};
