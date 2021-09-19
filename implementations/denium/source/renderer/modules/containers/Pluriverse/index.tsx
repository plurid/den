import React, {
    useState,
} from 'react';

import {
    PluridApplication,
    PluridReactPlane,
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

    const pluridPages: PluridReactPlane[] = [
        {
            route: 'https://www.google.com',
            component: () => (
                <Page id="one" />
            ),
        },
        {
            route: 'https://plurid.com',
            component: () => (
                <Page id="two" />
            ),
        },
    ];

    const pluridAppConfiguration: PluridPartialConfiguration = {
        global: {
            theme: 'plurid',
        },
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
        <PluridApplication
            planes={pluridPages}
            view={view}
            configuration={pluridAppConfiguration}
            planeContext={PluriverseContext}
            planeContextValue={pageContext}
        />
    );
}


export default Pluriverse;
