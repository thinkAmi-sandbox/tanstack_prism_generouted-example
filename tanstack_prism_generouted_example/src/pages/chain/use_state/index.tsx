import {useState} from "react";
import {DefaultApi} from "../../../../types";

type AppleWithColor = {
  id: number
  name: string
  colorName: string
}

const Page = () => {
  const [appleWithColorList, setAppleWithColorList] = useState<AppleWithColor[]>([])
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClick = async () => {
    const response = await new DefaultApi().fetchApples()
    const {data: {apples}} = response

    const results = await Promise.all(apples.map(async (apple) => {
      if (!apple.colorId) {
        return {
          id: apple.id,
          name: apple.name,
          colorName: '秘密'
        }
      }

      // PrismのPreferヘッダを使い、colorIdの値によりレスポンスしてもらうexampleの値を変更している
      const colorResponse = await new DefaultApi().fetchColor(apple.colorId, {headers: {Prefer: `example=case${apple.colorId}`}})
      return {
        id: apple.id,
        name: apple.name,
        colorName: colorResponse.data.colorName
      }
    }))

    setAppleWithColorList(results)
    setIsSuccess(true)
  }

  return (
    <>
      <h1>結果(useState)</h1>
      {appleWithColorList.map((a) => {
        return <p key={a.id}>名前: {a.name} ({a.colorName})</p>
      })}

      <button onClick={handleClick}>取得</button>

      {isSuccess && (
        <p>取得に成功しました</p>
      )}
    </>
  )
}

export default Page