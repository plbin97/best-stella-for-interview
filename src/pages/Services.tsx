import Navbar from "../components/Navbar";
import {PageEnum} from "../types";

function Services() {
  return (
    <Navbar onPage={PageEnum.services} />
  )
}
export {Services}
