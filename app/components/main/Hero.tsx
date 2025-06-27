import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
  Container,
  Link,
} from "@chakra-ui/react";
import { HeroBg } from "~/assets";
import { ButtonComp } from "../ButtonComp";
import { useColorModeValue } from "../ui/color-mode";
import { socialLinks } from "~/utils/data";
import { EnterX } from "../FramerMotion";

export default function Hero() {
  const iconColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      w="full"
      bgImage={`url(${HeroBg})`}
      bgSize="cover"
      bgPos="center"
      color={"white"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Container py={100} minH={{ base: "svh" }} alignContent={"center"}>
        <VStack align="start" gap={6} maxW={{ sm: "lg" }}>
          <EnterX>
            <Heading fontSize={{ base: "2xl", sm: "3xl" }} lineHeight="1.2">
              An individual approach to every detail of your interior
            </Heading>
          </EnterX>
          <EnterX index={1}>
            <Text fontSize={{ base: "md", md: "lg" }} maxW={{ base: "sm" }}>
              Realize your dream of perfect furniture and unique details
              together with our team
            </Text>
          </EnterX>

          <EnterX index={2}>
            <ButtonComp>Order</ButtonComp>
          </EnterX>
        </VStack>

        <Box position={"absolute"} bottom={0} py={5}>
          <Flex gap={{ base: 8, md: 6 }}>
            {socialLinks.map(({ icon: IconEl, href, label }, index) => (
              <EnterX key={index} isRight index={index + 4}>
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
        </Box>
      </Container>
    </Box>
  );
}
