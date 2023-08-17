import {Fishes} from "../../../../../components/query_key/Fishes";
import {ReloadButton} from "../../../../../components/query_key/ReloadButton";

const Page = () => {
  return (
    <>
      <h1>リロードするキーとして ['key'] を指定</h1>

      <h2>queryKey = ['key', 1]</h2>
      <Fishes queryKey={['key', 1]} />

      <h2>queryKey = ['key', 2]</h2>
      <Fishes queryKey={['key', 2]} />

      <hr />

      <ReloadButton queryKeyForReload={['key']} />
    </>
  )
}

export default Page