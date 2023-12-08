import styled, { css } from "styled-components";
import Next from "./icons/next";
import Slider from 'rc-slider';

const primaryColor = '#f0f0f0'

const disabledColor = '#797979';
export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .9rem;
  background: linear-gradient(90deg, #424141 0%, #302F30 52.63%, #42413F 85.53%, #2F2E2C 105.26%);
  width: 100%;
  height: 4.5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: .9rem;
  max-width: 30%;
  min-width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ImageWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
` 

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex: 1;
  width: 50%;
`

export const firstColor = css`
  color: ${primaryColor};

`


export const secondColor = css`
  color: #9595A3
`

export const StyledTitle = styled.div`
  ${firstColor}
  text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`

export const StyledPrev = styled(Next)`
  transform: rotate(180deg);
`

export const StyledDescription = styled.div`
  ${secondColor};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;


export const StyledButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const StyledSecondDesc = styled.div`
  ${secondColor};
  margin-top: auto;
  padding-bottom: 5px;
  text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`

export const StyledButton = css`
  padding: 0;
  background-color: transparent;
  outline: none !important;
  border: none;
  ${firstColor};
  transition: all .2s;
  &:hover{
    cursor: pointer;
    ${secondColor};
  }
`
export const StyledPrevNext = styled.button`
${StyledButton};
  height: 2rem;
  width: 2rem;
`

export const StyledPlayPause = styled.button<{$isDisabled: boolean}>`
${StyledButton};
  color: ${(props) => props.$isDisabled ? disabledColor : firstColor };

  &:hover{
    color: ${(props) => props.$isDisabled ? disabledColor : firstColor };
    cursor: ${(props) => props.$isDisabled ? 'auto' : 'pointer' } !important;
  }
  height: 3.56rem;
  width: 3.18rem;
`

export const StyledVolumeContainer = styled.div`
  min-width: 10.75rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .7rem;
  
  &:hover .rc-slider-handle {
    opacity: 1;
  }
`

export const VolumeIconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`

export const StyledSlider = styled(Slider)`
  & .rc-slider-handle {
    opacity: 0;
    cursor: pointer;
    transition: all .1s;
    border-color: ${primaryColor};
  }

  & .rc-slider-handle:active {
    border-color: ${primaryColor};
  }

  & .rc-slider-handle-dragging {
    box-shadow: none;
    border-color: ${primaryColor};
  }

  & .rc-slider-rail {
    background-color: #525151;
  }

  & .rc-slider-track {
    background-color: ${primaryColor};
  }
  
`