import {mergeQueryKeys} from "@lukemorales/query-key-factory";
import {fishQueries} from "./fishQueries";
import {appleQueries} from "./appleQueries";

export const mergedQueries = mergeQueryKeys(appleQueries, fishQueries)