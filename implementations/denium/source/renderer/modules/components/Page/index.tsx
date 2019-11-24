import React from 'react';

import {
    StyledPage,
} from './styled';



interface PageProperties {
    src: string;
}

const Page: React.FC<PageProperties> = (properties) => {
    const {
        src,
    } = properties;

    return (
        <StyledPage>
            <webview
                src={src}
            />
        </StyledPage>
    );
}


export default Page;
