import React, {
    useContext,
} from 'react';

import {
    StyledPage,
} from './styled';

import PluriverseContext from '../../containers/Pluriverse/context';



interface PageProperties {
    id: string;
}

const Page: React.FC<PageProperties> = (properties) => {
    const context: any = useContext(PluriverseContext);

    const {
        pages,
    } = context;

    const {
        id,
    } = properties;

    const page = pages.find((page: any) => page.id === id);
    if (!page) {
        return (
            <div>
                <h4>
                    Nothing Found.
                </h4>
            </div>
        );
    }

    const src = page.path;

    return (
        <StyledPage>
            <webview
                src={src}
            />
        </StyledPage>
    );
}


export default Page;
