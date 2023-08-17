import {Fishes} from "../../../../../components/query_key/Fishes";
import {ReloadButton} from "../../../../../components/query_key/ReloadButton";

const Page = () => {
  return (
    <>
      <h1>リロードするキーは ['key'] だが、exact=true</h1>

      <h2>queryKey = ['key', 1]</h2>
      <Fishes queryKey={['key', 1]} />

      <h2>queryKey = ['key', 2]</h2>
      <Fishes queryKey={['key', 2]} />

      <h2>queryKey = ['key']</h2>
      <Fishes queryKey={['key']} />

      <hr />

      <ReloadButton queryKeyForReload={['key']} exact={true} />
    </>
  )
}

export default Page