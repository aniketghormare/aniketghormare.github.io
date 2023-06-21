import { Text } from "@chakra-ui/react";

const Name = () => {
  return (
    <div id="user-detail-name">
      <Text as="b" fontSize={{ base: "18px", md: "24px", lg: "30px" }}>
         Aniket Ghormare
      </Text>
    </div>
  );
};

export default Name;