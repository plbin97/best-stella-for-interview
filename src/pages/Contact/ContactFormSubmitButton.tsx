import {Box, Button} from "@mui/material";

type ButtonPropsType = {
  onclick(): void
}

function ContactFormSubmitButton(props: ButtonPropsType) {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 6
    }}>
      <Button variant='contained' color='error' size='large' onClick={props.onclick} sx={{
        background: '#ff5757',
        opacity: 0.7,
        borderRadius: 5
      }} >SEND</Button>
    </Box>
  )
}
export { ContactFormSubmitButton}
