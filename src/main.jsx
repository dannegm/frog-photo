import React from 'react';
import ReactDOM from 'react-dom';

import RouterHandler from '@state/router/RouterHandler';
import GlobalStyles from '@styles/globalStyles';

import DeviceContainer from '@components/DeviceContainer';

const App = () => (
    <>
        <GlobalStyles />
        <DeviceContainer>
            <RouterHandler />
        </DeviceContainer>
    </>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
