import {useEffect, useState} from "react";
import {Apple, DefaultApi} from "../../../../types";

const Page = () => {
  const [apples, setApples] = useState<Apple[]>([])

  useEffect(() => {
    const fetchApples = async() => {
      const response = await new DefaultApi().fetchApples()
      setApples(response.data.apples)
    }
    fetchApples()
  }, [])

  return (
    <>
      <h1>結果(useState + useEffect)</h1>
      {apples.map((a) => {
        return <p key={a.id}>{a.name}</p>
      })}
    </>
  )
}

// generouted の場合、 default export が必要
export default Page

// 以下では動作しない
// export const Page = () => { return <h1>Hello</h1> }