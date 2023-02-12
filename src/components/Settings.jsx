import { Flex, Box, Button } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { SettingsContext } from "./SettingsContext";
import { BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
import SliderMod from "./Slider";

function Settings(props) {

  const settingsInfo = useContext(SettingsContext);

  const [valueSliderStudy, setValueSliderStudy] = useState(
    settingsInfo.studyMinutes
  );

  const [valueSliderBreak, setValueSliderBreak] = useState(
    settingsInfo.breakMinutes
  );

  return (
    <Flex
      direction={"column"}
      justifyContent="center"
      alignItems={"center"}
      as={"form"}
      h="100vh"
      gap={10}
    >
      <Flex
        as={"main"}
        direction={"column"}
        justifyContent="center"
        w={{ base: "80%", md: "50%" }}
        gap={5}
      >
        <Box as="label" fontWeight={500}>
          Estudio: {valueSliderStudy}:00
        </Box>
        <SliderMod
          icon={BsFillBrightnessHighFill}
          bgColor={"red"}
          defaultValue={valueSliderStudy}
          submitValue={setValueSliderStudy}
        />
      </Flex>
      <Flex
        direction={"column"}
        justifyContent="center"
        w={{ base: "80%", md: "50%" }}
        gap={5}
      >
        <Box as="label" fontWeight={500}>
          Descanso: {valueSliderBreak}:00
        </Box>
        <SliderMod
          icon={BsFillMoonFill}
          bgColor={"purple"}
          defaultValue={valueSliderBreak}
          submitValue={setValueSliderBreak}
        />
      </Flex>
      <Flex gap={10} color={"white"}>
        <Button
        bg={'red.800'}
        _hover={{bgColor:'red.700'}}
          onClick={() => {
            props.showSetSettings((value) => !value);
          }}
        >
          Volver
        </Button>
        <Button
        bgColor={'green.800'}
        _hover={{bgColor:'green.700'}}
          onClick={() => {
            settingsInfo.setStudyMinutes(valueSliderStudy);
            settingsInfo.setBreakMinutes(valueSliderBreak);
            props.showSetSettings((value) => !value);
          }}
        >
          Guardar
        </Button>
      </Flex>
    </Flex>
  );
}
export default Settings;
