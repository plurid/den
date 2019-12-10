import styled from 'styled-components';



export const StyledPageBar: any = styled.div`
    height: 40px;
    background-color: ${(props: any) => {
        if (props.mouseOver) {
            return props.theme.backgroundColorDark;
        }
        return 'transparent';
    }};
`;
