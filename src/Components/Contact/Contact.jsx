import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { MdAddIcCall } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <Box id="contact" bgColor="rgb(13, 25, 51)" color="#e0e0e0" mt="5%" p="30px">
        <Heading _hover={{textDecoration:"underline"}} textDecoration="none"  mb="5%" mt="2%" color="rgb(210, 226, 167)">
          CONTACT
        </Heading>
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
            gap="15px"
            id="contact-phone"
          >
            <Link href="">
              <MdAddIcCall size="4em" />
            </Link>
            <Link href="">
              <Text fontSize="xl">+91 9340877390</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="15px"
            id="contact-email"
          >
            <Link href="mailto:1omkant1998@gmail.com" isExternal>
              <GoMail size="4em" />
            </Link>
            <Link href="mailto:1omkant1998@gmail.com" isExternal>
              <Text fontSize="xl">aniketghormare62@gmail.com</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="15px"
            id="contact-github"
          >
            <Link href="https://github.com/aniketghormare" isExternal>
              <BsGithub size="4em" />
            </Link>
            <Link href="https://github.com/aniketghormare" isExternal>
              <Text fontSize="xl">Aniket Ghormare</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="15px"
            id="contact-linkedin"
          >
            <Link
              href="https://www.linkedin.com/in/aniket-ghormare-433983188/"
              isExternal
            >
              <BsLinkedin size="4em" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aniket-ghormare-433983188/"
              isExternal
            >
              <Text fontSize="xl" >Aniket Ghormare</Text>
            </Link>
          </Box>

        </Flex>
      </Box>
    </div>
  );
}