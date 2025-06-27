import { Box, SimpleGrid } from "@chakra-ui/react";
import { CardComp } from "../CardComp";
import HeadingComp from "../HeadingComp";
import { ourAdvantages } from "~/utils/data";
import { EnterX } from "../FramerMotion";

export default function OurAdvantages() {
  return (
    <Box overflow={"hidden"} my={10}>
      <EnterX>
        <HeadingComp text="Our Advantages" />
      </EnterX>

      <Box mt={8}>
        <SimpleGrid columns={[1, 2, 3]} gap={5}>
          {ourAdvantages.map((data, index) => (
            <EnterX key={index} index={index} isRight={index > 2}>
              <CardComp {...data} />
            </EnterX>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
