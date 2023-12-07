import IRadioBottomBarPorps from "./i-props";
import Next from "./icons/next";
import Pause from "./icons/pause";
import { ImageWrapper, InfoContainer, StyledButtonContainer, StyledContainer, StyledDescription, StyledImage, StyledPlayPause, StyledPrev, StyledPrevNext, StyledSecondDesc, StyledSlider, StyledTextContainer, StyledTitle, StyledVolumeContainer, VolumeIconContainer } from "./style";
import './general.css'
import 'rc-slider/assets/index.css';
import { useUILogic } from "../logic/ui-logic";
import PlayIcon from "./icons/play";
import Volume from "./children/Volume";

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
  const defaultImage = image || 'test Image' 


  return (
    <StyledContainer className={className}>
      <InfoContainer>
        <ImageWrapper >
          { typeof image === 'string' ? <StyledImage src={image} /> : defaultImage }
        </ImageWrapper>
        <StyledTextContainer>
          <StyledTitle>
            {title}
          </StyledTitle>
          <StyledDescription>
            {description}
          </StyledDescription>
          <StyledSecondDesc>
            {secondDescription}
          </StyledSecondDesc>
        </StyledTextContainer>
      </InfoContainer>
      <StyledButtonContainer>
        <StyledPrevNext onClick={onPrevButtonClicked}>
          <StyledPrev />
        </StyledPrevNext>
        <StyledPlayPause $isDisabled={isDisabled} onClick={(event) => {
          if (isDisabled) return;
          onClickPlayToggler()
          if (onPlayButtonClicked) onPlayButtonClicked(event)
        }}>
          {isPlay ?  <Pause /> : <PlayIcon /> }
        </StyledPlayPause>
        <StyledPrevNext onClick={onNextButtonClicked}>
          <Next />
        </StyledPrevNext>
      </StyledButtonContainer>
        <StyledVolumeContainer>
          <VolumeIconContainer>
            <Volume volume={volume} />
          </VolumeIconContainer>
          <StyledSlider
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
