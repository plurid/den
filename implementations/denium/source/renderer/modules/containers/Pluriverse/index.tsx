import React from 'react';

import PluridApp, {
    PluridPage,
    PluridConfiguration,
} from '@plurid/plurid-react';

import Page from '../../components/Page';



const Pluriverse: React.FC<any> = () => {
    const pathChange = (value: string) => {
        console.log(value);
    }

    const pluridPages: PluridPage[] = [
        {
            path: 'https://www.google.com',
            component: {
                element: () => <Page src="https://www.google.com" />,
            },
            root: true,
        },
        {
            path: 'https://plurid.com',
            component: {
                element: () => <Page src="https://plurid.com" />,
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
        pathChange,
    };

    return (
        <PluridApp
            pages={pluridPages}
            configuration={pluridAppConfiguration}
        />
    );
}


export default Pluriverse;
