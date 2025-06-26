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
import { useColorModeValue } from "./ui/color-mode";
import { navLinks, socialLinks } from "~/utils/data";
import { useNavigate } from "react-router";
import { IconButtonComp } from "./ButtonComp";
import { GrPrevious } from "react-icons/gr";
import { EnterX } from "./FramerMotion";

export default function FooterComp() {
  const navigate = useNavigate();
  const iconColor = useColorModeValue("gray.600", "gray.300");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const bg = useColorModeValue("gray.50", "gray.900");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box bg={bg} py={10} overflow={'hidden'}>
      <Container>
        <Flex justify="space-between" wrap="wrap" align="flex-start" gap={10}>
          <Box maxW={300}>
            <EnterX>
              <Heading fontSize="3xl" fontWeight="bold" mb={3} color="primary">
                Woodkey
              </Heading>
            </EnterX>
            <EnterX index={1}>
              <Text fontSize="sm" color={textColor}>
                Handcrafted wooden furniture built for modern living — where
                design meets durability and every piece tells a story.
              </Text>
            </EnterX>
          </Box>

          <SimpleGrid columns={[1, 2]} gap={6} cursor={"pointer"}>
            {navLinks.slice(0, 2).map(({ label, to }, index) => (
              <EnterX key={index} index={index}>
                <Text
                  onClick={() => navigate(to)}
                  fontSize="sm"
                  color={textColor}
                  _hover={{ textDecoration: "underline" }}
                >
                  {label}
                </Text>
              </EnterX>
            ))}
            {navLinks.slice(2).map(({ label, to }, index) => (
              <EnterX key={index} index={index + 1}>
                <Text
                  onClick={() => navigate(to)}
                  fontSize="sm"
                  color={textColor}
                  _hover={{ textDecoration: "underline" }}
                >
                  {label}
                </Text>
              </EnterX>
            ))}
          </SimpleGrid>

          <Flex direction="column" align={["flex-start", "center"]} gap={4}>
            <Flex gap={4}>
              {socialLinks.map(({ icon: IconEl, href, label }, index) => (
                <EnterX isRight key={label} index={index}>
                  <Link
                    href={href}
                    aria-label={label}
                    target="_blank"
                    _hover={{ color: "primary" }}
                  >
                    <Icon as={IconEl} boxSize={5} color={iconColor} />
                  </Link>
                </EnterX>
              ))}
            </Flex>
          </Flex>

          <EnterX isRight>
            <IconButtonComp onClick={scrollToTop} rotate={"90"}>
              <GrPrevious />
            </IconButtonComp>
          </EnterX>
        </Flex>
      </Container>
    </Box>
  );
}
