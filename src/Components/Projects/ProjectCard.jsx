import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { BsGithub } from "react-icons/bs";
  import { SiNetlify } from "react-icons/si";
  
  export default function ProjectCard({ data }) {
    return (
      <div className="project-card">
        <Box mb='50px' border="1px solid rgb(66,153,225)" borderRadius="10px" p="10px" mt="20px"  _hover={{ boxShadow: "rgb(57, 142, 211) 0px 4px 16px, rgb(45, 140, 218) 0px 8px 16px;"  }}>
          <Flex
            direction={{ base: "column", sm: "column", lg: "row" }}
            gap="20px"
          >
            <Box
              w={{ sm: "100%", lg: "50%" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt="15px"
              mb='15px'
            >
              <Image
                w="90%"
                h="300px"
                borderRadius="15px"
                src={data.src}
                alt="Optimizely"
              />
            </Box>
            <Box w={{ sm: "100%", lg: "50%" }}>
              <VStack w="80%" m="auto">
                <Heading
                  className="project-title"
                  fontWeight="bold"
                  mb="30px"
                  fontSize={{ base: "2xl", md: "4xl" }}
                >
                  {data.name}
                </Heading>
                <Text
                  className="project-description"
                  fontSize={{ base: "sm", md: "lg" }}
                >
                  {data.desc}
                </Text>
                <Box mb="20px">
                  <Text fontWeight="bold" fontSize={{ base: "1em", md: "1.5em" }}>
                    Tech Stack:
                  </Text>
                  <Text
                    className="project-tech-stack"
                    fontSize={{ base: "sm", md: "lg" }}
                  >
                    {data.stack}
                  </Text>
                </Box>
              </VStack>
              <Box m="auto" mt="20px">
                <Link className="project-github-link" href={data.github} isExternal>
                  <Button bgColor="rgba(19, 20, 20, 0.664)" color="#dbd7d7" _hover={{bgColor:"#424242",color:"#dbd7d7"}} gap="10px" m="20px">
                    Github
                    <BsGithub />
                  </Button>
                </Link>
                <Link className="project-deployed-link" href={data.deploy} isExternal>
                  <Button bgColor="#1565C0" color="#ebe3e2" gap="10px" _hover={{bgColor:"#0D47A1",color:"#ebe3e2"}} >
                    Deployed
                    <SiNetlify />
                  </Button>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
      </div>
    );
  }