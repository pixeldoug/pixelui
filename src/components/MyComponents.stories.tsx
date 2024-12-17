import { Meta, StoryFn } from "@storybook/react";

import MyComponent from "./MyComponent";
import React from "react";

export default {
  title: "Components/MyComponent",
  component: MyComponent,
} as Meta;

const Template: StoryFn<typeof MyComponent> = (args) => (
  <MyComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {};
