import type { Preview,  } from "@storybook/react";
import React from "react";
import MockAppContext from "./mockups/MockAppContext";

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
        { value: "side-by-side", left: "🌓", title: "Side-by-side" },
      ],
    },
  },
} as const;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      
    }
  },
  decorators: [
    (Story, context) => (
      <MockAppContext context={context}>
        <Story />
      </MockAppContext>
    ),
  ],
};

export default preview;
