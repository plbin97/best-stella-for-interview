import {AppBar, Toolbar, Typography} from "@mui/material";
import {PageEnum} from "../types";
import {NavButton} from "./NavButton";

type NavbarPropsType = {
  onPage: PageEnum
}

function Navbar(props: NavbarPropsType) {
  return (
    <AppBar position='static' color='inherit' sx={{ boxShadow: 'unset', pt: 2, pl: 8, pr: 2 }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 3, fontWeight: 'bold' }}>
          BEST STELLA
        </Typography>
        <NavButton page={PageEnum.home} inThisPage={props.onPage === PageEnum.home} />
        <NavButton page={PageEnum.about} inThisPage={props.onPage === PageEnum.about} />
        <NavButton page={PageEnum.services} inThisPage={props.onPage === PageEnum.services} />
        <NavButton page={PageEnum.contact} inThisPage={props.onPage === PageEnum.contact} />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
