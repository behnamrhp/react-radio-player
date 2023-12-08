import 'styled-components';
import { Theme } from './component/i-props';

declare module 'styled-components' {
  export interface DefaultTheme extends Partial<Theme> {}
}