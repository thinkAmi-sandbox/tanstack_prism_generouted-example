import {useQuery} from "@tanstack/react-query";
import {DefaultApi} from "../../../../../types";
import {Clock} from "../../../../components/Clock";

const queryFn = () => new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then(async (response) => {
  // 待ち時間を入れる
  await new Promise(resolve => setTimeout(resolve, 1000))

  return response.data.fishes
})

const Page = () => {
  const {data} = useQuery({
    queryKey: ['PollingWithDefaultSettings'],
    queryFn: queryFn,
    refetchInterval: 2000,
  })


  return (
    <>
      <Clock />

      {data && (
        <ul>
          {data.map(f => <li key={f.id}>ID: {f.id} / Name: {f.name}</li>)}
        </ul>
      )}

    </>
  )
}

export default Page