import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  HStack,
  VStack,
  Container,
  Link,
} from "@chakra-ui/react";
import { HeroBg } from "~/assets";
import { ButtonComp, IconButtonComp } from "../ButtonComp";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useColorModeValue } from "../ui/color-mode";
import { socialLinks } from "~/utils/data";
import { EnterX } from "../FramerMotion";

export default function Hero() {
  const iconColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      w="full"
      minH="100vh"
      bgImage={`url(${HeroBg})`}
      bgSize="cover"
      bgPos="center"
      color={"white"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Container minH={"svh"} alignContent={"center"}>
        <VStack align="start" gap={6} maxW="2xl">
          <EnterX>
            <Heading fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.2">
              An individual approach to every detail of your interior
            </Heading>
          </EnterX>
          <EnterX index={1}>
            <Text fontSize={{ base: "md", md: "lg" }} maxW={444}>
              Realize your dream of perfect furniture and unique details
              together with our team
            </Text>
          </EnterX>

          <EnterX index={2}>
            <ButtonComp>Order</ButtonComp>
          </EnterX>
        </VStack>
      </Container>

      <Box w="full" mt={20} position="absolute" bottom={8}>
        <Container>
          <Flex justifyContent={"space-between"}>
            <EnterX index={4}>
              <HStack gap={7}>
                <IconButtonComp>
                  <GrPrevious />
                </IconButtonComp>
                <IconButtonComp>
                  <GrNext />
                </IconButtonComp>
              </HStack>
            </EnterX>

            <EnterX index={4} isRight>
              <Flex gap={6}>
                {socialLinks.map(({ icon: IconEl, href, label }, index) => (
                  <Link
                    key={index}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    _hover={{ color: "primary" }}
                  >
                    <Icon as={IconEl} boxSize={5} color={iconColor} />
                  </Link>
                ))}
              </Flex>
            </EnterX>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
