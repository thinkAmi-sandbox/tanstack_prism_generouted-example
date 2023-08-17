import {useQueryClient} from "@tanstack/react-query";

type Props = {
  queryKeyForReload: any[]
  exact?: boolean
}

export const ReloadButton = ({queryKeyForReload, exact = false}: Props) => {
  const queryClient = useQueryClient()

  const handleClick = () => {
    queryClient.invalidateQueries({queryKey: queryKeyForReload, exact: exact})
  }

  return (
    <button type={'button'} onClick={handleClick}>更新</button>
  )
}