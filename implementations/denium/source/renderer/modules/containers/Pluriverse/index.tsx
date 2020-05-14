import React, {
    useState,
} from 'react';

import PluridApp, {
    PluridPlane,
    PluridPartialConfiguration,
    SPACE_LAYOUT,
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

    // const pathbarOnChange = (
    //     event: any,
    //     id: string,
    // ) => {
    //     updateURL(event.target.value, id);
    // }

    const updateURL = (
        value: string,
        id: string,
    ) => {
        const updatedPages = pages.map(page => {
            if (page.id === id) {
                return {
                    ...page,
                    path: value,
                };
            }
            return {...page};
        });
        setPages(updatedPages);
    }

    const pluridPages: PluridPlane[] = [
        {
            path: 'https://www.google.com',
            component: {
                kind: 'react',
                element: () => <Page id="one" />,
            },
        },
        {
            path: 'https://plurid.com',
            component: {
                kind: 'react',
                element: () => <Page id="two" />,
            },
        },
    ];

    const pluridAppConfiguration: PluridPartialConfiguration = {
        theme: 'plurid',
        space: {
            layout: {
                type: SPACE_LAYOUT.ZIG_ZAG,
            },
        },
        elements: {
            plane: {
                opacity: 0,
                controls: {
                    show: false,
                }
            }
        }
    };

    const view = [
        'https://www.google.com',
        'https://plurid.com',
    ];

    const pageContext = {
        pages,
        updateURL,
    };

    return (
        <PluridApp
            planes={pluridPages}
            view={view}
            configuration={pluridAppConfiguration}
            planeContext={PluriverseContext}
            planeContextValue={pageContext}
        />
    );
}


export default Pluriverse;
