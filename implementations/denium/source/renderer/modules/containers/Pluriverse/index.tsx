// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';

    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        PluridApplication,
        PluridReactPlane,
        PluridPartialConfiguration,
        SPACE_LAYOUT,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import Page from '~renderer-components/Page';

    import { AppState } from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    import selectors from '~renderer-services/state/selectors';
    // import actions from '~renderer-services/state/actions';

    import {
        StateSpaces,
    } from '~renderer-services/state/modules/data/types';
    // #endregion external


    // #region internal
    // import {
    //     StyledPluriverse,
    // } from './styled';

    import PluriverseContext from './context';
    // #endregion internal
// #endregion imports



// #region module
export interface PluriverseOwnProperties {
}

export interface PluriverseStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateSpaces: StateSpaces;
}

export interface PluriverseDispatchProperties {
}

export type PluriverseProperties =
    & PluriverseOwnProperties
    & PluriverseStateProperties
    & PluriverseDispatchProperties;


const Pluriverse: React.FC<PluriverseProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        stateSpaces,
        // #endregion state
    } = properties;

    const space = stateSpaces['123'];
    if (!space) {
        return (<></>);
    }
    // #endregion properties


    // #region state
    const [pages, setPages] = useState(
        space.planes.map(plane => {
            return {
                id: plane.id,
                path: plane.url,
            };
        }),
    );
    // #endregion state


    // #region handlers
    // const pathbarOnChange = (
    //     event: any,
    //     id: string,
    // ) => {
    //     updateURL(event.target.value, id);
    // }

    const updateURL = (
        value: string,
        id: string,
    ) => {
        const updatedPages = pages.map(page => {
            if (page.id === id) {
                return {
                    ...page,
                    path: value,
                };
            }
            return {...page};
        });
        setPages(updatedPages);
    }
    // #endregion handlers


    // #region properties
    const pluridPages: PluridReactPlane[] = space.planes.map(plane => {
        const {
            id,
            url,
        } = plane;

        return {
            route: url,
            component: () => (
                <Page
                    id={id}
                />
            ),
        };
    });

    const pluridAppConfiguration: PluridPartialConfiguration = {
        global: {
            theme: stateGeneralTheme.name as any,
        },
        space: {
            layout: {
                type: SPACE_LAYOUT.ZIG_ZAG,
            },
        },
        elements: {
            plane: {
                opacity: 0,
                controls: {
                    show: false,
                }
            }
        }
    };

    const view = space.planes.map(plane => plane.url);

    const pageContext = {
        pages,
        updateURL,
    };
    // #endregion properties


    // #region render
    return (
        <PluridApplication
            planes={pluridPages}
            view={view}
            configuration={pluridAppConfiguration}
            planeContext={PluriverseContext}
            planeContextValue={pageContext}
        />
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): PluriverseStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateSpaces: selectors.data.getSpaces(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): PluriverseDispatchProperties => ({
});


const ConnectedPluriverse = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Pluriverse);
// #endregion module



// #region exports
export default ConnectedPluriverse;
// #endregion exports
