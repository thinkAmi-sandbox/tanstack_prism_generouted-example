import {useCreateFish} from "../../../../hooks/useCreateFish";
import {useFetchFishes} from "../../../../hooks/useFetchFishes";
import {useQueryClient} from "@tanstack/react-query";

const Page = () => {
  const {mutate} = useCreateFish()
  const {data} = useFetchFishes()

  // invalidateQueriesを使う際、{}では取得できない。
  // https://github.com/TanStack/query/issues/1575
  const queryClient = useQueryClient()

  const handleClick = () => {
    mutate(
      {name: 'さんま'},
      {
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['useFetchFishes']})
        }
      }
    )
  }

  return (
    <>
      <h1>結果(Tanstack Query)</h1>
      {data && (
        data.fishes.map((a) => {
          return <p key={a.id}>ID: {a.id} / Name: {a.name}</p>
        })
      )}

      <h2>更新</h2>

      <button onClick={handleClick}>更新</button>
    </>
  )
}

export default Page