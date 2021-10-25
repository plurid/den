// #region imports
    // #region libraries
    import React from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';

    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        PluridIconAdd,
    } from '@plurid/plurid-icons-react';

    import {
        ToolbarButton,
    } from '@plurid/plurid-ui-components-react';
    // #endregion libraries


    // #region external
    import {
        PluridToolbarSpecific,
    } from '~renderer-services/styled';

    import { AppState } from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    import selectors from '~renderer-services/state/selectors';
    import actions from '~renderer-services/state/actions';
    // #endregion external
// #endregion imports



// #region module
const buttons: ToolbarButton[] = [
    {
        type: 'add',
        text: 'add webplane',
        icon: PluridIconAdd,
        first: true,
        last: true,
    },
];


export interface RightToolbarOwnProperties {
}

export interface RightToolbarStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateActiveSpace: string;
}

export interface RightToolbarDispatchProperties {
    dispatchAddSpacePlane: typeof actions.data.addSpacePlane;
}

export type RightToolbarProperties =
    & RightToolbarOwnProperties
    & RightToolbarStateProperties
    & RightToolbarDispatchProperties;


const RightToolbar: React.FC<RightToolbarProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        // stateGeneralTheme,
        // stateInteractionTheme,
        stateActiveSpace,
        // #endregion state

        // #region dispatch
        dispatchAddSpacePlane,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region handlers
    const handleClick = (
        type: string,
    ) => {
        switch (type) {
            case 'add':
                dispatchAddSpacePlane({
                    spaceID: stateActiveSpace,
                });
                break;
        }
    }
    // #endregion handlers


    // #region render
    return (
        <PluridToolbarSpecific
            buttons={buttons}
            handleClick={handleClick}
            activeType={''}
            selectors={selectors}
            context={StateContext}
        />
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): RightToolbarStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateActiveSpace: selectors.views.getActiveSpace(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): RightToolbarDispatchProperties => ({
    dispatchAddSpacePlane: (
        payload,
    ) => dispatch(
        actions.data.addSpacePlane(payload),
    ),
});


const ConnectedRightToolbar = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(RightToolbar);
// #endregion module



// #region exports
export default ConnectedRightToolbar;
// #endregion exports
