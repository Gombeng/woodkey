import { Avatar, Box, Card, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { ButtonComp } from "./ButtonComp";
import { Furniture1 } from "~/assets";
import { FaStar } from "react-icons/fa6";
import { LuStar } from "react-icons/lu";

export function CardComp(props: any) {
  const { icon, title, desc } = props;
  return (
    <Card.Root border={0}>
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
    <Card.Root flexDirection="row" overflow="hidden" borderRadius={8} {...rest}>
      <Image
        objectFit="cover"
        maxH="sm"
        objectPosition="bottom"
        w="full"
        src={image}
        alt={`${label} Project`}
        flex={1}
      />

      <Box flex={1}>
        <Card.Body
          justifySelf="center"
          minH="100%"
          bg="secondary"
          w="full"
          position="relative"
        >
          <Card.Title fontSize="xl" fontWeight="semibold" mb={2} color="white">
            {label} Project Showcase
          </Card.Title>

          <Card.Description mb={4} color="white">
            {descriptions.map((text: any, idx: any) => (
              <Text mb={3} maxW={550} key={idx}>
                {text}
              </Text>
            ))}
          </Card.Description>

          <ButtonComp maxW={300}>View Project</ButtonComp>

          <Box pt={10} />
          <Box position="absolute" bottom={5}>
            <Text fontSize="sm" color="primary.50">
              — {customer}
            </Text>
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
    borderRadius="xl"
    p={4}
    bg="secondary"
    color="white"
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
