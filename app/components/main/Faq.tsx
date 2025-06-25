import { Accordion, Box, Span } from "@chakra-ui/react";
import HeadingComp from "../HeadingComp";
import { faqIData } from "~/utils/data";

export default function Faq() {
  return (
    <Box>
      <HeadingComp text="Frequently Asked Questions" />
      <Box mt={8} />

      <Accordion.Root collapsible defaultValue={["a"]}>
        {faqIData.map((item, index) => (
          <Accordion.Item
            key={index}
            value={item.value}
            borderRadius="8"
            mb={8}
          >
            <Accordion.ItemTrigger>
              <Span flex="1">{item.title}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  );
}
