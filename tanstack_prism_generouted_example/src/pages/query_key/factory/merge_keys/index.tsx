import {useQuery} from "@tanstack/react-query";
import {mergedQueries} from "./mergedQueries";

const Page = () => {
  const {data: fishData} = useQuery({...mergedQueries.fish.all})
  const {data: appleData} = useQuery({...mergedQueries.apple.all})

  if (!fishData || !appleData) return

  return (
    <>
      <h1>QueryKey Factoryで生成した複数のキーを表示</h1>

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