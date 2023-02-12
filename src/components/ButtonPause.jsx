import { Box } from "@chakra-ui/react"
import {BsFillPauseCircleFill} from 'react-icons/bs'

function ButtonPause(props){
  return(
    <Box {...props} as="button" rounded={"100%"}>
      <BsFillPauseCircleFill color="white" fontSize={"4.5rem"}/>
    </Box>
  )
}

export default ButtonPause