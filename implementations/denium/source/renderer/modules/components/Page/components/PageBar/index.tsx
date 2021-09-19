// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import {
        universal,
    } from '@plurid/plurid-ui-components-react';

    import themes from '@plurid/plurid-themes';
    // #endregion libraries


    // #region internal
    import {
        StyledPageBar,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
const {
    inputs: {
        Textline: PluridTextline,
    },
} = universal;

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
            <div>
            </div>

            <PluridTextline
                text={url}
                atChange={handleURL}
                atKeyDown={handleURLChange}
                enterAtClick={() => {}}
            />

            <div>
            </div>
        </StyledPageBar>
    );
}
// #endregion module



// #region exports
export default PageBar;
// #endregion exports
