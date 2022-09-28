import {Box, TextField} from "@mui/material";
import React from "react";

type InlineInputPropsType = {
  label: string,
  id: string,
  onChange(e: any): void,
  isErr: boolean,
  errMsg: string
}

function InlineInput(props: InlineInputPropsType) {

  return (
    <Box sx={{
      display: 'flex',
      marginTop: 2,
    }}>
      <TextField fullWidth error={props.isErr} helperText={props.errMsg} label={props.label} onChange={props.onChange} variant='standard'/>
    </Box>
  )
}

export {InlineInput}
