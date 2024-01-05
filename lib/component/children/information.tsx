import { ReactNode } from "react";
import { StyledTextContainer } from "../style";
import IBaseProps from "../../base/type/i-base-props";
import {
  StyledDescription,
  StyledSecondDesc,
  StyledTitle,
} from "../../base/style/generic-styles";

interface IInformation {
  customClassName: IBaseProps["customClassName"];
  titleChild: ReactNode;
  description: ReactNode;
  secondDescription: ReactNode;
}
export default function Information(props: IInformation) {
  const { customClassName, description, secondDescription, titleChild } = props;
  return (
    <StyledTextContainer className={customClassName?.textsContainer}>
      <StyledTitle className={customClassName?.title}>{titleChild}</StyledTitle>
      <StyledDescription className={customClassName?.description}>
        {description}
      </StyledDescription>
      <StyledSecondDesc className={customClassName?.secondDescription}>
        {secondDescription}
      </StyledSecondDesc>
    </StyledTextContainer>
  );
}
