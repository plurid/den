// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const addSpace = (): Types.AddSpaceAction => {
    return {
        type: Types.ADD_SPACE,
    };
}


const removeSpace = (
    payload: Types.RemoveSpacePayload,
): Types.RemoveSpaceAction => {
    return {
        type: Types.REMOVE_SPACE,
        payload,
    };
}


const addSpacePlane = (
    payload: Types.AddSpacePlanePayload,
): Types.AddSpacePlaneAction => {
    return {
        type: Types.ADD_SPACE_PLANE,
        payload,
    };
}


const removeSpacePlane = (
    payload: Types.RemoveSpacePlanePayload,
): Types.RemoveSpacePlaneAction => {
    return {
        type: Types.REMOVE_SPACE_PLANE,
        payload,
    };
}


const setPlaneField = (
    payload: Types.SetPlaneFieldPayload
): Types.SetPlaneFieldAction => {
    return {
        type: Types.SET_PLANE_FIELD,
        payload,
    };
}


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
    addSpace,
    removeSpace,
    addSpacePlane,
    removeSpacePlane,
    setPlaneField,
    setDataField,
    clearData,
};
// #endregion module



// #region exports
export default actions;
// #endregion exports
