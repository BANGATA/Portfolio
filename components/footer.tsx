import { Flex, HStack, Box, Text, VStack } from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
      <Box p={5} backdropFilter="auto" backdropBlur="8px">
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Text
            fontFamily={"Bungee Hairline"}
            fontWeight={"bold"}
            fontSize={[14, 16, 20, 20]}
            color={"white"}
          >
            Copyright © 2023 - Raditya Herkristito
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
