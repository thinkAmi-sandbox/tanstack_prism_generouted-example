import {createQueryKeys} from "@lukemorales/query-key-factory";
import {DefaultApi} from "../../../../../types";

const fishQueryFn = () =>  new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then(r => r.data.fishes)

export const fishQueries = createQueryKeys('items', {
  all: {
    queryKey: [''],
    queryFn: fishQueryFn
  }
})
