import React, {useState} from "react";
import {Box} from "@mui/material";
import {InlineInput} from "./InlineInput";
import {TextAreaInput} from "./TextAreaInput";
import {ContactFormSubmitButton} from "./ContactFormSubmitButton";
import {Navigate} from "react-router-dom";
import {emailValidator} from "../../utils";

function ContactForm() {

  const [navToThankYou, setNavToThankYou] = useState(false)
  const [nameVal, setNameVal] = useState('')
  const [nameErr, setNameErr] = useState(false)

  const [emailVal, setEmailVal] = useState('')
  const [emailErr, setEmailErr] = useState(false)

  const [phoneVal, setPhoneVal] = useState('')
  const [phoneErr, setPhoneErr] = useState(false)

  const [companyVal, setCompanyVal] = useState('')

  const [messageVal, setMessageVal] = useState('')
  const [messageErr, setMessageErr] = useState(false)


  const onSubmit = () => {
    let passed = true
    if (nameVal === '') {
      passed = false
      setNameErr(true)
    }
    if (!emailValidator(emailVal)) {
      passed = false
      setEmailErr(true)
    }
    if (isNaN(Number(phoneVal)) || phoneVal === '') {
      passed = false
      setPhoneErr(true)
    }
    if (messageVal === '') {
      passed = false
      setMessageErr(true)
    }
    if (passed) {
      console.log(`Name: ${nameVal}`)
      console.log(`Email: ${emailVal}`)
      console.log(`Phone: ${phoneVal}`)
      console.log(`Company: ${companyVal}`)
      console.log(`Message: ${messageVal}`)
      setNavToThankYou(true)
    }
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
          <InlineInput label='NAME' id='nameInput' onChange={(e) => {
            setNameErr(e.target.value === '')
            setNameVal(e.target.value)
          }} errMsg={nameErr ? 'Name cannot be blank' : ''} isErr={nameErr} />
          <InlineInput label='E-MAIL' id='emailInput' onChange={(e) => {
            setEmailVal(e.target.value)
            setEmailErr(!emailValidator(e.target.value))
          }} errMsg={emailErr ? 'Invalid Email' : ''} isErr={emailErr}/>
          <InlineInput label='PHONE' id='phoneInput' onChange={(e) => {
            setPhoneErr(isNaN(e.target.value) || e.target.value === '')
            setPhoneVal(e.target.value)
          }} errMsg={phoneErr ? 'Invalid Phone Number' : ''} isErr={phoneErr}/>
          <InlineInput label='COMPANY' id='companyInput' onChange={(e) => {
            setCompanyVal(e.target.value)
          }} errMsg='' isErr={false}/>
        </Box>
        <Box sx={{
          flexGrow: 1,
          pt: 2
        }}>
          <TextAreaInput id='messageInput' label='MESSAGE' isErr={messageErr} errMsg={messageErr ? 'Cannot be blank' : ''} onChange={(e) => {
            setMessageErr(e.target.value === '')
            setMessageVal(e.target.value)
          }} numOfLines={10} />
        </Box>
      </Box>
      <ContactFormSubmitButton onclick={onSubmit}/>
      {navToThankYou && <Navigate to='/thank-you' />}
    </Box>
  )
}

export { ContactForm}
