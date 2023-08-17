import {useQuery} from "@tanstack/react-query";
import {queries} from "./queries";

const Page = () => {
  const {data: fishData} = useQuery({
    ...queries.items.all
  })

  const {data: appleData} = useQuery({
    ...queries.items.all,
  })

  if (!fishData || !appleData) return

  return (
    <>
      <h1>Query Factoryで同じキーを生成し、mergeQueryKeysを使ってマージした場合</h1>
      <h2>Fishes.allの実行</h2>
      <ul>
        {fishData.map(f => <li key={f.id}>ID: {f.id} / Name: {f.name}</li>)}
      </ul>

      <hr />

      <h2>Apples.allの実行</h2>
      <ul>
        {appleData.map(a => <li key={a.id}>ID: {a.id} / Name: {a.name}</li>)}
      </ul>
    </>
  )
}

export default Page