import {createQueryKeyStore} from "@lukemorales/query-key-factory";
import {DefaultApi} from "../../../../../types";

export const queries = createQueryKeyStore({
  fishes: {
    all: null, // 全件取得。queryFnは使う側で定義
    first: () => ({  // 最初の1件取得。selectによる絞り込みは `createQueryKeyStore` ではできないため、使う側で行う
      queryKey: ['first'],
      queryFn: () => new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then(r => r.data.fishes),
    })
  }
})