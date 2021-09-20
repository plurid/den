// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import {
        plurid,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        PluridTextline,
    } from '~renderer-services/styled';
    // #endregion external


    // #region internal
    import {
        StyledPageBar,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface PageBarOwnProperties {
    url: string;
    handleURL: any;
    handleURLChange: any;
}

const PageBar: React.FC<PageBarOwnProperties> = (
    properties,
) => {
    // #region properties
    const {
        url,
        handleURL,
        handleURLChange,
    } = properties;
    // #endregion properties


    // #region state
    // const [mouseOver, setMouseOver] = useState(false);
    // #endregion state


    // #region render
    return (
        <StyledPageBar
            // onMouseEnter={() => setMouseOver(true)}
            // onMouseLeave={() => setMouseOver(false)}
            // onMouseMove={() => !mouseOver ? setMouseOver(true) : undefined}
            // mouseOver={mouseOver}
            theme={plurid}
        >
            <div>
            </div>

            <PluridTextline
                text={url}
                atChange={handleURL}
                atKeyDown={handleURLChange}
                enterAtClick={() => {}}
            />

            <div>
            </div>
        </StyledPageBar>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default PageBar;
// #endregion exports
