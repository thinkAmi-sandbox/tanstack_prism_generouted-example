import {useMutation} from "@tanstack/react-query";
import {DefaultApi, FishParams} from "../../types";

export const useCreateFish = () => {
  return useMutation({
    mutationFn: (params: FishParams) => new DefaultApi().createFish(params),
  })
}
