// #region imports
    // #region external
    import * as Types from '../types';

    // import {
    //     recipes,
    // } from '~renderer-data/mocks';
    // #endregion external
// #endregion imports



// #region module
const initialState: Types.State = {
    ui: {
        toolbars: {
            location: 50,
            alwaysShow: true,
            showNames: true,
            scaleIcons: true,
        },
        showScreensaver: false,
        gradient: false,
    },
    language: 'english',
};
// #endregion module



// #region exports
export default initialState;
// #endregion exports
