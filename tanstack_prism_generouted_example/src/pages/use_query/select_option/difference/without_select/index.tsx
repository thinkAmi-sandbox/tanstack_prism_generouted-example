import {useQuery} from "@tanstack/react-query";
import {DefaultApi} from "../../../../../../types";

const queryFn = () =>  new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then((response) => response.data.fishes)

const Page = () => {
  const {data, refetch} = useQuery({
    queryKey: ['DataFilter'],
    queryFn: queryFn,
  })

  const handleClick = () => {
    refetch()
  }

  return (
    <>
      <h1>結果(queryFnの結果をフィルター)</h1>
      <p>{data?.length}件あります</p>

      <hr />
      <button type={"button"} onClick={handleClick}>リロード</button>
    </>
  )
}

export default Page