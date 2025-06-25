import { Box, SimpleGrid } from "@chakra-ui/react";
import HeadingComp from "../HeadingComp";
import { reviews } from "~/utils/data";
import { ReviewCard } from "../CardComp";

export default function Reviews() {
  return (
    <Box>
      <HeadingComp text="Reviews" />
      <Box m={10} />

      <SimpleGrid columns={[1, 1, 3]} gap={5}>
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
