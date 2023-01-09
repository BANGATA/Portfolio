import {
  Flex,
  Box,
  Stack,
  Avatar,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import Footer from "./footer";

const About = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        flexDir={"column"}
        bgRepeat={"no-repeat"}
        bgImage="./space.gif"
        bgPosition="center"
        //color={"white"}
      >
        <Navbar />
        <Flex minH={"91.5vh"} justify={"center"} align={"center"} color={"white"}>
          <Flex
            border={"solid"}
            h={[600, 550, 500, 500]}
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
            <Flex
              justify={"space-between"}
              align={"center"}
              h={"100%"}
              w={"100%"}
              borderRadius={25}
              flexDir={["column", "column", "row", "row"]}
            >
              <Flex
                //border={"solid"}
                w={["100%", "100%", "50%", "50%"]}
                h={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                borderLeftRadius={25}
              >
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={3}
                  //border={"solid"}
                  h={"100%"}
                  w={"100%"}
                >
                  <Avatar
                    src={"foto.webp"}
                    w={[75, 75, 150, 150]}
                    h={[75, 75, 150, 150]}
                    m={3}
                  />
                  <Text
                    fontFamily={"Nabla"}
                    fontSize={[14, 20, 28, 32]}
                    textAlign={"center"}
                  >
                    Raditya Herkristito
                  </Text>
                  <Text
                    fontFamily={"Mina"}
                    fontSize={[12, 14, 16, 18]}
                    fontWeight={"bold"}
                    color={"white"}
                  >
                    Frontend Developer
                  </Text>
                  <Text
                    textAlign={"justify"}
                    px={5}
                    fontFamily={"Mina"}
                    fontSize={[12, 12, 12, 16]}
                    color={"white"}
                  >
                    I am an undergraduate student majoring in computer science
                    at Universitas Multimedia Nusantara and an passionate
                    Frontend Developer. Interested in 3D Website, Creative
                    Coding, and Frontend Development. Presently learning to
                    develop my skills in 3D website development. Equipped with a
                    diverse and promising skill-set. Able to effectively
                    self-manage during independent projects, as well as
                    collaborate in a team setting.
                  </Text>
                </Stack>
              </Flex>
              <Flex
                //border={"solid"}
                w={["100%", "100%", "50%", "50%"]}
                h={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRightRadius={25}
                mb={3}
              >
                <Stack
                  w={"full"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={5}
                >
                  <Text fontFamily={"Nabla"} fontSize={[14, 20, 28, 32]}>
                    Language
                  </Text>
                  <HStack
                    //border={"solid"}
                    w={"full"}
                    justify={"center"}
                    align={"center"}
                    spacing={5}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <Image src={"html.png"} alt="html" w={[50, 50, 50, 75]} />
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <Image src={"css.png"} alt="css" w={[50, 50, 50, 75]} />
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <Image
                        src={"js.png"}
                        alt="javascript"
                        w={[50, 50, 50, 75]}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <Image
                        src={"ts.png"}
                        alt="typescript"
                        w={[50, 50, 50, 75]}
                      />
                    </motion.div>
                  </HStack>
                  <Text fontFamily={"Nabla"} fontSize={[14, 20, 28, 32]}>
                    Framework
                  </Text>
                  <HStack
                    //border={"solid"}
                    w={"full"}
                    justify={"center"}
                    align={"center"}
                    spacing={5}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <Image
                        src={"next.png"}
                        alt="Next.js"
                        w={[50, 50, 50, 75]}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <Image
                        src={"react.png"}
                        alt="react"
                        w={[50, 50, 50, 75]}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <Image
                        src={"django.png"}
                        alt="django"
                        w={[50, 50, 50, 75]}
                      />
                    </motion.div>
                  </HStack>
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default About;
