import VolumeLoud from "../icons/volume-loud";
import VolumeLow from "../icons/volume-low";
import VolumeMedium from "../icons/volume-medium";
import VolumeMute from "../icons/volume-mute";

/**
 * You can use this component to show volume icon based on percentage of volume
 */
export default function Volume(props: { volume: number }) {
  const { volume } = props;

  if (volume === 0) return <VolumeMute />;

  if (volume <= 25) return <VolumeLow />;

  if (volume > 25 && volume <= 75) return <VolumeMedium />;

  return <VolumeLoud />;
}
