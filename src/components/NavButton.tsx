import {PageEnum} from "../types";
import {Button} from "@mui/material";
import {useState} from "react";
import {Navigate} from "react-router-dom";

type NavButtonPropsType = {
  page: PageEnum,
  inThisPage: boolean
}
function NavButton(props: NavButtonPropsType) {
  const [navToPage, setNavToPage] = useState(false)
  return (
    <Button color={props.inThisPage ? 'error' : 'inherit'} sx={{ flexGrow: 1 }} onClick={() => {
      if (!props.inThisPage) {
        setNavToPage(true)
      }
    }}>
      {props.page}
      {navToPage && <Navigate to={`/${props.page.toLowerCase()}`}/>}
    </Button>
  )
}

export {NavButton}
