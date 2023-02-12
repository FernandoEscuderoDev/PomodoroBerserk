import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import MarcaImg from "../components/MarcaImg";

export default function Home() {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <ChakraBox
      transition={{ duration: 0.4, ease: "easeIn" }}
      height="100vh"
      whileTap={{
        background: [
          "linear-gradient(#ff0000 0%, rgb(17, 18, 19) 100%)",
          "linear-gradient(rgb(66, 71, 74) 0%, rgb(17, 18, 19) 100%)",
        ],
      }}
    >
      <ChakraBox
        initial={{opacity:0}}
        animate={{ opacity: [0.5, 1], scale: [0.8, 0.9, 1] }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <MarcaImg href={"/pomodoro"} />
      </ChakraBox>
    </ChakraBox>
  );
}
