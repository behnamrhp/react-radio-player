import type { Meta, StoryObj } from "@storybook/react";
import RadioBottomBarPlayer from "../radio-bottom-bar-player";
import { useState } from "react";

const meta = {
  title: "React-Radio/Bottom Bar",
} satisfies Meta<typeof RadioBottomBarPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: () => {
    const [stationUrl, setURl] = useState(
      "https://server5.radio-streams.net:8021/stream/1/",
    );
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
          streamUrl={stationUrl}
          isPrevButtonDisabled={
            stationUrl === "https://server5.radio-streams.net:8021/stream/1/"
          }
          isNextButtonDisabled={
            stationUrl ===
            "https://onlinetestcase.com/wp-content/uploads/2023/06/100-KB-MP3.mp3"
          }
          titleChild="test title asdf  asg test title asdf  asgtest title asdf  asg test title asdf  asg test title asdf  asg"
          description="description test title asdf  asg test title asdf test title asdf  asg test title asdf "
          secondDescription="asdf test title asdf  asg test title asdf test title asdf  asg test title asdf"
          onErrorCatched={(error) => {
            console.log("our errrorr is:", error);
          }}
          onNextButtonClicked={() => {
            setURl(
              "https://onlinetestcase.com/wp-content/uploads/2023/06/100-KB-MP3.mp3",
            );
          }}
          onPrevButtonClicked={() => {
            setURl("https://server5.radio-streams.net:8021/stream/1/");
          }}
        />
      </div>
    );
  },
};
