import { Button } from "@chakra-ui/react"
import {BsGearFill} from 'react-icons/bs'

function ButtonSettings(props){

  return(
    <Button {...props} color={'black'} leftIcon={<BsGearFill/>}>
      Configuracion
    </Button>
  )
}

export default ButtonSettings