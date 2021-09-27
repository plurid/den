// #region imports
    // #region libraries
    import React, {
        useRef,
        useState,
        useEffect,
    } from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';

    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        PluridPlaneComponentProperty,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import { AppState } from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    import selectors from '~renderer-services/state/selectors';
    // import actions from '~renderer-services/state/actions';

    import {
        StateSpaces,
    } from '~renderer-services/state/modules/data/types';
    // #endregion external


    // #region internal
    import {
        StyledPage,
        StyledNoWebview,
    } from './styled';

    import PageBar from './components/PageBar';
    // #endregion internal
// #endregion imports



// #region module
export interface PageOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface PageStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateSpaces: StateSpaces;
}

export interface PageDispatchProperties {
}

export type PageProperties =
    & PageOwnProperties
    & PageStateProperties
    & PageDispatchProperties;


const Page: React.FC<PageProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            plurid,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion required

        // #region state
        stateGeneralTheme,
        stateSpaces,
        // #endregion state
    } = properties;

    const spaceID = plurid.plane.parameters.spaceID;
    const id = plurid.plane.parameters.planeID;

    const space = stateSpaces[spaceID];
    if (!space) {
        return (
            <div>
                space not found
            </div>
        );
    }

    const plane = space.planes.find(plane => plane.id === id);
    if (!plane) {
        return (
            <div>
                <h4>
                    plane not found
                </h4>
            </div>
        );
    }

    const src = plane.url;
    // #endregion properties


    // #region references
    const webviewElement = useRef<HTMLWebViewElement>(null);
    // #endregion references


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
        setURL(event.target.value);
    }

    const handleURLChange = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === 'Enter') {
            const urlRE = /^https?:\/\//;
            if (urlRE.test(url)) {
                // updateURL(url, id);
                return;
            }

            const httpsURL = 'https://' + url;
            // updateURL(httpsURL, id);
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
        <StyledPage
            theme={stateGeneralTheme}
        >
            <PageBar
                url={url}
                handleURL={handleURL}
                handleURLChange={handleURLChange}
            />


            {!src && (
                <StyledNoWebview>
                    search the network
                </StyledNoWebview>
            )}

            {src && (
                <webview
                    src={src}
                    ref={webviewElement}
                />
            )}
        </StyledPage>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): PageStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateSpaces: selectors.data.getSpaces(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): PageDispatchProperties => ({
});


const ConnectedPage = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Page);
// #endregion module



// #region exports
export default ConnectedPage;
// #endregion exports
