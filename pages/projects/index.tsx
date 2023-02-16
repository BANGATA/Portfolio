import { Center, Flex, Wrap, WrapItem, VStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Atropos from "atropos/react";
import "atropos/css";
import Logo1 from "../../components/uiux.svg";
import Logo2 from "../../components/web.png";
import Logo3 from "../../components/mobile.png";

const Projects = () => {
  const prj = [
    { id: 1, name: "Mockups", img: Logo1, arah: "/projects/mockups" },
    { id: 2, name: "Websites", img: Logo2, arah: "/projects/websites" },
    { id: 3, name: "Mobile Apps", img: Logo3, arah: "/projects/apps" },
  ];
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
        <Flex
          minH={"91.5vh"}
          justify={"center"}
          align={"center"}
          color={"white"}
          flexDir={"column"}
        >
          <Flex
            w={"100%"}
            align={"center"}
            justifyContent={"center"}
            fontFamily={"Orbitron"}
            fontWeight={"bold"}
            fontSize={[14, 20, 20, 20]}
          >
            My Projects
          </Flex>
          <Wrap
            spacing={["30px", "30px", "30px", "100px"]}
            w={"100%"}
            justify={"center"}
            align={"center"}
            p={5}
          >
            {prj.map((i: any) => {
              return (
                <Atropos activeOffset={40} shadowScale={1.05} key={i.id}>
                  <WrapItem>
                    <Center
                      w="250px"
                      h={["300px", "400px", "400px", "400px"]}
                      backdropFilter="auto"
                      backdropBlur="14px"
                      borderRadius={25}
                      bgGradient="linear(to-tl, #0A0068, #1B67E8, #6209C3)"
                    >
                      <VStack
                        spacing={10}
                        fontFamily={"Bungee Hairline"}
                        color={"white"}
                        fontWeight={"bold"}
                      >
                        <Flex
                          w={75}
                          h={75}
                          border={"solid"}
                          bg={"white"}
                          borderRadius={10}
                        >
                          <Image src={i.img} alt="Logo" />
                        </Flex>
                        <Flex fontSize={[14, 20, 20, 20]}>{i.name}</Flex>
                        <Link href={i.arah}>
                          <a>
                            <Button
                              color={"white"}
                              variant={"none"}
                              _hover={{
                                color: "gray.300",
                                textDecoration: "underline",
                              }}
                            >
                              See More...
                            </Button>
                          </a>
                        </Link>
                      </VStack>
                    </Center>
                  </WrapItem>
                </Atropos>
              );
            })}
          </Wrap>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Projects;
