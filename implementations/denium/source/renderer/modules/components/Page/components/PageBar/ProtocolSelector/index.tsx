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
export interface ProtocolSelectorProperties {
    // #region required
        // #region values
        theme: Theme;
        // #endregion values

        // #region methods
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
            theme,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion required
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledProtocolSelector
            theme={theme}
        >
            <PluridDropdown
                selected="https"
                selectables={[
                    'https',
                    'http',
                    'den',
                    'gemini',
                ]}
                atSelect={() => {}}
                width={65}
            />
        </StyledProtocolSelector>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default ProtocolSelector;
// #endregion exports
