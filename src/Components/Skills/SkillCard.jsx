import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function SkillCard({ src, name }) {
  return (
    <Box className="skills-card">
      <Box
        textAlign="center"
        border="2px solid rgb(20, 96, 158)"
        borderRadius="15px"
        m='3px'
        _hover={{ boxShadow: "rgb(57, 142, 211) 0px 4px 16px, rgb(45, 140, 218) 0px 8px 16px;" }}
      >
        <Flex flexDirection={"column"}>
          <Box
            className="skills-card-img"
            display="flex"
            justifyContent="center"
            alignItems="center"
            // h={{ base: "15vh", sm: "20vh", md: "25vh", lg: "25vh" }}
          >
            <Image
            p='10px'
              w={{ base: "40%", sm: "35%", md: "40%", lg: "50%" }}
              src={src}
              alt={name}
            />
          </Box>
          <Text
            className="skills-card-name"
            fontSize={{ base: "md", sm: "md", md: "xl", lg: "2xl" }}
            mb="5px"
          >
            {name}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}