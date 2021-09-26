// #region imports
    // #region external
    import * as Types from '../types';

    import initialState from '../initial';

    import resolvers from '../resolvers';
    // #endregion external
// #endregion imports



// #region module
export const reducer = (
    state: Types.State = initialState,
    action: Types.Actions,
): Types.State => {
    switch(action.type) {
        case Types.ADD_SPACE:
            return resolvers.addSpace(state, action);
        case Types.REMOVE_SPACE:
            return resolvers.removeSpace(state, action);
        case Types.ADD_SPACE_PLANE:
            return resolvers.addSpacePlane(state, action);
        case Types.REMOVE_SPACE_PLANE:
            return resolvers.removeSpacePlane(state, action);
        case Types.SET_DATA_FIELD:
            return resolvers.setDataField(state, action);
        case Types.CLEAR_DATA:
            return resolvers.clearData();
        default:
            return {
                ...state,
            };
    }
}
// #endregion module



// #region exports
export default reducer;
// #endregion exports
