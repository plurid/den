// #region imports
    // #region libraries
    import React, {
        useEffect,
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
        // SPACE_LAYOUT,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import Page from '~renderer-components/Page';
    import RightToolbar from '~renderer-components/RightToolbar';

    import { AppState } from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    import selectors from '~renderer-services/state/selectors';
    import actions from '~renderer-services/state/actions';

    import {
        StateSpaces,
    } from '~renderer-services/state/modules/data/types';
    // #endregion external


    // #region internal
    import {
        StyledPluriverse,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface PluriverseOwnProperties {
}

export interface PluriverseStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateSpaces: StateSpaces;
    stateActiveSpace: string;
}

export interface PluriverseDispatchProperties {
    dispatchAddSpace: typeof actions.data.addSpace;
    dispatchAddSpacePlane: typeof actions.data.addSpacePlane;
    dispatchSetView: typeof actions.views.setView;
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
        stateActiveSpace,
        // #endregion state

        // #region dispatch
        dispatchAddSpace,
        dispatchAddSpacePlane,
        dispatchSetView,
        // #endregion dispatch
    } = properties;

    const space = stateSpaces[stateActiveSpace];
    // #endregion properties


    // #region handlers
    // const pathbarOnChange = (
    //     event: any,
    //     id: string,
    // ) => {
    //     updateURL(event.target.value, id);
    // }

    // const updateURL = (
    //     value: string,
    //     id: string,
    // ) => {
    //     const updatedPages = pages.map(page => {
    //         if (page.id === id) {
    //             return {
    //                 ...page,
    //                 path: value,
    //             };
    //         }
    //         return {...page};
    //     });
    //     setPages(updatedPages);
    // }
    // #endregion handlers


    // #region properties
    const pluridPages: PluridReactPlane[] = [
        {
            route: `/web/:spaceID/:planeID`,
            component: Page,
        },
    ];

    const pluridAppConfiguration: PluridPartialConfiguration = {
        global: {
            theme: stateGeneralTheme.name as any,
        },
        // space: {
        //     layout: {
        //         type: SPACE_LAYOUT.ZIG_ZAG,
        //     },
        // },
        elements: {
            plane: {
                opacity: 0,
                controls: {
                    show: false,
                },
            },
        },
    };

    const view = space?.planes.map(plane => {
        return `/web/${space.id}/${plane.id}`;
    }) || [];
    // #endregion properties


    // #region effects
    useEffect(() => {
        if (!space) {
            if (Object.keys(stateSpaces).length === 0) {
                dispatchAddSpace();
                return;
            }

            const space = Object.values(stateSpaces)[0];
            if (!space) {
                return;
            }

            dispatchSetView({
                type: 'activeSpace',
                data: space.id,
            });
            dispatchAddSpacePlane({
                spaceID: space.id,
            });
        }
    }, [
        space,
        stateSpaces,
    ]);
    // #endregion effects


    // #region render
    if (!space) {
        return (
            <></>
        );
    }

    return (
        <StyledPluriverse>
            <PluridApplication
                planes={pluridPages}
                view={view}
                configuration={pluridAppConfiguration}
            />

            <RightToolbar />
        </StyledPluriverse>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): PluriverseStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateSpaces: selectors.data.getSpaces(state),
    stateActiveSpace: selectors.views.getActiveSpace(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): PluriverseDispatchProperties => ({
    dispatchAddSpace: () => dispatch(
        actions.data.addSpace(),
    ),
    dispatchAddSpacePlane: (
        payload,
    ) => dispatch(
        actions.data.addSpacePlane(payload),
    ),
    dispatchSetView: (
        payload,
    ) => dispatch(
        actions.views.setView(payload),
    ),
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
