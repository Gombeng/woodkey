import {
  Box,
  Tabs,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import HeadingComp from "../HeadingComp";
import { FurnitureCard } from "../CardComp";
import { categoriesOfFurniture } from "~/utils/data";
import { EnterX } from "../FramerMotion";

export default function CategoriesOfFurniture() {
  return (
    <Box my={10}>
      <EnterX>
        <HeadingComp text="Categories of furniture" />
      </EnterX>
      <Box mt={10} />

      <Tabs.Root defaultValue="Beds" orientation="horizontal" variant={"plain"}>
        <EnterX>
          <Tabs.List
            gap={4}
            display="flex"
            flexWrap="wrap"
            justifyContent="space-evenly"
            mb={8}
            border={0}
          >
            {categoriesOfFurniture.map(({ label, icon: Icon }, index) => (
              <VStack key={index}>
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
                <Text display={{ base: "none", sm: "block" }}>{label}</Text>
              </VStack>
            ))}
          </Tabs.List>
        </EnterX>

        {categoriesOfFurniture.map((data) => (
          <Tabs.Content key={data.label} value={data.label} pt={0}>
            <FurnitureCard {...data} />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
}
