import {Box, TextField} from "@mui/material";

type TextAreaInputPropsType = {
  id: string,
  label: string,
  numOfLines: number
}

function TextAreaInput(props: TextAreaInputPropsType) {
  return (
    <Box >
      <TextField
        id={props.id}
        label={props.label}
        multiline
        fullWidth
        rows={props.numOfLines}
      />
    </Box>
  )
}

export {TextAreaInput}
