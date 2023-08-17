import {useQuery} from "@tanstack/react-query";
import {queries} from "./queries"
import {DefaultApi} from "../../../../../types";

const queryFn = () =>  new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then(r => r.data.fishes)

const Page = () => {
  const {data: allData} = useQuery({
    ...queries.fishes.all,
    queryFn: queryFn
  })


  const {data: firstData} = useQuery({
    ...queries.fishes.first(),
    select: (fishes) => fishes[0]
  })

  if (!allData || !firstData) return

  return (
    <>
      <h1>Query Factory</h1>

      <h2>fishes.allの実行</h2>
      <ul>
        {allData.map(f => <li key={f.id}>ID: {f.id} / Name: {f.name}</li>)}
      </ul>

      <hr />

      <h2>fishes.firstの実行</h2>
      <ul>
        ID: {firstData.id} / Name: {firstData.name}
      </ul>
    </>
  )
}

export default Page