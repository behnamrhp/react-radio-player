import VolumeLoud from "../../base/component/icons/volume-loud";
import VolumeLow from "../../base/component/icons/volume-low";
import VolumeMedium from "../../base/component/icons/volume-medium";
import VolumeMute from "../../base/component/icons/volume-mute";

export default function Volume(props: { volume: number }) {
  const { volume } = props;

  if (volume === 0) return <VolumeMute />;

  if (volume <= 25) return <VolumeLow />;

  if (volume > 25 && volume <= 75) return <VolumeMedium />;

  return <VolumeLoud />;
}
