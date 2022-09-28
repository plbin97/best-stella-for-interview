import Navbar from "../components/Navbar";
import {PageEnum} from "../types";

function About() {
  return (
    <Navbar onPage={PageEnum.about} />
  )
}
export {About}
