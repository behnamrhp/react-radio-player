import styled, { css } from "styled-components";
import defaultBaseTheme from "../theme/default-theme";

export const styledSliderCss = css`
  & .rc-slider-handle {
    opacity: 0;
    cursor: pointer;
    transition: all 0.1s;
    border-color: ${({ theme }) =>
      theme?.voluemHandleColor || theme.primaryColor
        ? theme.voluemHandleColor || theme.primaryColor
        : defaultBaseTheme.primaryColor};
  }

  & .rc-slider-handle:active {
    border-color: ${({ theme }) =>
      theme?.voluemHandleColor || theme.primaryColor
        ? theme.voluemHandleColor || theme.primaryColor
        : defaultBaseTheme.primaryColor};
  }

  & .rc-slider-handle-dragging {
    box-shadow: none;
    border-color: ${({ theme }) =>
      theme?.voluemHandleColor || theme.primaryColor
        ? theme.voluemHandleColor || theme.primaryColor
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
      theme?.volumeTrackColor || theme.primaryColor
        ? theme.volumeTrackColor || theme.primaryColor
        : defaultBaseTheme.primaryColor};
  }
`;

export const firstColor = css`
  color: ${({ theme }) =>
    theme?.firstTextColor || theme.primaryColor
      ? theme.firstTextColor || theme.primaryColor
      : defaultBaseTheme.primaryColor};
`;

export const secondColor = css`
  color: ${({ theme }) =>
    theme?.firstTextColor
      ? theme.secondTextColor
      : defaultBaseTheme.secondTextColor};
`;

export const StyledTitle = styled.div`
  ${firstColor}
  font-size: ${({ theme }) =>
    theme.TitleFontSize ? theme.TitleFontSize : defaultBaseTheme.TitleFontSize};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const StyledSecondDesc = styled.div`
  ${secondColor};
  font-size: ${({ theme }) =>
    theme.secondDescriptionFontSize
      ? theme.secondDescriptionFontSize
      : defaultBaseTheme.secondDescriptionFontSize};
  margin-top: auto;
  padding-bottom: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const StyledDescription = styled.div`
  ${secondColor};
  font-size: ${({ theme }) =>
    theme.descriptionFontSize
      ? theme.descriptionFontSize
      : defaultBaseTheme.descriptionFontSize};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const ButtonColor = css`
  color: ${({ theme }) =>
    theme?.buttonsColor || theme.primaryColor
      ? theme.buttonsColor || theme.primaryColor
      : defaultBaseTheme.primaryColor};
`;

export const StyledButton = css<{ $isDisabled?: boolean }>`
  padding: 0;
  background-color: transparent;
  outline: none !important;
  border: none;
  ${ButtonColor};
  transition: all 0.2s;
  color: ${({ $isDisabled, theme }) =>
    $isDisabled
      ? theme.disabledColor || defaultBaseTheme.disabledColor
      : theme.primaryColor || defaultBaseTheme.primaryColor};

  &:hover {
    color: ${({ $isDisabled, theme }) =>
      $isDisabled
        ? theme.disabledColor
        : theme.hoverColor || defaultBaseTheme.hoverColor};
    cursor: ${({ $isDisabled }) => ($isDisabled ? "auto" : "pointer")};
  }
`;
