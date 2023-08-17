import {Fishes} from "../../../../components/query_key/Fishes";
import {ReloadButton} from "../../../../components/query_key/ReloadButton";

const foo = 1
const bar = 'hoge'
const baz = [3, 4]

const Page = () => {
  const sameValues = {foo, bar, baz}
  const diffOrder = {bar, baz, foo}
  const undefinedValue = {foo, bar, baz, other: undefined}
  const nullValue = {foo, bar, baz, other: null}
  const keyObject = {foo, bar, baz}

  return (
    <>
      <h1>第2キーはオブジェクト</h1>

      <h2>invalidateQueriesのqueryKeyと同じ値・定義順のオブジェクト</h2>
      <Fishes queryKey={['key', sameValues]} />

      <h2>invalidateQueriesのqueryKeyと同じ値だが定義が異なるオブジェクト</h2>
      <Fishes queryKey={['key', diffOrder]} />

      <h2>invalidateQueriesのqueryKeyに加え、undefined値の属性を持つオブジェクト</h2>
      <Fishes queryKey={['key', undefinedValue]} />

      <h2>invalidateQueriesのqueryKeyに加え、null値の属性を持つオブジェクト</h2>
      <Fishes queryKey={['key', nullValue]} />

      <hr />

      <ReloadButton queryKeyForReload={['key', keyObject]} />
    </>
  )
}

export default Page