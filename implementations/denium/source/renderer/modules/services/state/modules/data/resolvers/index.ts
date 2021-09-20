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
const setDataField = (
    state: Types.State,
    action: Types.SetDataFieldAction,
): Types.State => {
    const newState = objects.clone(initialState, 'any');

    return {
        ...newState,
    };
}


const clearData = (): Types.State => {
    const newState = objects.clone(initialState, 'any');

    return {
        ...newState,
    };
}



const resolvers = {
    setDataField,
    clearData,
};
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
