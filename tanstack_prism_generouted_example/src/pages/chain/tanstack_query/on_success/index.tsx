import {useState} from "react";
import {useChainWithOnSuccess} from "../../../../hooks/useChainWithOnSuccess";
import {ApplesResponse, DefaultApi} from "../../../../../types";

type AppleWithColor = {
  id: number
  name: string
  colorName: string
}

const Page = () => {
  const [appleWithColorList, setAppleWithColorList] = useState<AppleWithColor[]>([])
  const [isSuccess, setIsSuccess] = useState(false)

  const {refetch} = useChainWithOnSuccess({onSuccess: async (data: ApplesResponse) => {
      const results = await Promise.all(data.apples.map(async (apple) => {
        if (!apple.colorId) {
          return {
            id: apple.id,
            name: apple.name,
            colorName: '秘密'
          }
        }

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
  })

  const handleClick = async () => {
    await refetch()
  }

  return (
    <>
      <h1>結果(Tanstack Query with onSuccess)</h1>
      {appleWithColorList.map((a) => {
        return <p key={a.id}>[onSuccess] 名前: {a.name} ({a.colorName})</p>
      })}

      <button onClick={handleClick}>取得</button>

      {isSuccess && (
        <p>取得に成功しました</p>
      )}
    </>
  )
}

export default Page