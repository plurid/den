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
        StyledPageLocation,
    } from './styled';

    import ProtocolSelector from './ProtocolSelector';
    // #endregion internal
// #endregion imports



// #region module
const protocolless = (
    url: string,
) => {
    let cleanURL = url
        .replace(/^https?:\/\//g, '')
        .replace(/^den:\/\//g, '')
        .replace(/^gemini:\/\//g, '')
        .replace(/^www\./, '')
        .replace(/\/$/, '');

    return cleanURL;
}


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
    const [
        mouseOver,
        setMouseOver,
    ] = useState(false);
    // #endregion state


    // #region render
    return (
        <StyledPageBar
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            // onMouseMove={() => !mouseOver ? setMouseOver(true) : undefined}
            // mouseOver={mouseOver}
            theme={plurid}
        >
            <div />

            <ProtocolSelector
                show={mouseOver}
                protocol="https"
                theme={plurid}

                changeProtocol={(protocol) => {}}
            />

            <StyledPageLocation>
                <PluridTextline
                    text={protocolless(url)}
                    atChange={handleURL}
                    atKeyDown={handleURLChange}
                    enterAtClick={() => {}}
                />
            </StyledPageLocation>

            <div/>

            <div/>
        </StyledPageBar>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default PageBar;
// #endregion exports
