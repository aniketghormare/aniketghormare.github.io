import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import resume from "../assets/Aniket_Ghormare_Resume.pdf";
export default function About() {
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
      aLink.download = 'Om-kanta-Yadav-Resume.pdf';
      aLink.click();
    })
    .catch((error) => {
      console.error('Error fetching or downloading the PDF:', error);
    });
};

  return (
    <div className="about section" id="about">
      <Box w="80%" m="auto" mt="5%" p="30px">
        <VStack>
          <Heading _hover={{ textDecoration: "underline" }} textDecoration="none" color="rgb(210, 226, 167)" mb="5%">
            About Me
          </Heading>
          <Text
            id="user-detail-name"
            fontWeight="bold"
            fontSize={{ base: "xl", md: "3xl" }}
          >
            Hello! I'm <span style={{ color: "rgb(30, 150, 248)" }}>Aniket Ghormare</span>
          </Text>
          <Text
            id="user-detail-intro"
            fontSize={{ base: "md", md: "2xl" }}
            w="80%"
          >
            As an analytical and goal-oriented Full Stack Web Developer, I have accumulated over 1200 hours 
            of coding practice and more than 300 hours of experience in data structures and algorithms. I 
            possess a robust knowledge of technologies such as React.js, Chakra UI, Node.js, Express.js, 
            and MongoDB, and I approach challenges with a problem-solving mindset and high adaptability. 
            I aim to leverage my expertise to create world-class projects that contribute to the growth 
            of myself and the organization.{" "}
          </Text>
          <Box pt="20px">
          <a  id="resume-link-2" href='https://drive.google.com/file/d/1JMWYYCIRBcoKpQ-dDhK9s1D9sDshnXTy/view?usp=sharing' target="_blank" rel="noopener noreferrer"  className='nav-link resume'>
          <Button 
            bgColor="rgb(71, 105, 133)"
            color="#e9c6c6"
            p="5px 25px"
            fontSize="1.5em"
            _hover={{
              bgColor: "rgb(33, 105, 163)",
              color: "#ebc9c9",
              fontSize: "1.5em",
            }}
            onClick={()=>handleClick()}>
            Resume
            </Button>
            </a>
            <HStack gap="20px" mt="10px">
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
          </Box>
        </VStack>
      </Box>
    </div>
  );
}