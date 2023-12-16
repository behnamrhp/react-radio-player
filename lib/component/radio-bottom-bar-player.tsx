import IRadioBottomBarPorps from "./i-props";
import Next from "./icons/next";
import Pause from "./icons/pause";
import { ImageWrapper, InfoContainer, StyledButtonContainer, StyledContainer, StyledDescription, StyledImage, StyledPlayPause, StyledPrev, StyledPrevNext, StyledSecondDesc, StyledSlider, StyledTextContainer, StyledTitle, StyledVolumeContainer, VolumeIconContainer } from "./style";
import './general.css'
import { useUILogic } from "../logic/ui-logic";
import PlayIcon from "./icons/play";
import Volume from "./children/Volume";
import Music from "./icons/music";
import { ThemeProvider } from "styled-components";
import 'rc-slider/assets/index.css';

export default function RadioBottomBarPlayer(props: IRadioBottomBarPorps) {
  const { 
    streamUrl, 
    title, 
    className, 
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
  } = props;

  const {
    isPlay, 
    onClickPlayToggler, 
    onChangeVolume, 
    volume, 
    isDisabled,
    onClickPrevNextHandler,
  } = useUILogic(streamUrl, onErrorCatched)
  const defaultImage = image || <Music />

  return (
    <ThemeProvider theme={theme || {}}>
      <StyledContainer className={className?.container}>
        <InfoContainer className={className?.infoContainer}>
          <ImageWrapper className={className?.imageContainer}>
            { typeof image === 'string' ? 
              <StyledImage className={className?.image} src={image} /> 
                : 
              defaultImage 
            }
          </ImageWrapper>
          <StyledTextContainer className={className?.textsContainer}>
            <StyledTitle className={className?.title}>
              {title}
            </StyledTitle>
            <StyledDescription className={className?.description}>
              {description}
            </StyledDescription>
            <StyledSecondDesc className={className?.secondDescription}>
              {secondDescription}
            </StyledSecondDesc>
          </StyledTextContainer>
        </InfoContainer>
        <StyledButtonContainer className={className?.playerButtonsContainer}>
          <StyledPrevNext 
            $isDisabled={isPrevButtonDisabled}
            $isHidden={isPrevButtonHidden} 
            onClick={(e) => {
              if (isPrevButtonDisabled) return;
              onClickPrevNextHandler()
              if (onPrevButtonClicked) onPrevButtonClicked(e)
            }}
            className={className?.prevButton}
          >
            <StyledPrev />
          </StyledPrevNext>
          <StyledPlayPause 
            
            className={className?.playButton} 
            $isDisabled={isDisabled} 
            onClick={(event) => {
              if (isDisabled) return;
              onClickPlayToggler()
              if (onPlayButtonClicked) onPlayButtonClicked(event)
            }}
          >
            {isPlay ?  <Pause /> : <PlayIcon /> }
          </StyledPlayPause>
          <StyledPrevNext 
            $isDisabled={isNextButtonDisabled}
            $isHidden={isNextButtonHidden}
            className={className?.prevButton} 
            onClick={(e) => {
              if (isNextButtonDisabled) return;
              onClickPrevNextHandler()
              if (onNextButtonClicked) onNextButtonClicked(e)
            }}
          >
            <Next />
          </StyledPrevNext>
        </StyledButtonContainer>
          <StyledVolumeContainer className={className?.volumeContainer}>
            <VolumeIconContainer className={className?.volumeIcon}>
              <Volume volume={volume} />
            </VolumeIconContainer>
            <StyledSlider
              className={className?.volume}
              value={volume}
              onChange={(value) => {
                onChangeVolume(value as number)
                if (onVolumeSliderChanged) onVolumeSliderChanged(value as number)
              }}
              min={0}
              max={100}
              step={1}
            />
          </StyledVolumeContainer>
      </StyledContainer>
    </ThemeProvider>
  )
}
