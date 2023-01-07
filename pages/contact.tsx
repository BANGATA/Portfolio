import { Flex, Text, Image, Stack, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Contact = () => {
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
        <Flex h={"91.5vh"} justify={"center"} align={"center"} color={"white"}>
          <Flex
            border={"solid"}
            h={[600, 550, 600, 500]}
            w={[350, 500, 700, 1100]}
            backdropFilter="auto"
            backdropBlur="8px"
            borderRadius={25}
            boxShadow={"dark-lg"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={["column", "column", "row", "row"]}
            color={"white"}
          >
            <VStack
              w={"100%"}
              borderRadius={25}
              h={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={10}
            >
              <Text fontFamily={"Nabla"} fontSize={["xl", "2xl", "3xl", "5xl"]}>
                Reach Me On My Social Media
              </Text>
              <Flex>
                <Stack
                  spacing={[10, 10, 5, 15, 20]}
                  w={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={["column", "column", "column", "row"]}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <Link isExternal href={"https://www.github.com/BANGATA"}>
                      <Stack
                        direction={["row", "row", "column", "column"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontFamily="Bungee Hairline"
                        fontWeight={"bold"}
                      >
                        <Image
                          src={"github.png"}
                          alt="github"
                          w={[50, 50, 50, 75]}
                        />
                        <Text
                          color={"white"}
                          fontSize={["md", "md", "sm", "md"]}
                        >
                          BANGATA
                        </Text>
                      </Stack>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <Link isExternal href={"mailto:atanasiusditya@gmail.com"}>
                      <Stack
                        direction={["row", "row", "column", "column"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontFamily="Bungee Hairline"
                        fontWeight={"bold"}
                      >
                        <Image
                          src={"email.webp"}
                          alt="email"
                          w={[50, 50, 50, 75]}
                        />
                        <Text
                          color={"white"}
                          fontSize={["md", "md", "sm", "md"]}
                        >
                          atanasiusditya@gmail.com
                        </Text>
                      </Stack>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <Link
                      isExternal
                      href={
                        "https://www.linkedin.com/in/raditya-herkristito-93976822a/"
                      }
                    >
                      <Stack
                        direction={["row", "row", "column", "column"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontFamily="Bungee Hairline"
                        fontWeight={"bold"}
                      >
                        <Image
                          src={"linkedin.png"}
                          alt="linkedin"
                          w={[50, 50, 50, 75]}
                        />
                        <Text
                          color={"white"}
                          fontSize={["md", "md", "sm", "md"]}
                        >
                          Raditya Herkristito
                        </Text>
                      </Stack>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <Link
                      isExternal
                      href={"https://www.instagram.com/raditya_herkristito/"}
                    >
                      <Stack
                        direction={["row", "row", "column", "column"]}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontFamily="Bungee Hairline"
                        fontWeight={"bold"}
                      >
                        <Image
                          src={"instagram.webp"}
                          alt="instagram"
                          w={[50, 50, 50, 75]}
                        />
                        <Text
                          color={"white"}
                          fontSize={["md", "md", "sm", "md"]}
                        >
                          @raditya_herkristito
                        </Text>
                      </Stack>
                    </Link>
                  </motion.div>
                </Stack>
              </Flex>
            </VStack>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Contact;
