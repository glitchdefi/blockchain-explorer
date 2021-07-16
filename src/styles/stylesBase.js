import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

export const StylesBase = createGlobalStyle`
  .light {
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

    --color-success: #24C6C9;
    --color-pending: #BF28E4;
    --color-out: #BF28E4;
    --color-in: #24C6C9;
    --color-waiting: rgba(255, 255, 255, 0.2);
    --color-info: #005FA9;

    --text-primary: #ffffff;
    --text-secondary: rgba(255,255,255,0.7);
    --text-1: rgba(255,255,255,0.6);
    --text-2: #1C2A2F;
    --text-3: #151F23;

    --bg-primary: #1C2A2F;
    --bg-secondary: #2F4043;
    --bg-1: rgba(36, 198, 201, 0.15);
    --bg-2: #173D42;
    --bg-3: #243237;
    --bg-4: #131313;
    --bg-5: #343f44;
    --bg-6: #26353A;
    --bg-7: rgba(14, 14, 44, 0.2);
    --bg-8: #C4C4C4;
    --bg-9: #00A7B3;
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

    --color-out: #BF28E4;
    --color-in: #24C6C9;
    --color-waiting: rgba(255, 255, 255, 0.2);
    --color-info: #005FA9;

    --text-primary: #ffffff;
    --text-secondary: rgba(255,255,255,0.7);
    --text-1: rgba(255,255,255,0.6);
    --text-2: #1C2A2F;
    --text-3: #151F23;

    --bg-primary: #1C2A2F;
    --bg-secondary: #2F4043;
    --bg-1: rgba(36, 198, 201, 0.15);
    --bg-2: #173D42;
    --bg-3: #243237;
    --bg-4: #131313;
    --bg-5: #343f44;
    --bg-6: #26353A;
    --bg-7: rgba(14, 14, 44, 0.2);
    --bg-8: #C4C4C4;
    --bg-9: #00A7B3;
  }
  body {
    ${tw`transition-all duration-200`}
  }
`;
