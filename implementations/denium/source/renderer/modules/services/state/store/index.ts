// #region imports
    // #region internal
    import storeProduction, {
        AppState as AppStateProduction,
    } from './production';
    import storeDevelopment, {
        AppState as AppStateDeveloment,
    } from './development';
    // #endregion internal
// #endregion imports



// #region module
const environment = {
    production: process.env.NODE_ENV === 'production',
};

export type AppState =
    | AppStateProduction
    | AppStateDeveloment;

const store = environment.production
    ? storeProduction
    : storeDevelopment;
// #endregion module



// #region exports
export default store;
// #endregion exports
