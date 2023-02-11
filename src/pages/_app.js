import { Box, ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  
  return (
    <>
      <Head>
        <title>Pomodoro</title>
      </Head>
      <ChakraProvider>
        <Box bgGradient='linear-gradient(rgb(66, 71, 74) 0%, rgb(17, 18, 19) 100%)' fontFamily={'Roboto'} textColor={'white'}>
          <AnimatePresence>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
