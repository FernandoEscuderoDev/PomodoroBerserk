import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../assets/marca.jpg";

export default function MarcaImg({href}) {

  return (
    <Box
      as={Link}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      height={"100vh"}
      href={href}
    >
      <Box
        as={Image}
        src={profilePic}
        w={"100%"}
        height="100%"
        objectFit={"contain"}
        alt='marca de guts'
        priority={true}
      />
    </Box>
  );
}
