import {createQueryKeys} from "@lukemorales/query-key-factory";
import {DefaultApi} from "../../../../../types";

const appleQueryFn = () => new DefaultApi().fetchApples().then(r => r.data.apples)

export const appleQueries = createQueryKeys('items',{
  all: {
    queryKey: [''],
    queryFn: appleQueryFn
  }
})