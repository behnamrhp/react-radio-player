import styled, { css } from "styled-components";
import Next from "../base/component/icons/next";
import Slider from "rc-slider";
import { type RadioBottomBarTheme } from "./i-props";
import defaultBaseTheme from "../base/theme/default-theme";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) =>
    theme?.padding ? theme.padding : defaultBaseTheme.padding};
  background: ${({ theme }) =>
    theme?.backgroundColor
      ? theme.backgroundColor
      : defaultBaseTheme.backgroundColor};
  width: 100%;
  min-height: 4.5rem;
  height: ${({ theme }) => (theme?.height ? theme.height : "100%")};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.9rem;
  max-width: 30%;
  min-width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ImageWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 648px) {
    display: none;
  }
`;
export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex: 1;
  width: 50%;
`;

export const firstColor = css`
  color: ${({ theme }) =>
    theme?.firstTextColor
      ? theme.firstTextColor
      : defaultBaseTheme.primaryColor};
`;

export const ButtonColor = css`
  color: ${({ theme }) =>
    theme?.buttonsColor ? theme.buttonsColor : defaultBaseTheme.primaryColor};
`;

export const secondColor = css`
  color: ${({ theme }) =>
    theme?.firstTextColor
      ? theme.secondTextColor
      : defaultBaseTheme.secondTextColor};
`;

export const StyledTitle = styled.div`
  ${firstColor}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const StyledPrev = styled(Next)`
  transform: rotate(180deg);
`;

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
`;

export const StyledSecondDesc = styled.div`
  ${secondColor};
  margin-top: auto;
  padding-bottom: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const StyledButton = css<{ $isDisabled?: boolean }>`
  padding: 0;
  background-color: transparent;
  outline: none !important;
  border: none;
  ${ButtonColor};
  transition: all 0.2s;
  color: ${({ $isDisabled }) =>
    $isDisabled
      ? defaultBaseTheme.disabledColor
      : defaultBaseTheme.primaryColor};

  &:hover {
    cursor: ${({ $isDisabled }) => ($isDisabled ? "auto" : "pointer")};
    ${({ $isDisabled }) => ($isDisabled ? null : secondColor)};
  }
`;
export const StyledPrevNext = styled.button<{
  $isHidden?: boolean;
  $isDisabled?: boolean;
}>`
  ${StyledButton};
  height: 2rem;
  width: 2rem;

  display: ${({ $isHidden }) => ($isHidden ? "none" : "default")};
  @media (max-width: 648px) {
    height: 1.7rem;
    width: 1.7rem;
  }
`;

export const StyledPlayPause = styled.button<{
  $isDisabled: boolean;
  theme?: Partial<RadioBottomBarTheme>;
}>`
  ${StyledButton};
  color: ${(props) =>
    props.$isDisabled ? defaultBaseTheme.disabledColor : firstColor};

  &:hover {
    color: ${(props) =>
      props.$isDisabled ? defaultBaseTheme.disabledColor : firstColor};
    cursor: ${(props) => (props.$isDisabled ? "auto" : "pointer")} !important;
  }

  @media (max-width: 648px) {
    height: 2.9rem;
    width: 2.7rem;
  }
  height: 3.56rem;
  width: 3.18rem;
`;

export const StyledVolumeContainer = styled.div`
  min-width: 10.75rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  @media (max-width: 648px) {
    display: none;
  }
  &:hover .rc-slider-handle {
    opacity: 1;
  }
`;

export const StyledMobileVolumeContainer = styled.div`
  min-width: 5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 648px) {
    display: none;
  }
`;

export const VolumeIconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) =>
    theme?.volumeIconColor
      ? theme.volumeIconColor
      : defaultBaseTheme.primaryColor};
`;

export const VolumeIconMobileButton = styled.button<{ $isDisabled?: boolean }>`
  ${StyledButton};
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  color: ${({ theme }) =>
    theme?.volumeIconColor
      ? theme.volumeIconColor
      : defaultBaseTheme.primaryColor};
`;

const styledSliderCss = css`
  & .rc-slider-handle {
    opacity: 0;
    cursor: pointer;
    transition: all 0.1s;
    border-color: ${({ theme }) =>
      theme?.voluemHandleColor
        ? theme.voluemHandleColor
        : defaultBaseTheme.primaryColor};
  }

  & .rc-slider-handle:active {
    border-color: ${({ theme }) =>
      theme?.voluemHandleColor
        ? theme.voluemHandleColor
        : defaultBaseTheme.primaryColor};
  }

  & .rc-slider-handle-dragging {
    box-shadow: none;
    border-color: ${({ theme }) =>
      theme?.voluemHandleColor
        ? theme.voluemHandleColor
        : defaultBaseTheme.primaryColor};
  }

  & .rc-slider-rail {
    background-color: ${({ theme }) =>
      theme?.volumeRailColor
        ? theme.volumeRailColor
        : defaultBaseTheme.volumeRailColor};
  }

  & .rc-slider-track {
    background-color: ${({ theme }) =>
      theme?.volumeTrackColor
        ? theme.volumeTrackColor
        : defaultBaseTheme.primaryColor};
  }
`;

export const StyledSlider: typeof Slider = styled(Slider)`
  ${styledSliderCss};
  @media (max-width: 648px) {
    display: none;
  }
`;
