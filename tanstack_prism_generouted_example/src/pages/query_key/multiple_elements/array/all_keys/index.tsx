import {Fishes} from "../../../../../components/query_key/Fishes";
import {ReloadButton} from "../../../../../components/query_key/ReloadButton";

const KEY_FOR_RELOAD = ['key', 1]

const Page = () => {
  return (
    <>
      <h1>リロードするキー ['key', 1] をすべて指定</h1>

      <h2>queryKey = ['key', 1]</h2>
      <Fishes queryKey={KEY_FOR_RELOAD} />

      <h2>queryKey = ['key', 2]</h2>
      <Fishes queryKey={['key', 2]} />

      <hr />

      <ReloadButton queryKeyForReload={KEY_FOR_RELOAD} />
    </>
  )
}

export default Page