import { Box, Container, Text } from "@chakra-ui/react";
import HeadingComp from "~/components/HeadingComp";
import type { Route } from "./+types/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Woodkey - Contact" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Contact() {
  return (
    <Box color={"white"} bg={"secondary"} minH={"svh"} pt={100}>
      <Container>
        <HeadingComp text="Contact page" />
        <Text p={10}>COOMING SOON</Text>
      </Container>
    </Box>
  );
}
