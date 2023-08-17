import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {DefaultApi} from "../../../../types";

const queryFn = (colorId: number) =>  new DefaultApi().fetchColor(colorId, {headers: {Prefer: `example=case${colorId}`}}).then(r => r.data)

const Page = () => {
  const [colorId, setColorId] = useState(1)
  const {data} = useQuery({
    queryKey: ['Color', colorId],
    queryFn: () => queryFn(colorId)
  })

  const handleColorId1 = () => {
    setColorId(1)
  }

  const handleColorId2 = () => {
    setColorId(2)
  }

  if (!data) return

  return (
    <>
      <h1>動的に変わるQueryKey</h1>

      {data && (
        <p>ID: {data.id} / Name: {data.colorName}</p>
      )}

      <hr />

      <button onClick={handleColorId1}>colorIdを1にする</button>
      <button onClick={handleColorId2}>colorIdを2にする</button>
    </>
  )
}

export default Page