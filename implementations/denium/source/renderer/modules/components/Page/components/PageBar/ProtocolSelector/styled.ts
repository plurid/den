// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledProtocolSelector {
    theme: Theme;
}

export const StyledProtocolSelector = styled.div<IStyledProtocolSelector>`
    padding-right: 0.7rem;
    width: 70px;
`;
// #region module