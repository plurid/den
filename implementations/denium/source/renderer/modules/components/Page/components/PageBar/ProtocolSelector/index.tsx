// #region imports
    // #region libraries
    import React from 'react';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        PluridDropdown,
    } from '~renderer-services/styled';
    // #endregion external


    // #region internal
    import {
        StyledProtocolSelector,
    } from './styled';
    // #endregion internal
// #region imports



// #region module
export const protocols = [
    'https',
    'http',
    'den',
    'gemini',
];


export interface ProtocolSelectorProperties {
    // #region required
        // #region values
        show: boolean;
        protocol: string;
        theme: Theme;
        // #endregion values

        // #region methods
        changeProtocol: (protocol: string) => void;
        // #endregion methods
    // #endregion required
}

const ProtocolSelector: React.FC<ProtocolSelectorProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            show,
            protocol,
            theme,
            // #endregion values

            // #region methods
            changeProtocol,
            // #endregion methods
        // #endregion required
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledProtocolSelector
            theme={theme}
        >
            {show && protocol && (
                <PluridDropdown
                    selected={protocol}
                    selectables={protocols}

                    atSelect={(selected) => {
                        if (typeof selected === 'string') {
                            changeProtocol(selected);
                        }
                    }}
                    width={65}
                    style={{
                        fontSize: '0.8rem',
                    }}
                />
            )}
        </StyledProtocolSelector>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default ProtocolSelector;
// #endregion exports
