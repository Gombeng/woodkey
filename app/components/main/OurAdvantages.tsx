import { Box, SimpleGrid } from "@chakra-ui/react";
import { CardComp } from "../CardComp";
import HeadingComp from "../HeadingComp";
import { ourAdvantages } from "~/utils/data";

export default function OurAdvantages() {
  return (
    <Box>
      <HeadingComp text="Our Advantages" />

      <Box mt={8}>
        <SimpleGrid columns={[1, 2, 3]} gap={5}>
          {ourAdvantages.map((data, idx) => (
            <CardComp key={idx} {...data} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
