import { Button, IconButton } from "@chakra-ui/react";

export function ButtonComp({ children, ...props }: any) {
  return (
    <Button
      px={6}
      bg={"primary"}
      color={"primary.50"}
      letterSpacing={1}
      borderRadius={"lg"}
      _hover={{ bg: "primary.600" }}
      {...props}
    >
      {children}
    </Button>
  );
}

export function IconButtonComp({ children, onClick, ...props }: any) {
  return (
    <IconButton
      rounded={"full"}
      colorPalette={"grey"}
      variant={"outline"}
      borderColor={"white"}
      _hover={{ bg: "primary" }}
      {...props}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
}
