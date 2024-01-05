import { ThemeProvider } from "styled-components";
import IBaseProps from "../../type/i-base-props";

export default function WithThemeProvider<
COMPONENTS_PROPS extends IBaseProps
>(Component: React.FunctionComponent<COMPONENTS_PROPS>) {
  const WrappedComponent = (props: COMPONENTS_PROPS) => {
    const { theme } = props
    return (
      <ThemeProvider theme={theme || {}}>
        <Component {...props} />
      </ThemeProvider>
    )
  }

  return WrappedComponent
}
