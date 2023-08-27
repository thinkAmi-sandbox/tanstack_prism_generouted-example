import {useQuery} from "@tanstack/react-query";
import {DefaultApi} from "../../../../../types";

const queryWithFilter = () =>  new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then((response) => response.data.fishes[0])
const queryWithoutFilter = () =>  new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then((response) => response.data.fishes)

const Page = () => {
  const {data: queryFnData} = useQuery({
    queryKey: ['DataFilter', 'ByQueryFn'],
    queryFn: queryWithFilter,
  })

  const {data: selectData} = useQuery({
    queryKey: ['DataFilter', 'BySelect'],
    queryFn: queryWithoutFilter,
    select: (fishes) => {
      return fishes[0]
    },
  })

  if (!queryFnData || !selectData) return <>No data...</>

  return (
    <>
      <h1>結果(queryFnでフィルター)</h1>
      <p>ID: {queryFnData.id} / Name: {queryFnData.name}</p>

      <hr />

      <h1>結果(selectでフィルター)</h1>
      <p>ID: {selectData.id} / Name: {selectData.name}</p>
    </>
  )
}

export default Page