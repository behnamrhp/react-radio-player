import { HTMLAttributes } from "react";

/**
 * All of components should have this props as base props.
 */
export default interface ICommonProps
  extends JSX.IntrinsicAttributes,
    HTMLAttributes<HTMLDivElement> {
  /**
   * Custom styles related to the component.
   */
  style?: React.CSSProperties;
  /**
   * ref Object related to the component
   */
  ref?: React.RefObject<HTMLDivElement> | null;
  /**
   * id of the root element
   */
  id?: string | undefined;
}
