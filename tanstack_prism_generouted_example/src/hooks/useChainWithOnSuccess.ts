import {useQuery} from "@tanstack/react-query";
import {ApplesResponse, DefaultApi} from "../../types";

const queryFn = (): Promise<ApplesResponse> => new DefaultApi().fetchApples().then((response) => response.data)

export const useChainWithOnSuccess = ({onSuccess}: {onSuccess: (data: ApplesResponse) => Promise<void>}) => {
  return useQuery({
    queryKey: ['useChainWithOnSuccess'],
    queryFn: queryFn,
    enabled: false,
    onSuccess: onSuccess
  })
}