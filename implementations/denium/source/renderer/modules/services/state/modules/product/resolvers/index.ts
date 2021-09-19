// #region imports
    // #region external
    // import {
    //     capitalize,
    // } from '~renderer-services/utilities/general';

    import initialState from '../initial';

    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
export const setProduct = (
    state: Types.State,
    action: Types.SetProductAction,
): Types.State => {
    return {
        ...state,
        ...action.payload,
    };
}


export const unsetProduct = (): Types.State => {
    return {
        ...initialState,
    };
}


// export const setShowScreensaver = (
//     state: Types.State,
//     action: Types.SetShowScreensaverAction,
// ): Types.State => {
//     return {
//         ...state,
//         ui: {
//             ...state.ui,
//             showScreensaver: action.payload,
//         },
//     };
// }


// export const setUIGradient = (
//     state: Types.State,
//     action: Types.SetUIGradientAction,
// ): Types.State => {
//     return {
//         ...state,
//         ui: {
//             ...state.ui,
//             gradient: action.payload,
//         },
//     };
// }


export const setLanguage = (
    state: Types.State,
    action: Types.SetLanguageAction,
): Types.State => {
    return {
        ...state,
        language: action.payload,
    };
}


export const setField = (
    state: Types.State,
    action: Types.SetFieldAction,
): Types.State => {
    const {
        field,
        data,
    } = action.payload;

    const newState = {
        ...state,
    };

    (newState as any)[field] = data;

    return newState;
}



const resolvers = {
    setProduct,
    unsetProduct,
    // setShowScreensaver,
    // setUIGradient,
    setLanguage,
    setField,
};
// #endregion module



// #region exports
export default resolvers;
// #endregion exports
