import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  useBreakpointValue,
  Drawer,
  Portal,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ButtonComp } from "./ButtonComp";
import { navLinks } from "~/utils/data";
import { EnterX } from "./FramerMotion";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavbarComp() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { open, onOpen, onClose, setOpen } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = scrolled ? "secondary" : "transparent";
  const shadow = scrolled ? "md" : "none";

  const NavLink = ({ label, to }: any) => {
    const isActive = pathname === to;
    return (
      <Text
        cursor="pointer"
        position="relative"
        fontWeight="medium"
        fontSize={{ md: "sm", lg: "md" }}
        color="white"
        onClick={() => {
          navigate(to);
          onClose();
        }}
        transition="all 0.3s ease"
        _hover={{
          _after: {
            content: '""',
            position: "absolute",
            bottom: "-3px",
            left: 0,
            w: "100%",
            h: "3px",
            bg: "primary",
          },
        }}
        _after={
          isActive
            ? {
                content: '""',
                position: "absolute",
                bottom: "-3px",
                left: 0,
                w: { base: "5%", md: "30%" },
                h: "3px",
                bg: "primary",
              }
            : undefined
        }
      >
        {label}
      </Text>
    );
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      w="100%"
      zIndex="sticky"
      bg={bg}
      boxShadow={shadow}
      transition={"all .3s ease"}
    >
      <Container py={{ base: 4, md: 4 }} maxW="container.xl">
        <Flex justify="space-between" align="center">
          <EnterX isRight>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="primary.50"
              cursor="pointer"
              onClick={() => navigate("/")}
            >
              Woodkey
            </Text>
          </EnterX>

          {isMobile ? (
            <EnterX>
              <IconButton
                aria-label="Open Menu"
                variant={"ghost"}
                onClick={onOpen}
              >
                <GiHamburgerMenu />
              </IconButton>
            </EnterX>
          ) : (
            <>
              <HStack gap={50}>
                {navLinks.map((item, idx) => (
                  <EnterX key={idx} index={idx}>
                    <NavLink {...item} />
                  </EnterX>
                ))}
              </HStack>
              <EnterX isRight>
                <ButtonComp>Order</ButtonComp>
              </EnterX>
            </>
          )}
        </Flex>
      </Container>

      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg={"secondary"}>
              <Drawer.Header />
              <Drawer.Body>
                <VStack align="start" gap={6} w={"full"}>
                  {navLinks.map((item, idx) => (
                    <Box w={"full"} key={idx}>
                      <NavLink {...item} />
                    </Box>
                  ))}
                </VStack>
              </Drawer.Body>
              <Drawer.Footer>
                <ButtonComp w="full" onClick={onClose}>
                  Order
                </ButtonComp>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size={"xl"} />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
