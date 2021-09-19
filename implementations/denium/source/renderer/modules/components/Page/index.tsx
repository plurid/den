// #region imports
    // #region libraries
    import React, {
        useRef,
        useContext,
        useState,
        useEffect,
    } from 'react';

    // import {
    //     remote,
    // } from 'electron';
    // #endregion libraries


    // #region external
    import PluriverseContext from '../../containers/Pluriverse/context';
    // #endregion external


    // #region internal
    import {
        StyledPage,
    } from './styled';

    import PageBar from './components/PageBar';
    // #endregion internal
// #endregion imports



// #region module
export interface PageProperties {
    id: string;
}

const Page: React.FC<PageProperties> = (
    properties,
) => {
    // #region context
    const context: any = useContext(PluriverseContext);

    const {
        pages,
        updateURL,
    } = context;
    // #endregion context


    // #region references
    const webviewElement = useRef<HTMLWebViewElement>(null);
    // #endregion references


    // #region properties
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
    // #endregion properties


    // #region state
    const [
        url,
        setURL,
    ] = useState(src);
    // #endregion state


    // #region handlers
    const handleURL = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setURL(event.target.value)
    }

    const handleURLChange = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === 'Enter') {
            const urlRE = /^https?:\/\//;
            if (urlRE.test(url)) {
                updateURL(url, id);
                return;
            }

            const httpsURL = 'https://' + url;
            updateURL(httpsURL, id);
        }
    }
    // #endregion handlers


    // #region effects
    useEffect(() => {
        if (webviewElement.current) {
            webviewElement.current.addEventListener('dom-ready', async () => {
                // const webContents = remote.webContents.fromId((webviewElement as any).current.getWebContentsId())
                // console.log('webContents', webContents);

                const url = (webviewElement as any).current.getURL();
                setURL(url);
            });

            webviewElement.current.addEventListener('will-navigate', async (event) => {
                console.log('navigation', event);
            });
        }
    }, [
        webviewElement.current,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledPage>
            <PageBar
                url={url}
                handleURL={handleURL}
                handleURLChange={handleURLChange}
            />

            <webview
                src={src}
                ref={webviewElement}
            />
        </StyledPage>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Page;
// #endregion exports
