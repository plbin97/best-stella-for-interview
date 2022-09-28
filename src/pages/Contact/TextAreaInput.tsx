import {Box, TextField} from "@mui/material";

type TextAreaInputPropsType = {
  id: string,
  label: string,
  numOfLines: number,
  onChange(e: any): void,
  isErr: boolean,
  errMsg: string
}

function TextAreaInput(props: TextAreaInputPropsType) {
  return (
    <Box >
      <TextField
        id={props.id}
        label={props.label}
        multiline
        fullWidth
        error={props.isErr}
        helperText={props.errMsg}
        onChange={props.onChange}
        rows={props.numOfLines}
      />
    </Box>
  )
}

export {TextAreaInput}
