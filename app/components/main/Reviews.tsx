import { Box } from "@chakra-ui/react";
import HeadingComp from "../HeadingComp";
import { reviews } from "~/utils/data";
import { ReviewCard } from "../CardComp";
import AutoScrollSlider, { EnterX } from "../FramerMotion";

export default function Reviews() {
  return (
    <Box>
      <EnterX>
        <HeadingComp text="Reviews" />
      </EnterX>
      <Box m={10} />

      <AutoScrollSlider
        items={reviews}
        speed={500}
        renderItem={(item: any, idx: any) => <ReviewCard key={idx} {...item} />}
      />
    </Box>
  );
}
