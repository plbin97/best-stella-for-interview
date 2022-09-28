import {Box, TextField} from "@mui/material";
import React from "react";

type InlineInputPropsType = {
  label: string,
  id: string,
}

function InlineInput(props: InlineInputPropsType) {

  return (
    <Box sx={{
      display: 'flex',
      marginTop: 2,
    }}>
      <TextField fullWidth label={props.label} variant='standard'/>
    </Box>
  )
}

export {InlineInput}
