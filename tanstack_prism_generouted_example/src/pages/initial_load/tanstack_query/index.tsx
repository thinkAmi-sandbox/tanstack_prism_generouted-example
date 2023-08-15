import {useInitialLoad} from "../../../hooks/useInitialLoad";

const Page = () => {
  const {data, isLoading} = useInitialLoad()

  if (isLoading) return <div>Loading</div>
  if (!data) return

  return (
    <>
      <h1>結果(Tanstack Query)</h1>
      {data.apples.map((a) => {
        return <p key={a.id}>{a.name}</p>
      })}
    </>
  )
}

export default Page