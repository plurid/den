// #region exports
export interface ApplicationElectron {
    remote: any;
    webFrame: any;
}


export interface ApplicationProperties {
    electron?: ApplicationElectron;
}



export interface StateSpacePlane {
    id: string;
    url: string;
}

export interface StateSpace {
    id: string;
    title: string;
    planes: StateSpacePlane[];
}
// #endregion exports
