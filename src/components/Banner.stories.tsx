import { ComponentMeta, ComponentStory } from "@storybook/react";

import Banner from "./Banner";
// src/components/Banner.stories.tsx
import React from "react";

export default {
  title: "Components/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {};
