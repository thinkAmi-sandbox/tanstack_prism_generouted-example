import {DefaultApi, FishesGetResponse} from "../../types";
import {useQuery} from "@tanstack/react-query";

const queryFn = (): Promise<FishesGetResponse> => new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then((response) => response.data)

export const useFetchFishes = () => {
  return useQuery({
    queryKey: ['useFetchFishes'],
    queryFn: queryFn,
  })
}