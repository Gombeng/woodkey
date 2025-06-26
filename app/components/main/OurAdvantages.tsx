import { Box, SimpleGrid } from "@chakra-ui/react";
import { CardComp } from "../CardComp";
import HeadingComp from "../HeadingComp";
import { ourAdvantages } from "~/utils/data";
import { EnterX, EnterY } from "../FramerMotion";

export default function OurAdvantages() {
  return (
    <Box overflow={"hidden"}>
      <EnterX>
        <HeadingComp text="Our Advantages" />
      </EnterX>

      <Box mt={8}>
        <SimpleGrid columns={[1, 2, 3]} gap={5} mb={5}>
          {ourAdvantages.slice(0, 3).map((data, idx) => (
            <EnterX key={idx}>
              <CardComp {...data} />
            </EnterX>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 3]} gap={5}>
          {ourAdvantages.slice(3).map((data, idx) => (
            <EnterX isRight index={1} key={idx}>
              <CardComp {...data} />
            </EnterX>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
