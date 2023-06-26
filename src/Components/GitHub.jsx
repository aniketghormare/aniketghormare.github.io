import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export default function Github() {
  return (
    <div>
      <Box w="70%" m="auto" mt="5%" p="30px">
        <Box>
          <Heading textDecoration="underline" color="rgb(232,118,118)" mb="5%">
            Github Statistics
          </Heading>
          <Flex
            justifyContent="space-around"
            direction={{ base: "column", sm: "column", lg: "row", xl: "row" }}
            gap="10px"
          >
            <Box>
              <Image
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=aniketghormare"
                alt="Stats"
              />
            </Box>
            <Box>
              <Image
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=aniketghormare"
                alt="Strek"
              />
            </Box>
            <Box>
              <Image
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=aniketghormare"
                alt="Language"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Heading textDecoration="underline" color="rgb(232,118,118)" mb="5%" mt="5%">
            Github Calendar
          </Heading>
          <Box className="react-activity-calendar">
            <Image
              width={{ base: "100%", sm: "100%" }}
              m="auto"
              bgColor="#e0e0e0"
              borderRadius="5px"
              src="https://ghchart.rshah.org/aniketghormare"
              alt="Git Calender"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}