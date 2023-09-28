import {Clock} from "../../../components/Clock";
import {useQuery} from "@tanstack/react-query";
import {DefaultApi} from "../../../../types";
import {Link} from "../../../router";

const queryFn = () => new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then(async (response) => {
  // 表示をわかりやすくするため、待ち時間を入れる
  await new Promise(resolve => setTimeout(resolve, 2000))

  return response.data.fishes
})

export const QUERY_KEY = ['StaleTime']

const Page = () => {
  const {data} = useQuery({
    queryKey: QUERY_KEY,
    queryFn: queryFn,
    staleTime: 6000,
    cacheTime: 3000,
    // refetchOnMountだけを動かしたいため、他のは無効化しておく
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  })

  return (
    <>
      <Clock />

      <p>
        <Link to={"/time/stale_time/clock_only"}>Next</Link>
      </p>
      {data && (
        <ul>
          {data.map(f => <li key={f.id}>ID: {f.id} / Name: {f.name}</li>)}
        </ul>
      )}
    </>
  )
}

export default Page