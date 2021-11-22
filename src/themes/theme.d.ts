import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      text: string;
      primary1: string;
      primary2: string;
      secondary1: string;
      secondary2: string;
      gray: string;
      gray2: string;
    };
  }
}
