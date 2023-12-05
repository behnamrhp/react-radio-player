import styled, { css } from "styled-components";
import Next from "./icons/next";

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
  justify-content: center;
  align-items: center;
  gap: .9rem;
`

export const ImageWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 8px;
  overflow: hidden;
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
`

export const firstColor = css`
  color: #f0f0f0;

`


export const secondColor = css`
  color: #9595A3
`

export const StyledTitle = styled.div`
  ${firstColor}
`

export const StyledPrev = styled(Next)`
  transform: rotate(180deg);
`

export const StyledDescription = styled.div`
  ${secondColor}
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

export const StyledPlayPause = styled.button`
${StyledButton};
  height: 3.56rem;
  width: 3.18rem;
`

export const StyledVolumeContainer = styled.div`
  min-width: 10.75rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`