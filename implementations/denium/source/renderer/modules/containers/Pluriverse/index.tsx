import React from 'react';

import PluridApp, {
    PluridPage,
} from '@plurid/plurid-react';



const SimplePage = ({path}: any) => (<webview style={{height: '500px'}} src={path} />);


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

    return (
        <PluridApp
            pages={pluridPages}
        />
    );
}


export default View;
