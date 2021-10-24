// #region imports
    // #region libraries
    import styled from 'styled-components';
    // #endregion libraries
// #endregion imports



// #region module
export const StyledPageBar: any = styled.div`
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 70px 3fr 70px 1fr;
    align-items: center;

    background-color: ${(props: any) => {
        return props.theme.backgroundColorDark;
    }};
`;


export const StyledPageLocation = styled.div`
    display: flex;
    align-items: center;
`;
// #endregion module
