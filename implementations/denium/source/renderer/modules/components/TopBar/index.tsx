// #region imports
    // #region libraries
    import React, {
        useRef,
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
        PluridIconSettings,
        PluridIconBranch,
        PluridIconApps,
    } from '@plurid/plurid-icons-react';
    // #endregion libraries


    // #region external
    import {
        StyledPluridFormbutton,
    } from '~renderer-services/styled';

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
        StyledSpacesAdd,
        StyledSpaces,
        StyledSpace,
        StyledSettingsMenu,
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
        stateGeneralTheme,
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


    // #region references
    const mouseInside = useRef(false);
    // #endregion references


    // #region state
    const [
        mouseOver,
        setMouseOver,
    ] = useState(false);

    const [
        showSettings,
        setShowSettings,
    ] = useState(false);
    // #endregion state


    // #region handlers
    const onMouseEnter = () => {
        setMouseOver(true);
        mouseInside.current = true;
    }

    const onMouseLeave = () => {
        mouseInside.current = false;

        setTimeout(() => {
            if (!mouseInside.current) {
                setMouseOver(false);
                setShowSettings(false);
            }
        }, 700);
    }

    const onMouseMove = () => {
        if (!mouseOver) {
            mouseInside.current = true;
            setMouseOver(true);
        }
    }
    // #endregion handlers


    // #region render
    return (
        <>
            <StyledTopBar
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                mouseOver={mouseOver}
                theme={plurid}
            >
                <StyledTopBarInteraction>
                    {mouseOver && (
                        <>
                            <StyledSpacesAdd>
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
                                    // title="Add Space"
                                    theme={stateGeneralTheme}
                                    style={{
                                        marginLeft: '1rem',
                                        marginRight: '1rem',
                                    }}
                                />
                            </StyledSpacesAdd>

                            <PluridIconSettings
                                // title="Settings"
                                atClick={() => {
                                    setShowSettings(show => !show);
                                }}
                                theme={stateGeneralTheme}
                                style={{
                                    marginLeft: '1rem',
                                    marginRight: '1rem',
                                }}
                            />
                        </>
                    )}
                </StyledTopBarInteraction>
            </StyledTopBar>

            {showSettings && (
                <StyledSettingsMenu
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                    theme={plurid}
                >
                    <h1>
                        settings
                    </h1>

                    <StyledPluridFormbutton
                        text="history"
                        Icon={PluridIconBranch}
                        atClick={() => {}}
                    />

                    <StyledPluridFormbutton
                        text="netmarks"
                        Icon={PluridIconApps}
                        atClick={() => {}}
                    />
                </StyledSettingsMenu>
            )}
        </>
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
