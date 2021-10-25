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
        plurid,
    } from '@plurid/plurid-themes';

    import {
        PluridIconAdd,
    } from '@plurid/plurid-icons-react';
    // #endregion libraries


    // #region external
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
        StyledTopBar,
        StyledTopBarInteraction,
        StyledSpaces,
        StyledSpace,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface TopBarOwnProperties {
}

export interface TopBarStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateSpaces: StateSpaces;
    stateActiveSpace: string;
}

export interface TopBarDispatchProperties {
    dispatchAddSpace: typeof actions.data.addSpace;
    dispatchSetView: typeof actions.views.setView;
}

export type TopBarProperties =
    & TopBarOwnProperties
    & TopBarStateProperties
    & TopBarDispatchProperties;


const TopBar: React.FC<TopBarProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateSpaces,
        stateActiveSpace,
        // #endregion state

        // #region dispatch
        dispatchAddSpace,
        // dispatchAddSpacePlane,
        dispatchSetView,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region state
    const [
        mouseOver,
        setMouseOver,
    ] = useState(false);
    // #endregion state


    // #region render
    return (
        <StyledTopBar
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => {
                setTimeout(() => {
                    setMouseOver(false);
                }, 700);
            }}
            onMouseMove={() => !mouseOver ? setMouseOver(true) : undefined}
            mouseOver={mouseOver}
            theme={plurid}
        >
            <StyledTopBarInteraction>
                {mouseOver && (
                    <>
                        <StyledSpaces>
                            {Object.values(stateSpaces).map((space) => {
                                if (!space) {
                                    return;
                                }

                                const {
                                    id,
                                    title,
                                } = space;

                                return (
                                    <StyledSpace
                                        key={`space-${id}`}
                                        selected={id === stateActiveSpace}
                                        onClick={() => {
                                            dispatchSetView({
                                                type: 'activeSpace',
                                                data: id,
                                            });
                                        }}
                                    >
                                        {title || 'New Space'}
                                    </StyledSpace>
                                );
                            })}
                        </StyledSpaces>

                        <PluridIconAdd
                            atClick={() => {
                                dispatchAddSpace();
                            }}
                            title="Add Space"
                            style={{
                                marginLeft: '1rem',
                                marginRight: '1rem',
                            }}
                        />

                        {/* <div
                            style={{
                                display: 'flex',
                            }}
                        >
                            <div
                                onClick={() => {
                                    if (stateSpaces['123']) {
                                        dispatchAddSpacePlane({
                                            spaceID: stateSpaces['123'].id,
                                        });
                                    }
                                }}
                            >
                                add space plane
                            </div>
                        </div> */}
                    </>
                )}
            </StyledTopBarInteraction>
        </StyledTopBar>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): TopBarStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateSpaces: selectors.data.getSpaces(state),
    stateActiveSpace: selectors.views.getActiveSpace(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): TopBarDispatchProperties => ({
    dispatchAddSpace: () => dispatch(
        actions.data.addSpace(),
    ),
    dispatchSetView: (
        payload,
    ) => dispatch(
        actions.views.setView(payload),
    ),
});


const ConnectedTopBar = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(TopBar);
// #endregion module



// #region exports
export default ConnectedTopBar;
// #endregion exports
