import {PageEnum} from "../types";
import Navbar from "../components/Navbar";
import {Box} from "@mui/material";

function ThankYou() {
  return (
    <Box>
      <Navbar onPage={PageEnum.thankYou} />
      <Box sx={{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30
      }}>
        Thank you for your submission
      </Box>
    </Box>
  )
}
export { ThankYou}
