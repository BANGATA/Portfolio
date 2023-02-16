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
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Link from "next/link";

const Apps = () => {
  const modal1 = useDisclosure();
  return (
    <>
      <Flex
        minH={"100vh"}
        border={"solid"}
        flexDir={"column"}
        bgRepeat={"no-repeat"}
        bgImage="/space.gif"
        bgPosition="center"
      >
        <Navbar />
        <Flex minH={"90vh"} justify={"center"} align={"center"}>
          <Flex
            bgColor={"white"}
            borderRadius={25}
            h={"45vh"}
            w={300}
            justify={"center"}
            align={"center"}
            fontFamily={"Bungee Hairline"}
            fontWeight={"extrabold"}
            color={"black"}
            fontSize={[20, 20, 20, 24]}
            bgColor={'red'}
          >
            <Text _hover={{ textDecoration: "underline" }} onClick={modal1.onOpen}>Kumapu</Text>
          </Flex>
        </Flex>
        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Kumapu</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              KUMAPU merupakan aplikasi yang dibuat untuk monitoring pembayaran
              kontrakan dan menggantikan excel ataupun kertas untuk mencatat
              transaksi yang berlangsung. KUMAPU merupakan project kelompok
              untuk semester 5 dan saya bertanggung jawab untuk mengerjakan
              Frontend. KUMAPU dibuat menggunakan Ionic React untuk Frontend dan
              Laravel untuk Backend.
            </ModalBody>
            <ModalFooter>
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=umn.ac.kumapu&hl=en"
                }
              >
                <Text _hover={{ textDecoration: "underline" }}>Link</Text>
              </Link>
              <Button colorScheme="blue" ml={3} onClick={modal1.onClose}>
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

export default Apps;
