import React from "react";
import {Box} from "@mui/material";

function ContactPoster() {

  const generalStyle: React.CSSProperties = {
    display: "block",
    height: 400
  }
  const contactBackgroundStyle: React.CSSProperties = {
    position: "absolute",
    color: '#ff5757',
    opacity: 0.2,
    fontSize: 200,
    fontFamily: 'League Spartan',
    fontWeight: 700,
    letterSpacing: 30,
    marginTop: 110,
    left: '50%',
    marginLeft: -425
  }
  const contactSlogenStyle: React.CSSProperties = {
    position: "absolute",
    fontSize: 30,
    marginTop: 190,
    fontWeight: 700,
    letterSpacing: 5,
    left: '50%',
    marginLeft: -183,
    fontFamily: 'Open Sans'
  }

  return (
    <Box style={generalStyle}>
      <Box style={contactBackgroundStyle}>contact</Box>
      <Box style={contactSlogenStyle}>We're here for you</Box>
    </Box>
  )
}
export { ContactPoster }
