// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import {
        Provider as ReduxProvider,
    } from 'react-redux';
    // #endregion libraries


    // #region external
    import reduxStore from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    // #endregion external


    // #region internal
    import View from './View';
    // #endregion internal
// #endregion imports



// #region module
const App: React.FC<any> = () => {
    // #region state
    const [
        store,
        setStore,
    ] = useState(
        reduxStore(
            {},
        ),
    );
    // #endregion state


    // #region render
    return (
        <ReduxProvider
            store={store}
            context={StateContext}
        >
            <View />
        </ReduxProvider>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default App;
// #endregion exports
