import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import RadioBottomBarPlayer from "../lib/component/bottom-bar/radio-bottom-bar-player";

function App() {
  const [stationUrl, setURl] = useState(
    "https://server5.radio-streams.net:8021/stream/1/",
  );

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
    </>
  );
}

export default App;
