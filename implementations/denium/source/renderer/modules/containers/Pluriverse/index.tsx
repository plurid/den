import React from 'react';

import PluridApp, {
    PluridPage,
    PluridConfiguration,
} from '@plurid/plurid-react';



const SimplePage = ({path}: any) => (<webview style={{height: '500px', width: '1000px'}} src={path} />);


const View: React.FC<any> = () => {
    const pluridPages: PluridPage[] = [
        {
            path: '/one',
            component: {
                element: () => <SimplePage path="https://www.google.com" />,
            },
            root: true,
        },
        {
            path: '/two',
            component: {
                element: () => <SimplePage path="https://plurid.com" />,
            },
            root: true,
        },
    ];

    const pluridAppConfiguration: Partial<PluridConfiguration> = {
        theme: 'plurid',
        space: {
            layout: {
                type: 'ZIG_ZAG',
            },
        },
        planeOpacity: 0,
    };

    return (
        <PluridApp
            pages={pluridPages}
            configuration={pluridAppConfiguration}
        />
    );
}


export default View;
