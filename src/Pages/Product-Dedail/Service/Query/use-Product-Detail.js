import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../Config/Request";
import { useParams } from "react-router-dom";

export const useProductDetail = () => {
  const { id } = useParams();
  return useQuery({
    queryKey: ["product-detail", id],
    queryFn: () => request.get(`/all/${id}`).then((res) => res.data),
  });
};
