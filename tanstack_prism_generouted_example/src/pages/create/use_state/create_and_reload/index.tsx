import {useEffect, useState} from "react";
import {DefaultApi, Fish} from "../../../../../types";

const Page = () => {
  const [fishes, setFishes] = useState<Fish[]>([])

  const createFish = async() => {
    await new DefaultApi().createFish({name: 'さんま'})
  }

  const fetchFishes = async() => {
    const response = await new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}})
    setFishes(response.data.fishes)
  }

  const handleClick = async () => {
    await createFish()
    await fetchFishes()
  }

  useEffect(() => {
    fetchFishes()
  }, [])

  return (
    <>
      <h1>結果(Tanstack Query)</h1>
      {fishes && (
        fishes.map((a) => {
          return <p key={a.id}>ID: {a.id} / Name: {a.name}</p>
        })
      )}

      <h2>更新</h2>

      <button onClick={handleClick}>更新</button>
    </>
  )
}

export default Page