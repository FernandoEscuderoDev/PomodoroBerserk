import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { useState } from "react";
import Pomodoro from "@/components/Pomodoro.jsx";
import Settings from "@/components/Settings.jsx";
import { SettingsContext } from "../components/SettingsContext.js";
export default function PomodoroPage() {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const [showSettings, setShowSettings] = useState(false);
  const [studyMinutes, setStudyMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <SettingsContext.Provider
      value={{
        studyMinutes,
        breakMinutes,
        setStudyMinutes,
        setBreakMinutes,
      }}
    >
      {showSettings ? (
        <ChakraBox
          zIndex={"50"}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 1] }}
          transition={{duration: 1, ease: "easeInOut" }}
        >
          <Settings showSetSettings={setShowSettings} />
        </ChakraBox>
      ) : (
        <ChakraBox
          animate={{
            background: [
              "linear-gradient(#ff0000 0%, rgb(17, 18, 19) 100%)",
              "linear-gradient(rgb(66, 71, 74) 0%, rgb(17, 18, 19) 100%)",
            ],
          }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          height="100vh"
          textColor={"white"}
        >
          <ChakraBox
            zIndex={"50"}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          >
            <Pomodoro showSetSettings={setShowSettings} />
          </ChakraBox>
        </ChakraBox>
      )}
    </SettingsContext.Provider>
  );
}
