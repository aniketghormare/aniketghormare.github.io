import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { MdAddIcCall } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <Box id="contact" bgColor="rgb(44,63,70)" color="#e0e0e0" mt="5%" p="30px">
        <Heading textDecoration="underline"  mb="5%" mt="2%" color="rgb(232,118,118)">
          Contact
        </Heading>
        <Heading color="rgb(66,153,225)">Aniket Ghormare</Heading>
        <Flex
          direction={{ base: "column", sm: "column", lg: "row", xl: "row" }}
          gap="10px"
          mt="30px"
          mb="3%"
          justifyContent="space-around"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            id="contact-phone"
          >
            <Link href="">
              <MdAddIcCall size="3em" />
            </Link>
            <Link href="">
              <Text fontSize="lg">+91 9340877390</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            id="contact-github"
          >
            <Link href="https://github.com/aniketghormare" isExternal>
              <BsGithub size="3em" />
            </Link>
            <Link href="https://github.com/aniketghormare" isExternal>
              <Text fontSize="lg">Aniket Ghormare</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            id="contact-linkedin"
          >
            <Link
              href="https://www.linkedin.com/in/aniket-ghormare-433983188/"
              isExternal
            >
              <BsLinkedin size="3em" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aniket-ghormare-433983188/"
              isExternal
            >
              <Text fontSize="lg" >Aniket Ghormare</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            id="contact-email"
          >
            <Link href="mailto:aniketghormare62@gmail.com" isExternal>
              <GoMail size="3em" />
            </Link>
            <Link href="mailto:aniketghormare62@gmail.com" isExternal>
              <Text fontSize="lg">aniketghormare62@gmail.com</Text>
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}