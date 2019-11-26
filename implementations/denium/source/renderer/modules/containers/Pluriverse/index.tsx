import React, {
    useState,
} from 'react';

import PluridApp, {
    PluridPage,
    PluridConfiguration,
} from '@plurid/plurid-react';

import Page from '../../components/Page';

import PluriverseContext from './context';



const Pluriverse: React.FC<any> = () => {
    const [pages, setPages] = useState([
        {
            id: 'one',
            path: 'https://google.com',
        },
        {
            id: 'two',
            path: 'https://plurid.com',
        },
    ]);

    const pathbarOnChange = (event: any, id: string) => {
        // console.log(event, id);
        const updatedPages = pages.map(page => {
            if (page.id === id) {
                return {
                    ...page,
                    path: event.target.value,
                };
            }
            return {...page};
        });
        setPages(updatedPages);
    }

    const pluridPages: PluridPage[] = [
        {
            id: 'one',
            path: 'https://www.google.com',
            component: {
                element: () => <Page id="one" />,
            },
            root: true,
        },
        {
            id: 'two',
            path: 'https://plurid.com',
            component: {
                element: () => <Page id="two" />,
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
        pathbarOnChange,
    };

    const pageContext = {
        pages,
    };

    return (
        <PluridApp
            pages={pluridPages}
            configuration={pluridAppConfiguration}
            pageContext={PluriverseContext}
            pageContextValue={pageContext}
        />
    );
}


export default Pluriverse;
