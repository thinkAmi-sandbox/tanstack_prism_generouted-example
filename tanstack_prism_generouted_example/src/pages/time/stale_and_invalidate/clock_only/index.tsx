import {Link} from "../../../../router";
import {Clock} from "../../../../components/Clock";
import {ReloadButton} from "../../../../components/query_key/ReloadButton";
import {QUERY_KEY} from "../index";

const Page = () => {
  return (
    <>
      <Clock />

      <p>
        <Link to={"/time/stale_and_invalidate"}>Back</Link>
      </p>
      <p>
        <ReloadButton queryKeyForReload={QUERY_KEY} />
      </p>
    </>
  )
}

export default Page