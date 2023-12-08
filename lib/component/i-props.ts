import { ReactNode } from "react";

export type Theme = {
  backgroundColor: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  buttonsColor: string;
  firstTextColor: string;
  secondTextColor: string;
  padding: string;
  height: number;
  volumeTrackColor: string;
  voluemHandleColor: string;
  volumeRailColor: string;
  volumeIconColor: string;
}
export default interface IRadioBottomBarPorps {
  streamUrl: string;
  title: string;
  description?: string;
  secondDescription: string;
  className?: {
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
  theme?: Partial<Theme>;
  onErrorCatched?(mediaError: MediaError | null, event: ErrorEvent): void;
  onNextButtonClicked?(event: React.MouseEvent): void;
  onPrevButtonClicked?(event: React.MouseEvent): void;
  onPlayButtonClicked?(event: React.MouseEvent): void;
  onVolumeSliderChanged?(percentage: number): void;
}