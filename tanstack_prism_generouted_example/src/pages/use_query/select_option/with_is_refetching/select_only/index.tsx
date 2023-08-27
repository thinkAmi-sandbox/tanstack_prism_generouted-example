import {useQuery} from "@tanstack/react-query";
import {DefaultApi} from "../../../../../../types";

const queryFn = () =>  new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then((response) => response.data.fishes)

const Page = () => {
  const {data, refetch, isRefetching} = useQuery({
    queryKey: ['DataFilter'],
    queryFn: queryFn,
    select: (fishes) => {
      return fishes.length
    },
  })

  const handleClick = () => {
    refetch()
  }

  return (
    <>
      <h1>結果(selectでフィルター、isRefetchingあり)</h1>
      <p>isRefetching: {isRefetching.toString()}</p>
      <p>{data}件あります</p>

      <hr />
      <button type={"button"} onClick={handleClick}>リロード</button>
    </>
  )
}

export default Page