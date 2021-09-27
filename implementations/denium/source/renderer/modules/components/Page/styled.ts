// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries
// #endregion imports



// #region module
export interface IStyledPage {
    theme: Theme;
}

export const StyledPage = styled.div<IStyledPage>`
    font-family: ${
        ({
            theme,
        }: IStyledPage) => theme.fontFamilySansSerif
    };
    background-color: ${
        ({
            theme,
        }: IStyledPage) => theme.backgroundColorPrimary
    };

    min-height: 700px;

    webview {
        height: 700px;
        width: 100%;
    }
`;


export const StyledNoWebview = styled.div`
    height: 650px;
    display: grid;
    place-content: center;
`;
// #endregion module
