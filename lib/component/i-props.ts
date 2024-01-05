import IBaseTheme from "../base/type/i-base-theme";
import IBaseProps from "../base/type/i-base-props";

export type Theme = IBaseTheme & {
  height: number;
}

export default interface IRadioBottomBarPorps extends IBaseProps {
  theme?: Partial<Theme>;
}