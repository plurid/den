// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const setDataField = (
    payload: Types.SetDataFieldPayload
): Types.SetDataFieldAction => {
    return {
        type: Types.SET_DATA_FIELD,
        payload,
    };
}


const clearData = (): Types.ClearDataAction => {
    return {
        type: Types.CLEAR_DATA,
        payload: undefined,
    };
}



const actions = {
    setDataField,
    clearData,
};
// #endregion module



// #region exports
export default actions;
// #endregion exports
