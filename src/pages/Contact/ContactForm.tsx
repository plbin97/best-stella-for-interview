import React, {useState} from "react";
import {Box} from "@mui/material";
import {InlineInput} from "./InlineInput";
import {TextAreaInput} from "./TextAreaInput";
import {ContactFormSubmitButton} from "./ContactFormSubmitButton";
import {Navigate} from "react-router-dom";
function ContactForm() {

  const [navToThankYou, setNavToThankYou] = useState(false)
  const onSubmit = () => {
    setNavToThankYou(true)
  }

  return (
    <Box>
      <Box sx={{
        position: 'relative',
        display: 'flex',
        width: '60%',
        left: '19%'
      }}>
        <Box sx={{
          flexGrow: 1,
          pl: 10,
          pr: 10
        }}>
          <InlineInput label='NAME' id='nameInput' />
          <InlineInput label='E-MAIL' id='emailInput' />
          <InlineInput label='PHONE' id='phoneInput' />
          <InlineInput label='COMPANY' id='companyInput' />
        </Box>
        <Box sx={{
          flexGrow: 1,
          pt: 2
        }}>
          <TextAreaInput id='messageInput' label='MESSAGE' numOfLines={10} />
        </Box>
      </Box>
      <ContactFormSubmitButton onclick={onSubmit}/>
      {navToThankYou && <Navigate to='/thank-you' />}
    </Box>
  )
}

export { ContactForm}
