import {mergeQueryKeys} from "@lukemorales/query-key-factory";
import {fishQueries} from "../fishQueries";
import {appleQueries} from "../appleQueries";

// 重複した場合は後勝ち。この場合はappleQueriesが優先される
export const queries = mergeQueryKeys(fishQueries, appleQueries)

// 次のように書くと、fishQueriesが優先される
// export const mergedQueries = mergeQueryKeys(appleQueries, fishQueries)