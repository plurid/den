import styled from 'styled-components';



export const StyledTopBar: any = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    background-color: ${(props: any) => {
        if (props.mouseOver) {
            return 'red';
        }
        return 'transparent';
    }};
`;
