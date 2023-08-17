import {useQuery} from "@tanstack/react-query";
import {DefaultApi} from "../../../types";

type Props = {
  queryKey: any[]
}

const queryFn = () => new DefaultApi().fetchFishes({headers: {Prefer: 'dynamic=true'}}).then((response) => response.data.fishes)

export const Fishes = ({queryKey}: Props) => {
  const {data} = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  })

  return (
    <>
      {data && (
        <ul>
          {data.map(f => <li key={f.id}>ID: {f.id} / Name: {f.name}</li>)}
        </ul>
      )}
    </>
  )
}