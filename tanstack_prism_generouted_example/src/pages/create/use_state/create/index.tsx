import {useState} from "react";
import {DefaultApi, Fish} from "../../../../../types";

const Page = () => {
  const [fish, setFish] = useState<Fish>()

  const createFish = async() => {
    const response = await new DefaultApi().createFish({name: 'さんま'})
    setFish(response.data.fish)
  }

  const handleClick = async () => {
    await createFish()
  }

  return (
    <>
      <h1>結果(useState)</h1>

      {fish && (
        <>
          <p>ID: { fish.id }</p>
          <p>Name: { fish.name }</p>
        </>
      )}

      <button onClick={handleClick}>登録</button>
    </>
  )
}

export default Page