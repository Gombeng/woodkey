import { Box, Tabs, IconButton, Text, VStack } from "@chakra-ui/react";
import HeadingComp from "../HeadingComp";
import { FurnitureCard } from "../CardComp";
import { categoriesOfFurniture } from "~/utils/data";

export default function CategoriesOfFurniture() {
  return (
    <Box>
      <HeadingComp text="Categories of furniture" />
      <Box mt={8} />

      <Tabs.Root defaultValue="Beds" orientation="horizontal" variant={"plain"}>
        <Tabs.List
          gap={4}
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          mb={6}
          border={0}
        >
          {categoriesOfFurniture.map(({ label, icon: Icon }, idx) => (
            <VStack key={idx}>
              <Tabs.Trigger value={label} asChild>
                <IconButton
                  aria-label={label}
                  rounded="full"
                  borderWidth={2}
                  borderColor="primary"
                  size="xl"
                  color="primary"
                  _hover={{
                    bg: "primary",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  _selected={{
                    bg: "primary",
                    color: "white",
                  }}
                >
                  <Icon />
                </IconButton>
              </Tabs.Trigger>
              <Text>{label}</Text>
            </VStack>
          ))}
        </Tabs.List>

        {categoriesOfFurniture.map((data) => (
          <Tabs.Content key={data.label} value={data.label}>
            <FurnitureCard {...data} />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
}
