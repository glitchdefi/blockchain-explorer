import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

export const StylesBase = createGlobalStyle`
  .light {
    --color-primary: #CA00CE;
    --color-secondary: #00FFFF;
    --color-success: #49AA19;
    --color-pending: #D87A16;
    --color-fail: #D32029;

    --color-1: #FFFFFF;
    --color-2: #F0F0F0;
    --color-3: #D9D9D9;
    --color-4: #BFBFBF;
    --color-5: #BFBFBF;
    --color-6: #8C8C8C;
    --color-7: #000000;
    --color-8: rgba(0, 76, 76, 0.3);
    --color-9: #FAFAFA;
    --color-10: #F0F2F5;
    --color-11: #F5F5F5;
    --color-12: #FAE6FA;
    --color-13: #280029;
    --color-14: #510052;
    --color-15: #EFB3F0;
  }
  .dark {
    --color-primary: #00FFFF;
    --color-secondary: #F100F5;
    --color-success: #49AA19;
    --color-pending: #D87A16;
    --color-fail: #D32029;

    --color-1: #151F23;
    --color-2: #1C2A2F;
    --color-3: #23353B;
    --color-4: #395660;
    --color-5: #4F7785;
    --color-6: #A7C1CA;
    --color-7: #E4ECEF;
    --color-8: rgba(0, 76, 76, 0.3);
  }
  body {
    ${tw`transition-all duration-200`}
  }
`;
