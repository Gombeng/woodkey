import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useColorModeValue } from "./ui/color-mode";
import { ButtonComp } from "./ButtonComp";
import { navLinks } from "~/utils/data";

export default function NavbarComp() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = scrolled ? useColorModeValue("white", "secondary") : "transparent";
  const shadow = scrolled ? "md" : "none";

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      w="100%"
      zIndex="sticky"
      bg={bg}
      boxShadow={shadow}
      // backdropFilter="saturate(180%) blur(12px)"
      transition="all 0.3s ease"
    >
      <Container py={4}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Text
            fontSize="2xl"
            letterSpacing={2}
            fontWeight="bold"
            color="primary.50"
            cursor="pointer"
            onClick={() => navigate("/")}
          >
            Woodkey
          </Text>

          {/* Links */}
          <HStack gap={50}>
            {navLinks.map(({ label, to }) => {
              const isActive = pathname === to;
              return (
                <Text
                  key={to}
                  cursor="pointer"
                  position="relative"
                  fontWeight="medium"
                  color={"white"}
                  onClick={() => navigate(to)}
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
                          w: "100%",
                          h: "3px",
                          bg: "primary",
                        }
                      : undefined
                  }
                >
                  {label}
                </Text>
              );
            })}
          </HStack>
          <ButtonComp>Order</ButtonComp>
        </Flex>
      </Container>
    </Box>
  );
}
