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
  import Profile from "../Docs/annu1.png";
  import resume from "../Docs/Aniket_Ghormare_Resume.pdf";
  
  export default function HomePage() {
    return (
      <div>
        <Box id="home" w="80%" m="auto" mt="5%" color="#3e2723" p="30px">
          <Flex
            direction={{ base: "column", sm: "column", lg: "row" }}
            gap="30px"
          >
            <Box
              w={{ base: "100%", sm: "100%", lg: "50%" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Stack direction="column">
                <Box textAlign="left">
                  <Heading fontSize={{ base: "2.5em", md: "3.5em", lg: "4rem" }}>
                    Hello!
                  </Heading>
                  <Heading fontSize={{ base: "2.5em", md: "3.5em", lg: "4rem" }}>
                    I'am <span style={{color:"rgb(66,153,225)"}}>Aniket</span>
                  </Heading>
                  <Heading fontSize={{ base: "2.5em", md: "3.5em", lg: "4rem" }}>
                    Full-Stack Developer
                  </Heading>
                </Box>
                <Link href={resume} download textAlign="left">
                  <Button
                  id="resume-button-1"
                    color="#3e2723"
                    bgColor="rgb(66,153,225)"
                    m={"10px"}
                    p="15px"
                    fontSize="1.5em"
                    w="60%"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/13foJs_pga6A6vF-wAl1gQ8jLGi3Ud1gd/view?usp=sharing"
                      )
                    }
                  >
                    Resume
                  </Button>
                </Link>
                <HStack gap="20px">
                  <Link href="https://github.com/aniketghormare" isExternal>
                    <BsGithub size="2em" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/aniket-ghormare-433983188/"
                    isExternal
                  >
                    <BsLinkedin size="2em" />
                  </Link>
                  <Link href="mailto:aniketghormare62@gmail.com" isExternal>
                    <GoMail size="3em" />
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