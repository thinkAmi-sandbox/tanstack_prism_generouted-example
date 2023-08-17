import {Fishes} from "../../../../components/query_key/Fishes";
import {ReloadButton} from "../../../../components/query_key/ReloadButton";

const Page = () => {
  const QUERY_KEY = ['same_key']

  return (
    <>
      <h1>同じ文字列のQueryKey</h1>

      <h2>queryKey = ['same_key'] その1</h2>
      <Fishes queryKey={QUERY_KEY} />

      <h2>queryKey = ['same_key'] その2</h2>
      <Fishes queryKey={QUERY_KEY} />

      <hr />

      <ReloadButton queryKeyForReload={QUERY_KEY} />
    </>
  )
}

export default Page