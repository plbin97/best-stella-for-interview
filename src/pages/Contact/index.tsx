import Navbar from "../../components/Navbar";
import {PageEnum} from "../../types";
import {ContactPoster} from "./ContactPoster";
import {ContactForm} from "./ContactForm";

function Contact() {

  return (
    <div>
      <Navbar onPage={PageEnum.contact} />
      <ContactPoster />
      <ContactForm />
    </div>
  )
}
export {Contact}
