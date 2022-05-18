import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Routes from './routes';

import { withLoadingAsync, showToast } from './services/common-service';
import BlipPortalToastTypes from './constants/blip-portal-toast-types';

import sleep from './utils/sleep';

const DELAY_TIME = 600;

const App = () => {
    const { t } = useTranslation();

    useEffect(() => {
        setInitialInfoAsync();
        // eslint-disable-next-line
    }, []);

    const setInitialInfoAsync = async () => {
        await withLoadingAsync(async () => {
            await sleep(DELAY_TIME);

            showToast({
                type: BlipPortalToastTypes.SUCCESS,
                message: t('success.loaded')
            });
        });
    };

    return <Routes />;
};

export default App;
