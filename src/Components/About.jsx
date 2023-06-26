import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
// import resume from "../docs/Neerav_Khatri_Resume.pdf";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import GitHub from "./GitHub";
import resume from "../Docs/Aniket_Ghormare_Resume.pdf";

export default function About() {
  return (
    <div className="about section" id="about">
      <Box w="80%" m="auto" mt="5%" p="30px">
        <VStack>
          <Heading textDecoration="underline" color="rgb(232,118,118)" mb="5%">
            About Me
          </Heading>
          <Text
            id="user-detail-name"
            fontWeight="bold"
            fontSize={{ base: "xl", md: "3xl" }}
          >
            Hello! I'm <span style={{ color: "rgb(66,153,225)" }}>Aniket Ghormare</span>
          </Text>
          <Text
            id="user-detail-intro"
            fontSize={{ base: "md", md: "2xl" }}
            w="80%"
          >
            A full stack developer, with 1200+ hours of coding practice, 300+
            hours of Data structure and algorithms. High adaptability to learn
            and collaborate in a rapidly changing environment.As a Full-Stack
            Developer, I'm well-versed in the latest front-end technologies such
            as React, Redux, and Chakra UI, and have worked with Node.js,
            Express.js, MongoDB, and other back-end tools. Looking forward to
            working as a web developer with a reputed firm driven by technology.{" "}
          </Text>
          <Box pt="20px">
            <Button
              id="resume-button-2"
              bgColor="rgb(66,153,225)"
              color="#3e2723"
              fontSize="1.5em"
            
            >
              
                <a
                  id="resume-link-2"

                  href={resume}
                  download
                  textAlign="left"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/13foJs_pga6A6vF-wAl1gQ8jLGi3Ud1gd/view?usp=sharing"
                    )
                  }
                >
                  Resume
                </a>
           

            </Button>
            <HStack gap="20px" mt="10px">
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
          </Box>
        </VStack>
      </Box>
      <GitHub />
    </div>
  );
}

{
  /* <Button id="resume-button-2" color="whiteAlpha.900" bgColor="#86C232" fontSize={"1.5em"} _hover={{border: "1px solid #86C232", bgColor: "transparent", color: "#86C232"}}>
                        <a href={resume} download="Neerav-Khatri-Resume.pdf" onClick={Download} id="resume-link-2">
                            Resume
                        </a>
                    </Button> */
}