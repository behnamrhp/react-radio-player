import IRadioBottomBarPorps from "./i-props";
import Next from "../base/component/icons/next";
import Pause from "../base/component/icons/pause";
import {
  InfoContainer,
  StyledButtonContainer,
  StyledContainer,
  StyledPlayPause,
  StyledPrev,
  StyledPrevNext,
} from "./style";
import "./general.css";
import { useUILogic } from "../logic/ui-logic";
import PlayIcon from "../base/component/icons/play";
import { ThemeProvider } from "styled-components";
import "rc-slider/assets/index.css";
import Image from "./children/image";
import Information from "./children/information";
import VolumeController from "../base/component/volume-controller/volume-controller";

export default function RadioBottomBarPlayer(props: IRadioBottomBarPorps) {
  const {
    streamUrl,
    titleChild,
    customClassName,
    description,
    secondDescription,
    image,
    onNextButtonClicked,
    onPrevButtonClicked,
    onVolumeSliderChanged,
    onPlayButtonClicked,
    onErrorCatched,
    theme,
    isNextButtonHidden,
    isPrevButtonHidden,
    isNextButtonDisabled,
    isPrevButtonDisabled,
    ...restProps
  } = props;

  const {
    isPlay,
    onClickPlayToggler,
    onChangeVolume,
    volume,
    isDisabled,
    onClickPrevNextHandler,
  } = useUILogic(streamUrl, onErrorCatched);

  return (
    <ThemeProvider theme={theme || {}}>
      <StyledContainer className={customClassName?.container} {...restProps}>
        <InfoContainer className={customClassName?.infoContainer}>
          <Image customClassName={customClassName} image={image} />
          <Information
            customClassName={customClassName}
            description={description}
            secondDescription={secondDescription}
            titleChild={titleChild}
          />
        </InfoContainer>
        <StyledButtonContainer
          className={customClassName?.playerButtonsContainer}
        >
          <StyledPrevNext
            $isDisabled={isPrevButtonDisabled}
            $isHidden={isPrevButtonHidden}
            onClick={(e) => {
              if (isPrevButtonDisabled) return;
              onClickPrevNextHandler();
              if (onPrevButtonClicked) onPrevButtonClicked(e);
            }}
            className={customClassName?.prevButton}
          >
            <StyledPrev />
          </StyledPrevNext>
          <StyledPlayPause
            className={customClassName?.playButton}
            $isDisabled={isDisabled}
            onClick={(event) => {
              if (isDisabled) return;
              onClickPlayToggler();
              if (onPlayButtonClicked) onPlayButtonClicked(event);
            }}
          >
            {isPlay ? <Pause /> : <PlayIcon />}
          </StyledPlayPause>
          <StyledPrevNext
            $isDisabled={isNextButtonDisabled}
            $isHidden={isNextButtonHidden}
            className={customClassName?.prevButton}
            onClick={(e) => {
              if (isNextButtonDisabled) return;
              onClickPrevNextHandler();
              if (onNextButtonClicked) onNextButtonClicked(e);
            }}
          >
            <Next />
          </StyledPrevNext>
        </StyledButtonContainer>
        <VolumeController
          customClassName={customClassName}
          onChangeVolume={onChangeVolume}
          volume={volume}
          onVolumeSliderChanged={onVolumeSliderChanged}
        />
      </StyledContainer>
    </ThemeProvider>
  );
}
