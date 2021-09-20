// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries


    // #region external
    import Pluriverse from '~renderer-containers/Pluriverse';
    import TopBar from '~renderer-components/TopBar';
    // #endregion external
// #endregion imports



// #region module
const View: React.FC<any> = () => {
    return (
        <div>
            <TopBar />

            <Pluriverse />
        </div>
    );
}
// #endregion module



// #region exports
export default View;
// #endregion exports
