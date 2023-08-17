import {Fishes} from "../../../../components/query_key/Fishes";
import {ReloadButton} from "../../../../components/query_key/ReloadButton";

const Page = () => {
  const FIRST_QUERY_KEY = ['first_key']
  const SECOND_QUERY_KEY = ['second_key']

  return (
    <>
      <h1>異なる文字列のQueryKeyで ['first_key'] にてinvalidate</h1>

      <h2>queryKey = ['first_key']</h2>
      <Fishes queryKey={FIRST_QUERY_KEY} />

      <h2>queryKey = ['second_key']</h2>
      <Fishes queryKey={SECOND_QUERY_KEY} />

      <hr />

      <ReloadButton queryKeyForReload={FIRST_QUERY_KEY} />
    </>
  )
}

export default Page