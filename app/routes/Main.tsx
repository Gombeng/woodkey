import { Box, Container } from "@chakra-ui/react";
import type { Route } from "./+types/Main";
import Hero from "~/components/main/Hero";
import OurAdvantages from "~/components/main/OurAdvantages";
import CategoriesOfFurniture from "~/components/main/CategoriesOfFurniture";
import Reviews from "~/components/main/Reviews";
import Faq from "~/components/main/Faq";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Woodkey - Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Main() {
  return (
    <Box>
      <Hero />
      <Container>
        <OurAdvantages />
        <CategoriesOfFurniture />
        <Reviews />
        <Faq />
      </Container>
    </Box>
  );
}
