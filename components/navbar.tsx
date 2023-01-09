import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Image,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = "white";
  return (
    <>
      <Box px={4} backdropFilter="auto" backdropBlur="8px">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box mx={5}>
              <Link href={"/"}>
                <Button color={color} variant={"none"}>
                  <Text fontFamily={"Nabla"} fontSize={[14, 20, 20, 20]}>
                    {"<Raditya />"}
                  </Text>
                </Button>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontFamily={"Bungee Hairline"}
              color={"white"}
            >
              <Link href={"/about"}>
                <Button
                  color={color}
                  variant={"none"}
                  _hover={{
                    color: "gray.300",
                  }}
                >
                  <Text fontSize={["md", "xs", "md", "md", "lg"]}>About</Text>
                </Button>
              </Link>
              <Link href={"/projects"}>
                <Button
                  color={color}
                  variant={"none"}
                  _hover={{
                    color: "gray.300",
                  }}
                >
                  <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                    Projects
                  </Text>
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button
                  color={color}
                  variant={"none"}
                  _hover={{
                    color: "gray.300",
                  }}
                >
                  <Text fontSize={["md", "xs", "md", "md", "lg"]}>Contact</Text>
                </Button>
              </Link>
            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack
              as={"nav"}
              spacing={4}
              fontFamily={"Bungee Hairline"}
              color={"white"}
            >
              <Link href={"/about"}>
                <Button
                  color={color}
                  variant={"none"}
                  _hover={{
                    color: "gray.300",
                  }}
                >
                  <Text fontSize={["md", "xs", "md", "md", "lg"]}>About</Text>
                </Button>
              </Link>
              <Link href={"/projects"}>
                <Button
                  color={color}
                  variant={"none"}
                  _hover={{
                    color: "gray.300",
                  }}
                >
                  <Text fontSize={["md", "xs", "md", "md", "lg"]}>
                    Projects
                  </Text>
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button
                  color={color}
                  variant={"none"}
                  _hover={{
                    color: "gray.300",
                  }}
                >
                  <Text fontSize={["md", "xs", "md", "md", "lg"]}>Contact</Text>
                </Button>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
      {/* <Flex
        minH={"100vh"}
        flexDir={"column"}
        bgRepeat={"no-repeat"}
        bgImage="./space.gif"
        bgPosition="center"
      ></Flex> */}
    </>
  );
};

export default Navbar;
