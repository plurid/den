// #region imports
    // #region libraries
    import styled, {
        createGlobalStyle,
    } from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        universal,
        pluridal,
    } from '@plurid/plurid-ui-components-react';
    // #endregion libraries
// #endregion imports



// #region module
const {
    buttons: {
        PureButton: PluridPureButton,
        LinkButton: PluridLinkButton,
        RefreshButton: PluridRefreshButton,
    },
    form: {
        FormLeftRight: PluridFormLeftRight,
        Formbutton: PluridFormbutton,
    },
    general: {
        GlobalStyles: PluridGlobalStyles,
    },
    inputs: {
        Switch: PluridSwitch,
        Dropdown: PluridDropdown,
        InputSwitch: PluridInputSwitch,
        InputLine: PluridInputLine,
        Slider: PluridSlider,
        Textline: PluridTextline,
    },
    typography: {
        Heading: PluridHeading,
    },
    varia: {
        CopyableLine: PluridCopyableLine,
    },
} = universal;


const {
    toolbars: {
        ToolbarSpecific: PluridToolbarSpecific,
    },
} = pluridal;


export interface IGlobalStyles {
    theme: Theme;
    gradient?: boolean
}

const GlobalStyles = createGlobalStyle<IGlobalStyles>`
    body {
        background: ${
            ({
                theme,
                gradient,
            }) => {
                const foreground = theme.type === 'dark'
                    ? theme.backgroundColorTertiary
                    : theme.backgroundColorPrimary;
                const background = theme.type === 'dark'
                    ? theme.backgroundColorPrimary
                    : theme.backgroundColorTertiary;

                if (!gradient) {
                    return foreground;
                }

                const radialGradient = `radial-gradient(ellipse at center, ${foreground} 0%, ${background} 100%)`;
                return radialGradient;
            }
        };

        overflow: hidden;
        user-select: none;

        /* to be used in production (?) */
        /* cursor: none; */
    }

    #denium {
        box-sizing: border-box;
        overflow: auto;
        height: 100%;

        overflow-y: overlay;

        background: ${
            ({
                theme,
                gradient,
            }) => {
                const foreground = theme.type === 'dark'
                    ? theme.backgroundColorTertiary
                    : theme.backgroundColorPrimary;
                const background = theme.type === 'dark'
                    ? theme.backgroundColorPrimary
                    : theme.backgroundColorTertiary;

                if (!gradient) {
                    return foreground;
                }

                const radialGradient = `radial-gradient(ellipse at center, ${foreground} 0%, ${background} 100%)`;
                return radialGradient;
            }
        };
    }
`;


const StyledH2Heading = styled(PluridHeading)`
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    margin-bottom: 1.5rem;
`;


const StyledH3Heading = styled(PluridHeading)`
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
    margin-bottom: 1.2rem;
`;


const StyledPluridFormLeftRight = styled(PluridFormLeftRight)`
    margin-bottom: 1.5rem;
`;


const StyledPluridFormbutton = styled(PluridFormbutton)`
    padding: 0.7rem;
`;


const StyledPluridPureButton = styled(PluridPureButton)`
    width: 300px;
    max-width: 300px;
    margin: 30px auto;

    @media (max-width: 500px) {
        width: 100%;
        padding: 0 1rem;
    }
`;


const StyledPluridInputLine = styled(PluridInputLine)`
    @media (max-width: 500px) {
        width: 100%;
    }
`;
// #endregion module



// #region exports
export {
    PluridPureButton,
    PluridLinkButton,
    PluridRefreshButton,

    StyledPluridFormLeftRight,
    PluridFormLeftRight,
    StyledPluridFormbutton,
    PluridFormbutton,

    PluridGlobalStyles,
    GlobalStyles,

    PluridSwitch,
    PluridDropdown,
    PluridInputSwitch,
    PluridInputLine,
    PluridSlider,
    PluridTextline,

    PluridHeading,

    PluridCopyableLine,

    StyledH2Heading,
    StyledH3Heading,

    StyledPluridPureButton,

    StyledPluridInputLine,



    PluridToolbarSpecific,
};
// #endregion exports
