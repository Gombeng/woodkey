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
    >
      <Container minH={"svh"} alignContent={"center"} maxW={""}>
        <VStack align="start" gap={6} maxW="2xl">
          <Heading fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.2">
            An individual approach to every detail of your interior
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} maxW={444}>
            Realize your dream of perfect furniture and unique details together
            with our team
          </Text>
          <ButtonComp>Order</ButtonComp>
        </VStack>
      </Container>

      <Box w="full" mt={20} position="absolute" bottom={8}>
        <Container>
          <Flex justifyContent={"space-between"}>
            <HStack gap={7}>
              <IconButtonComp>
                <GrPrevious />
              </IconButtonComp>

              <IconButtonComp>
                <GrNext />
              </IconButtonComp>
            </HStack>

            <Flex direction="column" align={["flex-start", "center"]} gap={4}>
              <Flex gap={4}>
                {socialLinks.map(({ icon: IconEl, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    _hover={{ color: "primary" }}
                  >
                    <Icon as={IconEl} boxSize={5} color={iconColor} />
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
