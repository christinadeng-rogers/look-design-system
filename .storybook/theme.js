// Customize Storybook: generate a new theme using create function
import { create } from "@storybook/theming";

export default create({
  // Color theme
  base: "light",
  colorPrimary: "#355070",
  colorSecondary: "#cbc0d3",

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "#F7EDE2",
  barBg: "#6D597A",

  // Brand
  brandTitle: "Look!",
  brandUrl: "https://example.com",
  brandImage: "https://i.ibb.co/0Dvhxzy/LOGO4.png",
  brandTarget: "_self",
});
