import React, {
    useState,
} from 'react';

import {
    StyledTopBar,
} from './styled';

import themes from '@plurid/plurid-themes';



const theme = themes.plurid;

const TopBar: React.FC<any> = () => {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <StyledTopBar
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onMouseMove={() => !mouseOver ? setMouseOver(true) : undefined}
            mouseOver={mouseOver}
            theme={theme}
        >
        </StyledTopBar>
    );
}


export default TopBar;
