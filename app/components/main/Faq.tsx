import { Accordion, Box, Span } from "@chakra-ui/react";
import HeadingComp from "../HeadingComp";
import { faqIData } from "~/utils/data";
import { EnterX } from "../FramerMotion";

export default function Faq() {
  return (
    <Box>
      <EnterX>
        <HeadingComp text="Frequently Asked Questions" />
      </EnterX>
      <Box mt={8} />

      <Accordion.Root collapsible defaultValue={["a"]}>
        {faqIData.map((item, index) => (
          <EnterX key={index} index>
            <Accordion.Item value={item.value} borderRadius="8" mb={8}>
              <Accordion.ItemTrigger>
                <Span flex="1">{item.title}</Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          </EnterX>
        ))}
      </Accordion.Root>
    </Box>
  );
}
