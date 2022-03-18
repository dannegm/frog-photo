import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const globalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
    }

    body {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        color: ${colors.black};
    }
`;

export default globalStyle;
