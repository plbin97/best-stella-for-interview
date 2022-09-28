import {Box} from "@mui/material";

type BigTitlePropsType = {
  mainTitleWidth: number,
  backGroundTitle: string,
  mainTitle: string,
  backGroundTitleWidth: number,
  mainTitleOffsetTop: number,
  backGroundTitleOffsetTop: number,
  height: number
}

function BigTitle(props: BigTitlePropsType) {
  return (
    <Box sx={{
      display: 'block',
      height: props.height
    }}>
      <Box sx={{
        position: "absolute",
        color: '#ff5757',
        opacity: 0.2,
        fontSize: 200,
        fontFamily: 'League Spartan',
        fontWeight: 700,
        textAlign: 'center',
        letterSpacing: 30,
        marginTop: props.backGroundTitleOffsetTop,
        width: props.backGroundTitleWidth,
        left: '50%',
        marginLeft: -(props.backGroundTitleWidth / 16)
      }}>
        {props.backGroundTitle}
      </Box>
      <Box sx={{
        position: "absolute",
        fontSize: 50,
        marginTop: props.mainTitleOffsetTop,
        width: props.mainTitleWidth,
        textAlign: 'center',
        fontWeight: 700,
        letterSpacing: 5,
        left: '50%',
        marginLeft: -(props.mainTitleWidth / 16),
      }}>
        {props.mainTitle}
      </Box>
    </Box>
  )
}

export { BigTitle}
