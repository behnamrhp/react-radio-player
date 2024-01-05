import styled, { css } from "styled-components";
import defaultBaseTheme from "../theme/default-theme";

export const styledSliderCss = css`
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

export const firstColor = css`
  color: ${({ theme }) =>
    theme?.firstTextColor
      ? theme.firstTextColor
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
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

export const StyledDescription = styled.div`
  ${secondColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;
