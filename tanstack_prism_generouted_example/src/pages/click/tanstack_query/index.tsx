import {useClick} from "../../../hooks/useClick";

const Page = () => {
  const {data, refetch} = useClick()

  const handleClick = async () => {
    await refetch()
  }

  return (
    <>
      <h1>結果(Tanstack Query)</h1>
      {data?.apples.map((a) => {
        return <p key={a.id}>{a.name}</p>
      })}

      <button onClick={handleClick}>取得</button>
    </>
  )
}

export default Page