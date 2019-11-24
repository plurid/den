import React, {
    useState,
} from 'react';

import {
    StyledTopBar,
} from './styled';



const TopBar: React.FC<any> = () => {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <StyledTopBar
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(true)}
            onMouseMove={() => !mouseOver ? setMouseOver(true) : undefined}
            mouseOver={mouseOver}
        >
        </StyledTopBar>
    );
}


export default TopBar;
