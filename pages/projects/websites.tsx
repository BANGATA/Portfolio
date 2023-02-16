import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
  useDisclosure,
  Stack,
  Text,
  Button
} from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import Link from "next/link";

const Websites = () => {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();
  const modal4 = useDisclosure();
  const modal5 = useDisclosure();
  return (
    <>
      <Flex
        minH={"100vh"}
        bgRepeat={"no-repeat"}
        bgImage="/space.gif"
        bgPosition="center"
        flexDir={"column"}
      >
        <Navbar />
        <Stack h={"90vh"} flexDir={"column"} p={5} spacing={8}>
          <motion.div
            whileHover={{
              x: 0,
              backgroundColor: "#3499FF",
              boxShadow: "10px 10px 0 #3A3985",
              borderRadius: "25px",
            }}
          >
            <Flex
              h={"10vh"}
              w={"100%"}
              borderRadius={25}
              align={"center"}
              fontFamily={"Bungee Hairline"}
              color={"white"}
              fontWeight={"extrabold"}
              fontSize={24}
              backdropFilter="auto"
              backdropBlur="14px"
              justify={"center"}
              onClick={modal1.onOpen}
            >
              Nasa
            </Flex>
          </motion.div>
          <motion.div
            whileHover={{
              x: 0,
              backgroundColor: "#e5d364",
              boxShadow: "10px 10px 0 #F02262",
              borderRadius: "25px",
            }}
          >
            <Flex
              h={"10vh"}
              w={"100%"}
              borderRadius={25}
              align={"center"}
              fontFamily={"Bungee Hairline"}
              color={"white"}
              fontWeight={"extrabold"}
              fontSize={24}
              backdropFilter="auto"
              backdropBlur="14px"
              justify={"center"}
              onClick={modal2.onOpen}
            >
              MAXIMA 2022
            </Flex>
          </motion.div>
          <motion.div
            whileHover={{
              x: 0,
              backgroundColor: "#6047DF",
              boxShadow: "10px 10px 0 #E5CCC3",
              borderRadius: "25px",
            }}
          >
            <Flex
              h={"10vh"}
              w={"100%"}
              borderRadius={25}
              align={"center"}
              fontFamily={"Bungee Hairline"}
              color={"white"}
              fontWeight={"extrabold"}
              fontSize={24}
              backdropFilter="auto"
              backdropBlur="14px"
              justify={"center"}
              onClick={modal3.onOpen}
            >
              Mebtoon
            </Flex>
          </motion.div>
          <motion.div
            whileHover={{
              x: 0,
              backgroundColor: "#38A2D7",
              boxShadow: "10px 10px 0 #561139",
              borderRadius: "25px",
            }}
          >
            <Flex
              h={"10vh"}
              w={"100%"}
              borderRadius={25}
              align={"center"}
              fontFamily={"Bungee Hairline"}
              color={"white"}
              fontWeight={"extrabold"}
              fontSize={24}
              backdropFilter="auto"
              backdropBlur="14px"
              justify={"center"}
              onClick={modal4.onOpen}
            >
              JOB SEEKER
            </Flex>
          </motion.div>
          <motion.div
            whileHover={{
              x: 0,
              backgroundColor: "#0CCDA3",
              boxShadow: "10px 10px 0 #C1FCD3",
              borderRadius: "25px",
            }}
          >
            <Flex
              h={"10vh"}
              w={"100%"}
              borderRadius={25}
              align={"center"}
              fontFamily={"Bungee Hairline"}
              color={"white"}
              fontWeight={"extrabold"}
              fontSize={24}
              backdropFilter="auto"
              backdropBlur="14px"
              justify={"center"}
              onClick={modal5.onOpen}
            >
              PERSONAL PORTFOLIO
            </Flex>
          </motion.div>
        </Stack>
        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>NASA</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Website tersebut merupakan project ujian akhir semester 3 lalu
              saya. Website tersebut dibuat oleh tiga orang. Website tersebut
              menggunakan ReactJs dan menggunakan API dari api.nasa.gov
            </ModalBody>
            <ModalFooter>
              <Link href={"https://uaspti-steel.vercel.app/"}>
                <Text _hover={{ textDecoration: "underline" }}>Link</Text>
              </Link>
              <Button colorScheme="blue" ml={3} onClick={modal1.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={modal5.isOpen} onClose={modal5.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Personal Portfolio</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Website ini merupakan website portfolio untuk fotografi. Website
              ini merupakan website salah satu client saya. Website ini dibuat
              menggunakan Next Js.
            </ModalBody>
            <ModalFooter>
              <Link href={"https://sindyaprilia.vercel.app/"}>
                <Text _hover={{ textDecoration: "underline" }}>Link</Text>
              </Link>
              <Button colorScheme="blue" ml={3} onClick={modal5.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>MAXIMA 2022</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Maxima merupakan acara tahunan dari UMN untuk menyambut mahasiswa
              baru. Pada tahun ini saya diberi kesempatan untuk menjadi
              koordinator divisi website bagian frontend. Website tersebut masih
              dalam tahap pengembangan. Website tersebut dibuat menggunakan
              NextJs dengan beberapa library antara lain Chakra UI, Axios, dan
              Framer motion.
            </ModalBody>
            <ModalFooter>
              <Link href={"https://github.com/MAXIMA-2022/mxm22-app-client/"}>
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
            <ModalHeader>Mebtoon</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Mebtoon merupakan website yang dibuat untuk menyerupai webtoon.
              Website ini dibuat dengan HTML, CSS, dan JavaScript saja. Website
              ini saya buat atas permintaan client saya. Website ini tidak saya
              deploy karena client saya tidak meminta untuk di-hosting
            </ModalBody>
            <ModalFooter>
              <Link
                href={
                  "https://drive.google.com/drive/folders/1Ur5FB25aa8GT2unlez0BQkqr43WI6b8V?usp=sharing"
                }
              >
                <Text _hover={{ textDecoration: "underline" }}>Link</Text>
              </Link>
              <Button colorScheme="blue" ml={3} onClick={modal3.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={modal4.isOpen} onClose={modal4.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Job Seeker</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Job Matcher merupakan website yang dibuat untuk memberikan
              rekomendasi pekerjaan kepada mengguna yang sesuai dengan tipe
              kepribadian pengguna. Website ini dibuat menggunakan Next Js dan
              hardcoded expert system yang dibuat berdasarkan 16personalities.
            </ModalBody>
            <ModalFooter>
              <Link href={"https://expert-client-final-eight.vercel.app/"}>
                <Text _hover={{ textDecoration: "underline" }}>Link</Text>
              </Link>
              <Button colorScheme="blue" ml={3} onClick={modal4.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Footer />
      </Flex>
    </>
  );
};

export default Websites;
