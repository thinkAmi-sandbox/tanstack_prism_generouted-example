import {Apple, DefaultApi} from "../../../../types";
import {useState} from "react";

const Page = () => {
  const [apples, setApples] = useState<Apple[]>([])

  const handleClick = async () => {
    const response = await new DefaultApi().fetchApples()
    setApples(response.data.apples)
  }

  return (
    <>
      <h1>結果(useState)</h1>
      {apples.map((a) => {
        return <p key={a.id}>{a.name}</p>
      })}

      <button onClick={handleClick}>取得</button>
    </>
  )
}

export default Page