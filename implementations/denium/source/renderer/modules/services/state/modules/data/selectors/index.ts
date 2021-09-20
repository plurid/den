// #region imports
    // #region external
    import {
        AppState,
    } from '../../../store';
    // #endregion external
// #endregion imports



// #region module
const getSpaces = (state: AppState) => state.data.spaces;


const selectors = {
    getSpaces,
};
// #endregion module



// #region exports
export default selectors;
// #endregion exports
