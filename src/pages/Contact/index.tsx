import Navbar from "../../components/Navbar";
import {PageEnum} from "../../types";
import {ContactForm} from "./ContactForm";
import {BigTitle} from "../../components/BigTitle";

function Contact() {

  return (
    <div>
      <Navbar onPage={PageEnum.contact} />
      <BigTitle
        mainTitleWidth={1000}
        backGroundTitle='contact'
        mainTitle="We're here for you"
        backGroundTitleWidth={1000}
        mainTitleOffsetTop={20}
        backGroundTitleOffsetTop={13}
        height={400} />
      <ContactForm />
    </div>
  )
}
export {Contact}
