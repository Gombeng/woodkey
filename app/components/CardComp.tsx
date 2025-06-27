import { Avatar, Box, Card, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { ButtonComp } from "./ButtonComp";
import { Furniture1 } from "~/assets";
import { FaStar } from "react-icons/fa6";
import { LuStar } from "react-icons/lu";
import { EnterX } from "./FramerMotion";

export function CardComp(props: any) {
  const { icon, title, desc } = props;
  return (
    <Card.Root border={0} minH={"full"}>
      <Card.Body
        gap="2"
        alignItems="center"
        color={"primary"}
        borderColor={"primary"}
        borderWidth={3}
        borderRadius={8}
        transition="all .3s ease"
      >
        <Box
          position="relative"
          w={"fit-content"}
          zIndex={1}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-6px",
            right: 0,
            w: "15px",
            h: "15px",
            borderRadius: "full",
            bg: "primary.100",
            zIndex: "-1",
          }}
        >
          <Icon boxSize="8" as={icon} />
        </Box>
        <Card.Title fontSize={"xl"} fontWeight={"semibold"} mt="2">
          {title}
        </Card.Title>
        <Card.Description
          textAlign="center"
          color={"primary.700"}
          fontWeight={"semibold"}
        >
          {desc}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export function FurnitureCard({
  label,
  customer,
  image = Furniture1,
  descriptions,
  ...rest
}: any) {
  return (
    <Card.Root
      flexDirection={{ md: "row" }}
      overflow="hidden"
      borderRadius={8}
      {...rest}
      h={{ lg: "80" }}
    >
      <Box flex={1}>
        <EnterX>
          <Image
            minH={{ sm: "base", md: "sm" }}
            objectFit={"cover"}
            objectPosition={"center"}
            src={image}
            alt={`${label} Project`}
          />
        </EnterX>
      </Box>

      <Box flex={1}>
        <Card.Body
          justifySelf="center"
          minH="100%"
          bg="secondary"
          w="full"
          position="relative"
        >
          <EnterX isRight>
            <Card.Title
              fontSize="xl"
              fontWeight="semibold"
              mb={2}
              color="white"
            >
              {label} Project Showcase
            </Card.Title>
          </EnterX>

          <EnterX index={1} isRight>
            <Box mb={4}>
              {descriptions.map((text: any, idx: any) => (
                <Card.Description color="white" mb={3} maxW={550} key={idx}>
                  {text}
                </Card.Description>
              ))}
            </Box>
          </EnterX>

          <EnterX index={2} isRight>
            <ButtonComp maxW={300}>View Project</ButtonComp>
          </EnterX>
          <Box pt={10} />
          <Box position="absolute" bottom={5}>
            <EnterX index={3} isRight>
              <Text fontSize="sm" color="primary.50">
                — {customer}
              </Text>
            </EnterX>
          </Box>
        </Card.Body>
      </Box>
    </Card.Root>
  );
}

export const StarRating = ({ rating }: { rating: number }) => (
  <Flex gap={1}>
    {[...Array(5)].map((_, i) => (
      <Icon
        key={i}
        as={i < rating ? FaStar : LuStar}
        color={i < rating ? "yellow.400" : "gray.300"}
        boxSize={5}
      />
    ))}
  </Flex>
);

export const ReviewCard = ({ name, image, date, rating, review }: any) => (
  <Card.Root
    border="1px solid"
    borderColor="gray.100"
    borderRadius="8"
    p={4}
    bg="secondary"
    color="white"
    maxW={500}
    minH={"full"}
  >
    <Card.Body gap={3}>
      <Flex gap={3} align="center" mb={2}>
        <Avatar.Root size="md">
          <Avatar.Fallback name={name} />
          <Avatar.Image src={image} />
        </Avatar.Root>
        <Box>
          <Card.Title fontWeight="semibold">{name}</Card.Title>
        </Box>
      </Flex>

      <StarRating rating={rating} />

      <Card.Description fontSize="sm" color="white" mt={2}>
        {review}
      </Card.Description>
    </Card.Body>

    <Card.Footer>
      <Text fontSize="sm" color="primary.100">
        {date}
      </Text>
    </Card.Footer>
  </Card.Root>
);
