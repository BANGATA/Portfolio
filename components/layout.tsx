import Head from "next/head";

//importing chakra ui components
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Layout = ({ children }: any) => {
  return (
    <Box>
      <Head>
        <title>Raditya Herkristito</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300&family=Rubik:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mina:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300&family=Rubik:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nabla:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300&family=Rubik:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee Hairline:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300&family=Rubik:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300&family=Rubik:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/rocket.png" />
      </Head>
      <Box>{children}</Box>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(Layout), {
  ssr: false,
});
