import Navbar from "../components/Navbar";
import {PageEnum} from "../types";

function Home() {
  return (
    <Navbar onPage={PageEnum.home} />
  )
}
export {Home}
