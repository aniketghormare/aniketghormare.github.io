import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";

export default function GitHub() {
  return (
    <div>
      <Box w="70%" m="auto" mt="5%" p="30px">
        <Box>
          <Heading _hover={{textDecoration:"underline"}} textDecoration="none" color="rgb(210, 226, 167)" mb="5%">
            GITHUB STATISTICS
          </Heading>
          <Center>
          <Flex
            justifyContent="space-around"
            direction={{ base: "column", sm: "column", lg: "row", xl: "row" }}
            gap="10px"
          >
            <Box>
              <Image
                id="github-stats-card"
                // src="https://github-readme-stats.vercel.app/api?username=Omkanta"
                src="https://camo.githubusercontent.com/5e8cb1c558608ab090ee9b7c9871a921af72ec6d91e94b2c3a3729f2e369214c/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e696b657467686f726d6172652673686f775f69636f6e733d74727565266c6f63616c653d656e"
                alt="Stats"
              />
            </Box>
            <Box>
              <Image
                id="github-streak-stats"
                src="https://camo.githubusercontent.com/b7e1af95f5c7d2083892aa72071c2e47b64cc1a032131d88809c96b3cc375cec/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d616e696b657467686f726d61726526"
                // src="https://github-readme-streak-stats.herokuapp.com?user=Omkanta"
                alt="Strek"
              />
            </Box>
            <Box>
              <Image
                id="github-top-langs"
                src="https://camo.githubusercontent.com/6d47b982c3740c763fb0185886a63bbe083c16fb4a89f4ff5e8410ad564716d2/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d616e696b657467686f726d6172652673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
                alt="Language"
              />
            </Box>
          </Flex>
          </Center>
        </Box>
        <Box>
          <Heading _hover={{textDecoration:"underline"}} textDecoration="none" color="rgb(210, 226, 167)" mb="5%" mt="5%">
            GITHUB CALENDER
          </Heading>
          <Box className="react-activity-calendar">
            <Image
              width={{ base: "100%", sm: "100%" }}
              m="auto"
              bgColor="#e0e0e0"
              borderRadius="5px"
              src="https://ghchart.rshah.org/aniketghormare"
              // src="https://ghchart.rshah.org/Omkanta"
              alt="Git Calender"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}