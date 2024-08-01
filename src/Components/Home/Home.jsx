import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import Profile from "../assets/aniketimg.png";
import resume from "../assets/Aniket_Ghormare_Resume.pdf";

export default function Home() {
  const handleClick = () => {
    fetch(resume)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const aLink = document.createElement('a');
        aLink.href = fileURL;
         aLink.download = 'Aniket_Ghormare_Resume.pdf';
       
        aLink.click();
      })
      .catch((error) => {
        console.error('Error fetching or downloading the PDF:', error);
      });
  };
  return (
    <div>
      <Box id="home" w="80%" m="auto" mt="5%" p="30px">
        <Flex
          direction={{ base: "column", sm: "column", lg: "row" }}
          gap="30px"
        >
          <Box
            w={{ base: "100%", sm: "100%", lg: "50%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb='20px'
          >
            <Stack direction="column">
              <Box textAlign="left">
                <Heading fontSize={{ base: "2em", md: "3em", lg: "4rem" }}>
                  Hello!
                </Heading>
                <Heading fontSize={{ base: "2em", md: "3em", lg: "4rem" }}>
                  I'm <span style={{ color: "rgb(66,153,225)" }}>Aniket,</span>
                </Heading>
                <Heading fontSize={{ base: "2em", md: "3em", lg: "4rem" }}>
                  Full Stack Web Developer
                </Heading>
              </Box>
              <a href='https://drive.google.com/file/d/1JMWYYCIRBcoKpQ-dDhK9s1D9sDshnXTy/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <Button id="resume-button-2"
                  p="10px"
                  w="60%"
                  mt="5px"
                  bgColor="rgb(71, 105, 133)"
                  color="#e9c6c6"
                  fontSize="1.5em"
                  _hover={{
                    bgColor: "rgb(33, 105, 163)",
                    color: "#ebc9c9",
                    fontSize: "1.5em",
                  }}
                  onClick={() => handleClick()}>
                  Resume
                </Button>
              </a>
              <HStack alignItems="center" gap="20px" m="auto">
                <Link href="mailto:aniketghormare62@gmail.com" isExternal>
                  <GoMail size="3em" />
                </Link>
                <Link href="https://github.com/aniketghormare" isExternal>
                  <BsGithub size="2em" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aniket-ghormare-433983188/"
                  isExternal
                >
                  <BsLinkedin size="2em" />
                </Link>
              </HStack>
            </Stack>
          </Box>
          <Box
            class="home-img"
            w={{ base: "100%", sm: "100%", lg: "50%" }}
            // w="70%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              class="home-img"
              //borderRadius="50%"
              src={Profile}
              alt="Aniket Profile Picture"
              w="75%"
              border="1px solid black"
              borderRadius="50%"
              marginTop="-30px"
              borderColor="#f7d9d8"


            />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}