import {Link} from "../../../../router";
import {Clock} from "../../../../components/Clock";

const Page = () => {
  return (
    <>
      <Clock />

      <p>
        <Link to={"/time/stale_time"}>Back</Link>
      </p>
    </>
  )
}

export default Page