import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { navLinks, socialLinks } from "~/utils/data";
import { useNavigate } from "react-router";
import { IconButtonComp } from "./ButtonComp";
import { GrPrevious } from "react-icons/gr";
import { EnterX } from "./FramerMotion";

export default function FooterComp() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box bg={"secondary"} py={10} overflow={"hidden"}>
      <Container>
        <Flex justify="space-between" wrap="wrap" align="flex-start" gap={10}>
          <Box maxW={300}>
            <EnterX>
              <Heading fontSize="3xl" fontWeight="bold" mb={3} color="primary">
                Woodkey
              </Heading>
            </EnterX>
            <EnterX index={1}>
              <Text fontSize="sm" color={"primary.50"}>
                Handcrafted wooden furniture built for modern living — where
                design meets durability and every piece tells a story.
              </Text>
            </EnterX>
          </Box>
          <EnterX index={2}>
            <SimpleGrid columns={2} gap={5}>
              {navLinks.map(({ label, to }, index) => (
                <Text
                  key={index}
                  cursor={"pointer"}
                  onClick={() => navigate(to)}
                  fontSize="sm"
                  color={"primary.50"}
                  _hover={{ textDecoration: "underline" }}
                >
                  {label}
                </Text>
              ))}
            </SimpleGrid>
          </EnterX>

          <EnterX index={2}>
            <Flex gap={4}>
              {socialLinks.map(({ icon: IconEl, href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  _hover={{ color: "primary" }}
                >
                  <Icon as={IconEl} boxSize={5} color={""} />
                </Link>
              ))}
            </Flex>
          </EnterX>
          <IconButtonComp onClick={scrollToTop} rotate={"90"}>
            <GrPrevious />
          </IconButtonComp>
        </Flex>
      </Container>
    </Box>
  );
}
