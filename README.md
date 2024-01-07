<p align="center">
  <a rel="noopener" target="_blank"><img width="150" height="133" src="./catalogs/logo.svg" alt="React Radio Player logo"></a>
</p>

### A Simple component library for radio player in react

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Basic Example](#basic-example)
- [APIs](#apis)
  - [Base Props](#base-props)
  - [Bottom Bar](#bottom-bar)
- [Contributing](#contributing)
- [Try out](#try-out)
- [License](#license)

## Overview
  This is a simple and light-weight component library to handle radio player in React.js projects.

## Installation

```bash
# npm 
npm install react-radio-player

# yarn
yarn install react-radio-player
```

## Basic example
Usage of this component is so easy you just need to import your desired component, pass title and streamURL, then you're good to go:

```typescript
import RadioBottomBarPlayer from "../radio-bottom-bar-player";

// ... 

<RadioBottomBarPlayer
  titleChild="Testing Station title"
  streamUrl={stationUrl}
/>

```

## APIs

### Base Props
| Prop    | type | Descriptions |
| -------- | ------- | ------- |
| streamUrl  | string    | URL of radio stream to be played  |
| titleChild | ReactNode     | Tile to show in component  |
| description?    | ReactNode    | First description for component    |
| secondDescription?    | ReactNode    | Second description for the radio    |
| customClassName?   | Object    | some class names for the parts of components, separately    |
| image? | ReactNode `or` string | Image related to the radio |
| styles? | CSSProperties | Inline styles related to the component| 
| theme? | IBaseTheme | Object related to the theme to change the ui of the component |
| isPrevButtonHidden? | boolean | Will hide prev button |
| isNextButtonHidden? | boolean | Will hide next button|
| isPrevButtonDisabled | boolean | Will disable prev button |
|isNextButtonDisabled | boolean | Will disable next button |
| onErrorCatched | (mediaError: MediaError `or` null, event: ErrorEvent): void; | Callback on catch any error of component 
|onNextButtonClicked | (event: React.MouseEvent): void; | Callback after clicked on next button
|onPrevButtonClicked | (event: React.MouseEvent): void; | Callback after cliked on prev button
|onPlayButtonClicked | (event: React.MouseEvent): void; | Callback after clicked on play button
|onVolumeSliderChanged | (percentage: number): void; | Callback after changed volume
|onLoadedStreamHandler | (): void; | Callback after load of stream data 
```typescript 
type customClassName = {
    container?: string;
    infoContainer?: string;
    imageContainer?: string;
    image?: string;
    textsContainer?: string;
    title?: string;
    description?: string;
    secondDescription?: string;
    player?: string;
    playButton?: string;
    prevButton?: string;
    nextButton?: string;
    volumeContainer?: string;
    volume?: string;
    volumeIcon?: string;
    playerButtonsContainer?: string;
  }

interface IBaseTheme {
  backgroundColor: string;
  fontFamily: string;
  TitleFontSize: string;
  descriptionFontSize: string;
  secondDescriptionFontSize: string;
  primaryColor: string;
  disabledColor: string;
  hoverColor: string;
  titleFontWeight: string;
  descriptionFontWeight: string;
  secondDescriptionFontWeight: string;
  buttonsColor: string;
  firstTextColor: string;
  secondTextColor: string;
  padding: string;
  volumeTrackColor: string;
  voluemHandleColor: string;
  volumeRailColor: string;
  volumeIconColor: string;
}

```

### Try Out
You can watch our staging components in a storybook and work around with it from this [link](https://behnamrhp.github.io/react-radio-player)

### Bottom Bar
Bottom bar component will use all of basic props just for theme it will be like following:

```typescript
export type RadioBottomBarTheme = IBaseTheme & {
  height: number;
};
```

## Contributing

See the [contributing guide](./catalogs/docs/CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

[MIT](./LICENSE)