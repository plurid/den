// #region imports
    // #region external
    import * as Types from '../types';
    // #endregion external
// #endregion imports



// #region module
const mockSpaces = {
    '123': {
        id: '123',
        planes: [
            {
                id: '1234',
                url: 'https://www.google.com',
            },
            {
                id: '5678',
                url: 'https://plurid.com',
            },
        ],
    },
};


export const initialState: Types.State = {
    spaces: {
        ...mockSpaces,
    },
};
// #endregion module



// #region exports
export default initialState;
// #endregion exports
