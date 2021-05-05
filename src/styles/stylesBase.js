import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";

export const StylesBase = createGlobalStyle`
  .light {
    --color-primary: #24C6C9;
    --color-secondary: #BF28E4;

    --color-success: #24C6C9;
    --color-pending: #BF28E4;
    --color-waiting: rgba(255, 255, 255, 0.2);
    --color-info: #005FA9;

    --text-primary: #ffffff;
    --text-secondary: rgba(255,255,255,0.7);
    --text-1: rgba(255,255,255,0.6);

    --bg-primary: #1C2A2F;
    --bg-secondary: #2F4043;
    --bg-1: rgba(36, 198, 201, 0.15);
    --bg-2: #173D42;
    --bg-3: #243237;
    --bg-4: #131313;
    --bg-5: rgba(255, 255, 255, 0.15);
  }
  .dark {
    --color-primary: #24C6C9;
    --color-secondary: #BF28E4;

    --color-success: #24C6C9;
    --color-pending: #BF28E4;
    --color-waiting: rgba(255, 255, 255, 0.2);
    --color-info: #005FA9;

    --text-primary: #ffffff;
    --text-secondary: rgba(255,255,255,0.7);
    --text-1: rgba(255,255,255,0.6);

    --bg-primary: #1C2A2F;
    --bg-secondary: #2F4043;
    --bg-1: rgba(36, 198, 201, 0.15);
    --bg-2: #173D42;
    --bg-3: #243237;
    --bg-4: #131313;
    --bg-5: rgba(255, 255, 255, 0.15);
  }
  body {
    ${tw`transition-all duration-200`}
  }
`;
