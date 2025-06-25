import { Heading } from "@chakra-ui/react";

export default function HeadingComp({ text }: any) {
  return (
    <Heading
      position="relative"
      w={"fit-content"}
      fontWeight="medium"
      fontSize={"2xl"}
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-5px",
        left: 0,
        w: "45%",
        h: "3px",
        bg: "primary",
      }}
    >
      {text}
    </Heading>
  );
}
