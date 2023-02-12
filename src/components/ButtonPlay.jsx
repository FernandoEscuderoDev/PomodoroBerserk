import { Box } from "@chakra-ui/react";
import { BsFillPlayCircleFill } from "react-icons/bs";

function ButtonPlay(props) {
  return (
    <Box {...props} as="button" rounded={"100%"}>
      <BsFillPlayCircleFill color="white" fontSize={"4.5rem"} />
    </Box>
  );
}

export default ButtonPlay;
