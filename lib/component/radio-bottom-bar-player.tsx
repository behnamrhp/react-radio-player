import IRadioBottomBarPorps from "./i-props";
import Next from "./icons/next";
import Pause from "./icons/pause";
import { ImageWrapper, InfoContainer, StyledButtonContainer, StyledContainer, StyledDescription, StyledImage, StyledPlayPause, StyledPrev, StyledPrevNext, StyledSecondDesc, StyledTextContainer, StyledTitle, StyledVolumeContainer } from "./style";
import './general.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function RadioBottomBarPlayer(props: IRadioBottomBarPorps) {
  const { 
    // streamUrl, 
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
        <StyledPlayPause>
          <Pause />
        </StyledPlayPause>
        <StyledPrevNext>
          <Next />
        </StyledPrevNext>
      </StyledButtonContainer>
        <StyledVolumeContainer>
          <Slider  min={0} max={100}/>
        </StyledVolumeContainer>
    </StyledContainer>
  )
}
