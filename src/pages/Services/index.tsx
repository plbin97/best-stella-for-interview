import Navbar from "../../components/Navbar";
import {PageEnum} from "../../types";
import {Box} from "@mui/material";
import {BigTitle} from "../../components/BigTitle";
import {ServiceCard} from "./ServiceCard";
import brandingPicture from '../../media/branding.png'
import designingPicture from '../../media/designing.png'
import packingPicture from '../../media/packing.png'

function Services() {
  return (
    <Box>
      <Navbar onPage={PageEnum.services} />
      <BigTitle
        mainTitleWidth={600}
        backGroundTitle='services'
        mainTitle="Everything a new business needs. "
        backGroundTitleWidth={1000}
        mainTitleOffsetTop={16}
        backGroundTitleOffsetTop={13}
        height={400} />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'relative',
        width: '80%',
        left: '10%'
      }}>
        <Box>
          <ServiceCard title='Branding' content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sollicitudin erat. Nunc in neque massa. '
          } picture={brandingPicture} />
        </Box>
        <Box>
          <ServiceCard title='Designing' content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sollicitudin erat. Nunc in neque massa. '
          } picture={designingPicture} />
        </Box>
        <Box>
          <ServiceCard title='Packaging' content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sollicitudin erat. Nunc in neque massa. '
          } picture={packingPicture} />
        </Box>
      </Box>
    </Box>
  )
}
export {Services}
