// #region imports
    // #region external
    import {
        StateSpace,
    } from '~renderer-data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export const ADD_SPACE = 'ADD_SPACE';
export interface AddSpaceAction {
    type: typeof ADD_SPACE;
}


export const REMOVE_SPACE = 'REMOVE_SPACE';
export interface RemoveSpacePayload {
    id: string;
}
export interface RemoveSpaceAction {
    type: typeof REMOVE_SPACE;
    payload: RemoveSpacePayload;
}


export const ADD_SPACE_PLANE = 'ADD_SPACE_PLANE';
export interface AddSpacePlanePayload {
    spaceID: string;
}
export interface AddSpacePlaneAction {
    type: typeof ADD_SPACE_PLANE;
    payload: AddSpacePlanePayload;
}


export const REMOVE_SPACE_PLANE = 'REMOVE_SPACE_PLANE';
export interface RemoveSpacePlanePayload {
    spaceID: string;
    planeID: string;
}
export interface RemoveSpacePlaneAction {
    type: typeof REMOVE_SPACE_PLANE;
    payload: RemoveSpacePlanePayload;
}


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
    | AddSpaceAction
    | RemoveSpaceAction
    | AddSpacePlaneAction
    | RemoveSpacePlaneAction
    | SetDataFieldAction
    | ClearDataAction;
// #endregion module
