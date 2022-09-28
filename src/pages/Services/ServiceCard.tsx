import {Box} from "@mui/material";

type ServiceCardPropsType = {
  title: string,
  content: string,
  picture: any
}
function ServiceCard(props: ServiceCardPropsType) {
  return (
    <Box sx={{
      marginLeft: 10,
      marginRight: 10
    }}>
      <Box sx={{
        fontWeight: 700,
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 4
      }}>{props.title}</Box>
      <Box sx={{
        marginBottom: 3,
        pl: 1,
        pr: 1,
        textAlign: 'justify'
      }}>{props.content}</Box>
      <Box>
        <img src={props.picture} className='zoom' width='100%' height='100%' alt=''/>
      </Box>
    </Box>
  )
}
export {ServiceCard}
