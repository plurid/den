// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import {
        plurid,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region internal
    import {
        StyledTopBar,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
const TopBar: React.FC<any> = () => {
    // #region state
    const [
        mouseOver,
        setMouseOver,
    ] = useState(false);
    // #endregion state


    // #region render
    return (
        <StyledTopBar
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onMouseMove={() => !mouseOver ? setMouseOver(true) : undefined}
            mouseOver={mouseOver}
            theme={plurid}
        >
        </StyledTopBar>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default TopBar;
// #endregion exports
