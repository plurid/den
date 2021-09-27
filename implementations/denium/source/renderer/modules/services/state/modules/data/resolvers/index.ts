// #region imports
    // #region libraries
    import {
        uuid,
        objects,
    } from '@plurid/plurid-functions';
    // #endregion libraries


    // #region exports
    import {
        StateSpace,
        StateSpacePlane,
    } from '~renderer-data/interfaces';
    // #endregion exports


    // #region internal
    import initialState from '../initial';

    import * as Types from '../types';
    // #endregion internal
// #endregion imports



// #region module
const addSpace = (
    state: Types.State,
    _: Types.AddSpaceAction,
): Types.State => {
    const newState = objects.clone(state, 'any');

    const newSpaceID = uuid.generate();
    const newSpace: StateSpace = {
        id: newSpaceID,
        planes: [],
    };

    newState.spaces[newSpaceID] = newSpace;

    return {
        ...newState,
    };
}


const removeSpace = (
    state: Types.State,
    action: Types.RemoveSpaceAction,
): Types.State => {
    const newState = objects.clone(state, 'any');

    const {
        id,
    } = action.payload;

    delete newState.spaces[id];

    return {
        ...newState,
    };
}


const addSpacePlane = (
    state: Types.State,
    action: Types.AddSpacePlaneAction,
): Types.State => {
    const newState = objects.clone(state, 'any');

    const {
        spaceID,
    } = action.payload;

    const space = newState.spaces[spaceID];
    if (!space) {
        return {
            ...newState,
        };
    }

    const planes = space.planes;

    const newSpacePlaneID = uuid.generate();
    const newPlane: StateSpacePlane = {
        id: newSpacePlaneID,
        url: '',
    };
    planes.push(newPlane);

    (newState.spaces[spaceID] as StateSpace).planes = planes;

    return {
        ...newState,
    };
}


const removeSpacePlane = (
    state: Types.State,
    action: Types.RemoveSpacePlaneAction,
): Types.State => {
    const newState = objects.clone(state, 'any');

    const {
        spaceID,
        planeID,
    } = action.payload;

    const space = newState.spaces[spaceID];
    if (!space) {
        return {
            ...newState,
        };
    }

    const planes = space.planes.filter(plane => plane.id !== planeID);
    (newState.spaces[spaceID] as StateSpace).planes = planes;

    return {
        ...newState,
    };
}


const setPlaneField = (
    state: Types.State,
    action: Types.SetPlaneFieldAction,
): Types.State => {
    const newState = objects.clone(state, 'any');

    const {
        spaceID,
        planeID,
        field,
        value,
    } = action.payload;

    const space = newState.spaces[spaceID];
    if (!space) {
        return {
            ...newState,
        };
    }

    const planes = space.planes.map(plane => {
        if (plane.id === planeID) {
            const planeData = {
                ...plane,
            };
            planeData[field] = value;
            return {
                ...planeData,
            };
        }

        return {
            ...plane,
        };
    });

    (newState.spaces[spaceID] as StateSpace).planes = planes;

    return {
        ...newState,
    };
}


const setDataField = (
    state: Types.State,
    action: Types.SetDataFieldAction,
): Types.State => {
    const newState = objects.clone(state, 'any');

    const {
        field,
        value,
    } = action.payload;

    (newState as any)[field] = value;

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
export default resolvers;
// #endregion exports
