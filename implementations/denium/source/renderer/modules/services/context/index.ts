// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries


    // #region external
    import {
        ApplicationElectron,
    } from '../../data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export interface IContext {
    electron?: ApplicationElectron,
}

const Context = React.createContext<IContext | null>(null);
// #endregion module



// #region exports
export default Context;
// #endregion exports
