import {
  StyledSlider,
  StyledVolumeContainer,
  VolumeIconContainer,
} from "../../../component/bottom-bar/style";
import Volume from "../volume/Volume";
import IBaseProps from "../../type/i-base-props";

interface IVolumeController {
  customClassName: IBaseProps["customClassName"];
  volume: number;
  onChangeVolume: (value: number) => void;
  onVolumeSliderChanged?: IBaseProps["onVolumeSliderChanged"];
}
/**
 * You can use this component to add volume controler with all styles to your player
 */
export default function VolumeController(props: IVolumeController) {
  const { customClassName, onChangeVolume, volume, onVolumeSliderChanged } =
    props;
  return (
    <StyledVolumeContainer className={customClassName?.volumeContainer}>
      <VolumeIconContainer className={customClassName?.volumeIcon}>
        <Volume volume={volume} />
      </VolumeIconContainer>
      <StyledSlider
        className={customClassName?.volume}
        value={volume}
        onChange={(value) => {
          onChangeVolume(value as number);
          if (onVolumeSliderChanged) onVolumeSliderChanged(value as number);
        }}
        min={0}
        max={100}
        step={1}
      />
    </StyledVolumeContainer>
  );
}
