import { ReactNode } from "react";
import Music from "../../base/component/icons/music";
import IBaseProps from "../../base/type/i-base-props";
import { ImageWrapper, StyledImage } from "../style";

interface IImage {
  customClassName: IBaseProps["customClassName"];
  image: ReactNode;
}

export default function Image(props: IImage) {
  const { customClassName, image } = props;

  const defaultImage = image || <Music />;

  return (
    <ImageWrapper className={customClassName?.imageContainer}>
      {typeof image === "string" ? (
        <StyledImage className={customClassName?.image} src={image} />
      ) : (
        defaultImage
      )}
    </ImageWrapper>
  );
}
