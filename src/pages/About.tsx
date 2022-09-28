import Navbar from "../components/Navbar";
import {PageEnum} from "../types";
import {Box} from "@mui/material";
import {BigTitle} from "../components/BigTitle";
import aboutImg from '../media/about.png'
import {Image} from "../components/Image";

function About() {
  return (
    <Box>
      <Navbar onPage={PageEnum.about} />
      <BigTitle
        mainTitleWidth={400}
        backGroundTitle='about us'
        mainTitle='Wardiere Inc.'
        backGroundTitleWidth={1000}
        mainTitleOffsetTop={20}
        backGroundTitleOffsetTop={13}
        height={400} />
      <Box sx={{
        position: 'relative',
        display: 'flex',
        width: '80%',
        left: '10%'
      }}>
        <Box sx={{
          flexGrow: 1,
          textAlign: 'center',
          pl: 10,
          pt: 10
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sollicitudin erat. Nunc in neque massa. Etiam faucibus elementum rutrum. Cras sed arcu sed leo ullamcorper maximus et quis est. Pellentesque eget ex ipsum. Donec diam sem, rhoncus tempus fringilla id, consequat pulvinar tortor. Curabitur id suscipit est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vehicula augue nisl, sit amet maximus diam blandit sit amet. Sed in ipsum sed mi mollis rutrum sed eget magna. Maecenas diam neque, lobortis ac efficitur eu, mollis et mauris.
          Fusce blandit eros ac massa vehicula, ut semper mi condimentum. Ut enim est, dictum ac mollis in, vulputate sit amet nibh. Duis sit amet odio nulla. Donec suscipit nisi nibh, non commodo eros auctor et. Pellentesque vehicula mollis dictum. Donec at magna vitae neque feugiat elementum.
        </Box>
        <Box sx={{
          flexGrow: 1,
        }}>
          <Box sx={{
            marginLeft: 10
          }}>
            <Image image={aboutImg} height={300} width={450} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export {About}
