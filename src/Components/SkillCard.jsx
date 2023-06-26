import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function SkillCard({ src, name }) {
  return (
    <div className="skills-card">
      <Box
        textAlign="center"
        border="1px solid rgb(66,153,225)"
        borderRadius="20px"
        _hover={{ boxShadow: "rgb(66,153,225) 0px 3px 8px;" }}
      >
        <Flex flexDirection={"column"}>
          <Box
            className="skills-card-img"
            display="flex"
            justifyContent="center"
            alignItems="center"
            h={{ base: "15vh", sm: "20vh", md: "20vh", lg: "25vh" }}
          >
            <Image
              w={{ base: "40%", sm: "40%", md: "45%", lg: "55%" }}
              src={src}
              alt={name}
            />
          </Box>
          <Text
            className="skills-card-name"
            fontSize={{ base: "md", sm: "md", md: "xl", lg: "3xl" }}
          >
            {name}
          </Text>
        </Flex>
      </Box>
    </div>
  );
}