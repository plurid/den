// #region imports
    // #region external
    import {
        StateSpace,
    } from '~renderer-data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export const SET_DATA_FIELD = 'SET_DATA_FIELD';
export interface SetDataFieldPayload<T = any> {
    field: string;
    value: T;
}
export interface SetDataFieldAction<T = any> {
    type: typeof SET_DATA_FIELD;
    payload: SetDataFieldPayload<T>;
}


export const CLEAR_DATA = 'CLEAR_DATA';
export interface ClearDataAction {
    type: typeof CLEAR_DATA;
    payload: undefined;
}


export type StateSpaces = Record<string, StateSpace | undefined>;

export interface State {
    spaces: StateSpaces;
}


export type Actions =
    | SetDataFieldAction
    | ClearDataAction;
// #endregion module
