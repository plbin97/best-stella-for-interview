import Navbar from "../components/Navbar";
import {PageEnum} from "../types";
import {Box} from "@mui/material";
import {BigTitle} from "../components/BigTitle";

function Home() {
  return (
    <Box>
      <Navbar onPage={PageEnum.home} />
      <BigTitle mainTitleWidth={400} backGroundTitle='creative' mainTitle='Build Your Own Company' backGroundTitleWidth={1000} mainTitleOffsetTop={20} backGroundTitleOffsetTop={20} height={600} />
      <Box>
        <Box sx={{
          textAlign: 'center',
          position: 'relative',
          width: '60%',
          left: '20%'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sollicitudin erat. Nunc in neque massa. Etiam faucibus elementum rutrum. Cras sed arcu sed leo ullamcorper maximus et quis est. Pellentesque eget ex ipsum. Donec diam sem, rhoncus tempus fringilla id, consequat pulvinar tortor. Curabitur id suscipit est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vehicula augue nisl, sit amet maximus diam blandit sit amet. Sed in ipsum sed mi mollis rutrum sed eget magna. Maecenas diam neque, lobortis ac efficitur eu, mollis et mauris.
        </Box>
      </Box>
    </Box>
  )
}
export {Home}
