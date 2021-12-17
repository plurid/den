// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledPluriverse {
    theme: Theme;
}

export const StyledPluriverse = styled.div<IStyledPluriverse>`
    height: 100%;
`;


export const StyledPluriverseEmpty = styled.div`
    height: 100%;
    display: grid;
    place-content: center;
`;
// #region module
