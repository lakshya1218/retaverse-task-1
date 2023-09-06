import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;
--font-poppins: Poppins;

/* font sizes */
--font-size-xl: 1.25rem;
--font-size-5xl: 1.5rem;
--font-size-base: 1rem;
--font-size-21xl: 2.5rem;
--font-size-sm: 0.88rem;
--font-size-13xl: 2rem;
--font-size-45xl: 4rem;
--font-size-29xl: 3rem;

/* Colors */
--color-white: #fff;
--color-gray-100: #7c7c7c;
--color-gray-200: #1e1e1e;
--color-gray-300: #0a1128;
--color-gray-400: #000022;
--color-gray-500: rgba(255, 255, 255, 0.1);
--color-gray-600: rgba(124, 124, 124, 0.25);
--color-blueviolet: #8635fd;
--color-dodgerblue-100: rgba(0, 133, 255, 0.3);
--color-dodgerblue-200: rgba(0, 133, 255, 0.5);
--color-whitesmoke: #f4f4f4;
--color-black: #000;
--color-plum: rgba(205, 171, 255, 0.5);

/* Gaps */
--gap-4xl: 1.44rem;
--gap-12xs: 0.06rem;

/* Paddings */
--padding-mini: 0.94rem;
--padding-21xl: 2.5rem;
--padding-3xs: 0.63rem;
--padding-11xl: 1.88rem;

/* Border radiuses */
--br-8xs: 5px;
--br-3xs: 10px;
--br-xl: 20px;

}
`;
