import { ReactNode } from "react";
import IBaseTheme from "./i-base-theme";
import ICommonProps from "./i-common-props";

export default interface IBaseProps extends ICommonProps {
  streamUrl: string;
  titleChild: ReactNode;
  description?: ReactNode;
  secondDescription: ReactNode;
  customClassName?: {
    container?: string;
    infoContainer?: string;
    imageContainer?: string;
    image?: string;
    textsContainer?: string;
    title?: string;
    description?: string;
    secondDescription?: string;
    player?: string;
    playButton?: string;
    prevButton?: string;
    nextButton?: string;
    volumeContainer?: string;
    volume?: string;
    volumeIcon?: string;
    playerButtonsContainer?: string;
  };
  image?: ReactNode | string;
  styles?: React.CSSProperties;
  theme?: Partial<IBaseTheme>;
  isPrevButtonHidden?: boolean;
  isNextButtonHidden?: boolean;
  isPrevButtonDisabled?: boolean;
  isNextButtonDisabled?: boolean;
  onErrorCatched?(mediaError: MediaError | null, event: ErrorEvent): void;
  onNextButtonClicked?(event: React.MouseEvent): void;
  onPrevButtonClicked?(event: React.MouseEvent): void;
  onPlayButtonClicked?(event: React.MouseEvent): void;
  onVolumeSliderChanged?(percentage: number): void;
}
