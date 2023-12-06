import { ReactNode } from "react";

export type Theme = {
  backgroundColor: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  buttonColor: string;
  firstTextColor: string;
  secondTextColor: string;
  paddingX: string;
  paddingY: string;
  height: number;
}
export default interface IRadioBottomBarPorps {
  streamUrl: string;
  title: string;
  description?: string;
  secondDescription: string;
  className?: string;
  image?: ReactNode | string;
  styles?: React.CSSProperties;
  theme?: Partial<Theme>;
  onNextButtonClicked?(event: React.MouseEvent): void;
  onPrevButtonClicked?(event: React.MouseEvent): void;
  onPlayButtonClicked?(event: React.MouseEvent): void;
  onVolumeSliderChanged?(percentage: number): void;
}