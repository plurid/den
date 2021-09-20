// #region imports
    // #region libraries
    import {
        objects,
    } from '@plurid/plurid-functions';
    // #endregion libraries


    // #region internal
    import initialState from '../initial';

    import * as Types from '../types';
    // #endregion internal
// #endregion imports



// #region module
export const setDataField = (
    state: Types.State,
    action: Types.SetDataFieldAction,
): Types.State => {
    const newState = objects.clone(initialState, 'any');

    return {
        ...newState,
    };
}


const clearData = (
    state: Types.State,
    action: Types.ClearDataAction,
): Types.State => {
    const newState = objects.clone(initialState, 'any');

    return {
        ...newState,
    };
}



const resolvers = {
    clearData,
};
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
