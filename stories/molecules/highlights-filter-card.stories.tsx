import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ComponentStory } from "@storybook/react";
import HighlightsFilterCard from "components/molecules/HighlightsFeedCard/highlights-filter-card";

const StoryConfig = {
  title: "Design System/Molecules/HighlightsFilterCard",
};
export default StoryConfig;

const HighlightsFilterCardTemplate: ComponentStory<typeof HighlightsFilterCard> = () => (
  <TooltipProvider>
    {/* eslint-disable-next-line camelcase */}
    <HighlightsFilterCard
      repos={[
        {
          repoIcon: "https://www.github.com/khulnasoft-opensource.png?size=300",
          repoName: "app",
          full_name: "khulnasoft-opensource/app",
        },
      ]}
    />
  </TooltipProvider>
);

export const Default = HighlightsFilterCardTemplate.bind({});
