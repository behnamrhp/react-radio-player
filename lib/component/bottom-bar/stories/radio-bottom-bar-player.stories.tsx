import type { Meta, StoryObj } from "@storybook/react";
import RadioBottomBarPlayer from "../radio-bottom-bar-player";
import { useState } from "react";

const meta = {
  title: "React-Radio/Bottom Bar",
  tags: ["autodocs"],
  args: {
    titleChild: "Test Station",
    description: "Basic Testing Description",
    isNextButtonDisabled: false,
    isPrevButtonDisabled: true,
    secondDescription: "Basic Second Descriptions",
    streamUrl: "https://server5.radio-streams.net:8021/stream/1/",
    "theme.fontFamily": "inherit",
    "theme.backgroundColor": undefined,
  },
  argTypes: {
    description: {
      control: "text",
    },
    isNextButtonDisabled: {
      control: "boolean",
      description: "Disables next button",
    },
    isPrevButtonDisabled: {
      control: "boolean",
      description: "Disables prev button",
    },
    titleChild: {
      control: "text",
      description: "Main title for station",
    },
    "theme.backgroundColor": {
      control: "color",
    },
    "theme.fontFamily": {
      control: "text",
    },
    "theme.TitleFontSize": {
      control: "text",
      defaultValue: "1rem",
    },
    "theme.descriptionFontSize": {
      control: "text",
      defaultValue: "1rem",
    },
    "theme.secondDescriptionFontSize": {
      control: "text",
      defaultValue: "1rem",
    },
    "theme.primaryColor": {
      control: "color",
    },
    "theme.disabledColor": {
      control: "color",
    },
    "theme.hoverColor": {
      control: "color",
    },
    "theme.titleFontWeight": {
      control: "text",
    },
    "theme.descriptionFontWeight": {
      control: "text",
    },
    "theme.secondDescriptionFontWeight": {
      control: "text",
    },
    "theme.buttonsColor": {
      control: "color",
    },
    "theme.firstTextColor": {
      control: "color",
    },
    "theme.secondTextColor": {
      control: "color",
    },
    "theme.padding": {
      control: "text",
    },
    "theme.volumeTrackColor": {
      control: "color",
    },
    "theme.voluemHandleColor": {
      control: "color",
    },
    "theme.volumeRailColor": {
      control: "color",
    },
    "theme.volumeIconColor": {
      control: "color",
    },
    "theme.height": {
      control: "text",
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<Meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (props, globalProps) => {
    const secondTestingAudio =
      "https://onlinetestcase.com/wp-content/uploads/2023/06/100-KB-MP3.mp3";
    const [stationUrl, setURl] = useState(props.streamUrl);
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          zIndex: 100,
          left: 0,
          width: "98vw",
        }}
      >
        <RadioBottomBarPlayer
          {...globalProps.parsedProps}
          streamUrl={stationUrl}
          onNextButtonClicked={() => {
            setURl(secondTestingAudio);
          }}
          onPrevButtonClicked={() => {
            setURl(props.streamUrl);
          }}
        />
      </div>
    );
  },
};
