import React, {
    useRef,
    useContext,
    useState,
    useEffect,
} from 'react';

import {
    StyledPage,
} from './styled';

import PluriverseContext from '../../containers/Pluriverse/context';



interface PageProperties {
    id: string;
}

const Page: React.FC<PageProperties> = (properties) => {
    const webviewElement = useRef<HTMLWebViewElement>(null);

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

    const [url, setURL] = useState(src);

    const handleURL = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setURL(event.target.value)
    }

    useEffect(() => {
        if (webviewElement.current) {
            webviewElement.current.addEventListener('dom-ready', async () => {
                const url = (webviewElement as any).current.getURL();
                setURL(url);
            });
        }
    }, [
        webviewElement.current,
    ]);

    return (
        <StyledPage>
            <div>
                <input
                    type="text"
                    value={url}
                    onChange={handleURL}
                />
            </div>

            <webview
                src={src}
                ref={webviewElement}
            />
        </StyledPage>
    );
}


export default Page;
