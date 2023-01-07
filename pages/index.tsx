import { Box } from "@chakra-ui/react";

import Welcoming from "../components/welcome";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Box minH={"100vh"}>
        <Welcoming />
      </Box>
    </>
  );
};

export default Home;
