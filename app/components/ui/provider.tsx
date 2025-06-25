"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: { value: "#6B7B99" },
          50: { value: "#EEF0F4" },
          100: { value: "#D7DCE6" },
          200: { value: "#BEC7D7" },
          300: { value: "#A4B2C8" },
          400: { value: "#8B9CB9" },
          500: { value: "#6B7B99" },
          600: { value: "#546178" },
          700: { value: "#3E4757" },
          800: { value: "#282E37" },
          900: { value: "#121418" },
        },
        secondary: { DEFAULT: { value: "#292929" } },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
