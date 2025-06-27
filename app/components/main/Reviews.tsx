import { Box, SimpleGrid } from "@chakra-ui/react";
import HeadingComp from "../HeadingComp";
import { reviews } from "~/utils/data";
import { ReviewCard } from "../CardComp";
import { EnterX } from "../FramerMotion";

export default function Reviews() {
  return (
    <Box my={10}>
      <EnterX>
        <HeadingComp text="Reviews" />
      </EnterX>
      <Box m={8} />

      <SimpleGrid columns={[1, 2, 3]} gap={5}>
        {reviews.map((item, index) => (
          <EnterX key={index} index={index}>
            <ReviewCard {...item} />
          </EnterX>
        ))}
      </SimpleGrid>
    </Box>
  );
}
