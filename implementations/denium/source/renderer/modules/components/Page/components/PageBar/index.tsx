import React, {
    useState,
} from 'react';

import {
    PluridTextline,
} from '@plurid/plurid-ui-react';

import themes from '@plurid/plurid-themes';

import {
    StyledPageBar,
} from './styled';




const theme = themes.plurid;

interface PageBarOwnProperties {
    url: string;
    handleURL: any;
    handleURLChange: any;
}

const PageBar: React.FC<PageBarOwnProperties> = (properties) => {
    const {
        url,
        handleURL,
        handleURLChange,
    } = properties;

    // const [mouseOver, setMouseOver] = useState(false);

    return (
        <StyledPageBar
            // onMouseEnter={() => setMouseOver(true)}
            // onMouseLeave={() => setMouseOver(false)}
            // onMouseMove={() => !mouseOver ? setMouseOver(true) : undefined}
            // mouseOver={mouseOver}
            theme={theme}
        >
            <PluridTextline
                text={url}
                atChange={handleURL}
                atKeyDown={handleURLChange}
            />

            {/* <input
                type="text"
                value={url}
                onChange={handleURL}
                onKeyDown={handleURLChange}
            /> */}
        </StyledPageBar>
    );
}


export default PageBar;
