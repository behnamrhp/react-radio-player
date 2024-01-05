import IRadioBottomBarPorps from "./i-props";
import Next from "../base/component/icons/next";
import Pause from "../base/component/icons/pause";
import {
  ImageWrapper,
  InfoContainer,
  StyledButtonContainer,
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledPlayPause,
  StyledPrev,
  StyledPrevNext,
  StyledSecondDesc,
  StyledSlider,
  StyledTextContainer,
  StyledTitle,
  StyledVolumeContainer,
  VolumeIconContainer,
} from "./style";
import "./general.css";
import { useUILogic } from "../logic/ui-logic";
import PlayIcon from "../base/component/icons/play";
import Volume from "./children/Volume";
import Music from "../base/component/icons/music";
import { ThemeProvider } from "styled-components";
import "rc-slider/assets/index.css";

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

  const defaultImage = image || <Music />;

  return (
    <ThemeProvider theme={theme || {}}>
      <StyledContainer className={customClassName?.container} {...restProps}>
        <InfoContainer className={customClassName?.infoContainer}>
          <ImageWrapper className={customClassName?.imageContainer}>
            {typeof image === "string" ? (
              <StyledImage className={customClassName?.image} src={image} />
            ) : (
              defaultImage
            )}
          </ImageWrapper>
          <StyledTextContainer className={customClassName?.textsContainer}>
            <StyledTitle className={customClassName?.title}>
              {titleChild}
            </StyledTitle>
            <StyledDescription className={customClassName?.description}>
              {description}
            </StyledDescription>
            <StyledSecondDesc className={customClassName?.secondDescription}>
              {secondDescription}
            </StyledSecondDesc>
          </StyledTextContainer>
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
        <StyledVolumeContainer className={customClassName?.volumeContainer}>
          <VolumeIconContainer className={customClassName?.volumeIcon}>
            <Volume volume={volume} />
          </VolumeIconContainer>
          <StyledSlider
            className={customClassName?.volume}
            value={volume}
            onChange={(value) => {
              onChangeVolume(value as number);
              if (onVolumeSliderChanged) onVolumeSliderChanged(value as number);
            }}
            min={0}
            max={100}
            step={1}
          />
        </StyledVolumeContainer>
      </StyledContainer>
    </ThemeProvider>
  );
}
