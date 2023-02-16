import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  Text,
  Center,
  VStack,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import Atropos from "atropos";

const Mockups = () => {
  const mu = [
    {
      id: 1,
      name: "MyBansos",
      desc: "MyBansos merupakan mockup aplikasi untuk melakukan tracking atau pelacakan terhadap bansos yang menjadi hak setiap warga negara Indonesia. Tujuan MyBansos adalah agar penyaluran bansos lebih transparan dan meminimalisir korupsi yang terjadi. Project ini dikerjakan secara berkelompok yang terdiri dari empat orang untuk memenuhi nilai ujian akhir semester 3.",
      link: "https://drive.google.com/drive/folders/11IozSUfxALCqdMFaKelsdiFMcLN1S_wl?usp=sharing",
      color: "#af0003",
    },
    {
      id: 2,
      name: "Paw Squad",
      desc: "Paw Squad merupakan mockup aplikasi yang dibuat untuk menunjang komunitas pecinta binatang terutama anjing dan kucing. Paw Squad menyediakan lima fitur utama yaitu, Visit Vet untuk mencari lokasi dokter hewan terdekat, Adopt Me untuk mencari anjing atau kucing yang dapat diadopsi, Community untuk mencari komunitas yang sesuai dengan pengguna, Grooming untuk mencari lokasi salon hewan terdekat, dan Paw News untuk menampilkan beberapa berita seputar hewan peliharaan. Paw Squad merupakan project ujian tengah semester lalu pribadi saya.",
      link: "https://www.figma.com/proto/jckPGEVWoarE0KUjIYcC1k/Paw-Squad?node-id=2%3A2&starting-point-node-id=2%3A110",
      color: "#d4bb89",
    },
    {
      id: 3,
      name: "Shopee MIB",
      desc: "Shopee Make it Better merupakan project ujian akhirsemester saya pada semester 4. Project ini saya kerjakan secara berkelompok yang terdiri dari empat orang. Project ini memiliki maksud untuk memperbaiki tampilan dari Shopee karena dianggap terlalu banyak content (content overflow).",
      link: "https://www.figma.com/proto/rQiWV19LdkQKXA4IX6nEpw/HCI-Shopee?scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A6&node-id=1%3A6",
      color: "#f2512c",
    },
  ];
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();

  return (
    <>
      <Flex
        minH={"100vh"}
        flexDir={"column"}
        bgRepeat={"no-repeat"}
        bgImage="/space.gif"
        bgPosition="center"
      >
        <Navbar />
        <Wrap
          minH={"80vh"}
          spacing={["30px", "30px", "30px", "100px"]}
          w={"100%"}
          justify={"center"}
          align={"center"}
          py={[0,100]}
        >
          <WrapItem>
            <Center
              w="250px"
              h={["300px", "400px", "400px", "400px"]}
              backdropFilter="auto"
              backdropBlur="14px"
              borderRadius={25}
              bgColor={mu[0].color}
            >
              <Flex
                fontSize={[20, 20, 20, 24]}
                fontFamily={"Bungee Hairline"}
                fontWeight={"extrabold"}
                color={"white"}
                _hover={{ textDecoration: "underline" }}
                onClick={modal1.onOpen}
              >
                {mu[0].name}
              </Flex>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center
              w="250px"
              h={["300px", "400px", "400px", "400px"]}
              backdropFilter="auto"
              backdropBlur="14px"
              borderRadius={25}
              bgColor={mu[1].color}
            >
              <Flex
                fontSize={[20, 20, 20, 24]}
                fontFamily={"Bungee Hairline"}
                fontWeight={"extrabold"}
                color={"white"}
                _hover={{ textDecoration: "underline" }}
                onClick={modal2.onOpen}
              >
                {mu[1].name}
              </Flex>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center
              w="250px"
              h={["300px", "400px", "400px", "400px"]}
              backdropFilter="auto"
              backdropBlur="14px"
              borderRadius={25}
              bgColor={mu[2].color}
            >
              <Flex
                fontSize={[20, 20, 20, 24]}
                fontFamily={"Bungee Hairline"}
                fontWeight={"extrabold"}
                color={"white"}
                _hover={{ textDecoration: "underline" }}
                onClick={modal3.onOpen}
              >
                {mu[2].name}
              </Flex>
            </Center>
          </WrapItem>
        </Wrap>
        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{mu[0].name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{mu[0].desc}</ModalBody>
            <ModalFooter>
              <Link href={mu[0].link}>
                <Text _hover={{ textDecoration: "underline" }}>Link</Text>
              </Link>
              <Button colorScheme="blue" ml={3} onClick={modal1.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{mu[1].name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{mu[1].desc}</ModalBody>
            <ModalFooter>
              <Link href={mu[1].link}>
                <Text _hover={{ textDecoration: "underline" }}>Link</Text>
              </Link>
              <Button colorScheme="blue" ml={3} onClick={modal2.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={modal3.isOpen} onClose={modal3.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{mu[2].name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{mu[2].desc}</ModalBody>
            <ModalFooter>
              <Link href={mu[2].link}>
                <Text _hover={{ textDecoration: "underline" }}>Link</Text>
              </Link>
              <Button colorScheme="blue" ml={3} onClick={modal3.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* <Stack
          minH={"90vh"}
          justify={"center"}
          align={"center"}
          direction={["column", "row"]}
          spacing={[10, 10, 10, 100]}
          p={[10, 10, 10, 0]}
        > */}
        {/* <Flex
            minH={"50vh"}
            w={["100%", "30%", "30%", "20%"]}
            bgColor={mu[0].color}
            justify={"center"}
            align={"center"}
            borderRadius={25}
          >
            <Text
              fontFamily={"Bungee Hairline"}
              fontWeight={"extrabold"}
              fontSize={26}
              color={"white"}
              _hover={{ textDecoration: "underline" }}
              onClick={modal1.onOpen}
            >
              {mu[0].name}
            </Text>
          </Flex>
          <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{mu[0].name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{mu[0].desc}</ModalBody>
              <ModalFooter>
                <Link href={mu[0].link}>
                  <Text _hover={{ textDecoration: "underline" }}>Link</Text>
                </Link>
                <Button colorScheme="blue" ml={3} onClick={modal1.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Flex
            minH={"50vh"}
            w={["100%", "30%", "30%", "20%"]}
            bgColor={mu[1].color}
            justify={"center"}
            align={"center"}
            borderRadius={25}
          >
            <Text
              fontFamily={"Bungee Hairline"}
              fontWeight={"extrabold"}
              fontSize={26}
              color={"white"}
              _hover={{ textDecoration: "underline" }}
              onClick={modal2.onOpen}
            >
              {mu[1].name}
            </Text>
          </Flex>
          <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{mu[1].name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{mu[1].desc}</ModalBody>
              <ModalFooter>
                <Link href={mu[1].link}>
                  <Text _hover={{ textDecoration: "underline" }}>Link</Text>
                </Link>
                <Button colorScheme="blue" ml={3} onClick={modal2.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Flex
            minH={"50vh"}
            w={["100%", "30%", "30%", "20%"]}
            bgColor={mu[2].color}
            justify={"center"}
            align={"center"}
            borderRadius={25}
          >
            <Text
              fontFamily={"Bungee Hairline"}
              fontWeight={"extrabold"}
              fontSize={26}
              color={"white"}
              _hover={{ textDecoration: "underline" }}
              onClick={modal3.onOpen}
            >
              {mu[2].name}
            </Text>
          </Flex>
          <Modal isOpen={modal3.isOpen} onClose={modal3.onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{mu[2].name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{mu[2].desc}</ModalBody>
              <ModalFooter>
                <Link href={mu[2].link}>
                  <Text _hover={{ textDecoration: "underline" }}>Link</Text>
                </Link>
                <Button colorScheme="blue" ml={3} onClick={modal3.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal> */}
        {/* </Stack> */}

        <Footer />
      </Flex>
    </>
  );
};

export default Mockups;
