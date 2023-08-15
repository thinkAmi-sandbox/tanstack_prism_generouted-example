import {useCreateFish} from "../../../../hooks/useCreateFish";

const Page = () => {
  const {data, mutate} = useCreateFish()

  const handleClick = () => {
    mutate({name: 'さんま'})
  }

  return (
    <>
      <h1>結果(Tanstack Query)</h1>

      {data && (
        <>
          <p>ID: { data.data.fish.id }</p>
          <p>Name: { data.data.fish.name }</p>
        </>
      )}

      <button onClick={handleClick}>登録</button>
    </>
  )
}

export default Page