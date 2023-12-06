import IRadioBottomBarPorps from "./i-props";
import Next from "./icons/next";
import Pause from "./icons/pause";
import { ImageWrapper, InfoContainer, StyledButtonContainer, StyledContainer, StyledDescription, StyledImage, StyledPlayPause, StyledPrev, StyledPrevNext, StyledSecondDesc, StyledSlider, StyledTextContainer, StyledTitle, StyledVolumeContainer, VolumeIconContainer } from "./style";
import './general.css'
import 'rc-slider/assets/index.css';
import VolumeMedium from "./icons/volume-medium";
import { useUILogic } from "../logic/ui-logic";
import PlayIcon from "./icons/play";

export default function RadioBottomBarPlayer(props: IRadioBottomBarPorps) {
  const { 
    streamUrl, 
    title, 
    className, 
    description, 
    secondDescription,
    image, 
    // onNextButtonClicked, 
    // onPrevButtonClicked, 
    // onVolumeSliderChanged, 
    // styles, 
    // theme
  } = props;

  const {isPlay, onClickPlayToggler} = useUILogic(streamUrl)
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
        <StyledPrevNext>
          <StyledPrev />
        </StyledPrevNext>
        <StyledPlayPause onClick={() => {
          onClickPlayToggler()
        }}>
          {isPlay ?  <Pause /> : <PlayIcon /> }
        </StyledPlayPause>
        <StyledPrevNext>
          <Next />
        </StyledPrevNext>
      </StyledButtonContainer>
        <StyledVolumeContainer>
          <VolumeIconContainer>
            <VolumeMedium />
          </VolumeIconContainer>
          <StyledSlider
           onChange={(value) => {
            console.log('value', value)
            }}
              min={0}
               max={100}
               />
        </StyledVolumeContainer>
    </StyledContainer>
  )
}
