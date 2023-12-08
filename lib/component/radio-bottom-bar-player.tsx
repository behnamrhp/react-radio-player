import IRadioBottomBarPorps from "./i-props";
import Next from "./icons/next";
import Pause from "./icons/pause";
import { ImageWrapper, InfoContainer, StyledButtonContainer, StyledContainer, StyledDescription, StyledImage, StyledPlayPause, StyledPrev, StyledPrevNext, StyledSecondDesc, StyledSlider, StyledTextContainer, StyledTitle, StyledVolumeContainer, VolumeIconContainer } from "./style";
import './general.css'
import { useUILogic } from "../logic/ui-logic";
import PlayIcon from "./icons/play";
import Volume from "./children/Volume";
import Music from "./icons/music";

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
  } = props;

  const {isPlay, onClickPlayToggler, onChangeVolume, volume, isDisabled} = useUILogic(streamUrl, onErrorCatched)
  const defaultImage = image || <Music />

  return (
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
        <StyledPrevNext onClick={onPrevButtonClicked} className={className?.prevButton}>
          <StyledPrev />
        </StyledPrevNext>
        <StyledPlayPause className={className?.playButton} $isDisabled={isDisabled} onClick={(event) => {
          if (isDisabled) return;
          onClickPlayToggler()
          if (onPlayButtonClicked) onPlayButtonClicked(event)
        }}>
          {isPlay ?  <Pause /> : <PlayIcon /> }
        </StyledPlayPause>
        <StyledPrevNext className={className?.prevButton} onClick={onNextButtonClicked}>
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
  )
}
