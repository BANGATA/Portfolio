import { Flex, Text } from "@chakra-ui/react";
import Navbar from "./navbar";
import AnimatedText from "react-animated-text-content";
import Footer from "./footer";

const Welcoming = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        flexDir={"column"}
        bgRepeat={"no-repeat"}
        bgImage="./space.gif"
        bgPosition="center"
      >
        <Navbar />
        <Flex h={"91.5vh"} justify={"center"} align={"center"}>
          <Text
            fontFamily={"Bungee Hairline"}
            fontSize={[20, 20, 30, 50]}
            fontWeight={"extrabold"}
          >
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="lights"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Welcome To My Universe!
            </AnimatedText>
          </Text>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Welcoming;
