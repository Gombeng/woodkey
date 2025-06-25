import { Box, Container, Text } from "@chakra-ui/react";
import HeadingComp from "~/components/HeadingComp";

export default function Work() {
  return (
    <Box  color={'white'} bg={"secondary"} minH={"svh"} pt={100}>
      <Container>
        <HeadingComp text="Work page" />
        <Text p={10}>COOMING SOON</Text>
      </Container>
    </Box>
  );
}
