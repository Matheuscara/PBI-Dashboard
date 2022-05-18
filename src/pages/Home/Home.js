import React, { useEffect, useState } from 'react';
import { withLoadingAsync } from '../../services/common-service';
import { getTemplate, setTemplates } from '../../services/application-service';

// Components
import TabPanel from './components/Tabs/Tabs';
import Modal from './components/Modal/modal';
import AddIframe from './components/AddIframePage/AddIframePage';

const Home = () => {
    const [nb, setNb] = useState([]);
    const [modalControll, setModalControll] = useState(false);
    const [tabControll, setTabControll] = useState(0);
    const [formValidate, setFormValidate] = useState(false);
    const [errorValidate, setErrorValidate] = useState('');

    const fetchApi = async () => {
        setNb(await getTemplate());
    };

    useEffect(() => {
        withLoadingAsync(async () => {
            await fetchApi();
        });
    }, []);

    useEffect(() => {
        setDash();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nb]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setDash = async () => {
        await setTemplates({ template_list: [...nb] });
    };

    const click = async () => {
        // Get values do Iframe
        const name = document.getElementById('dash-name').value;
        const url = document.getElementById('url-text').value;

        // Se t Iframe
        setNb([
            ...nb,
            {
                index: '3',
                name,
                iframe: url
            }
        ]);

        // Reset inputs value
        document.getElementById('dash-name').value = '';
        document.getElementById('url-text').value = '';

        // Close modal
        setModalControll(false);
    };

    return (
        <div id="home" className="ph1 ph4-m ph5-ns">
            {nb.length !== 0 ? (
                <TabPanel
                    iframes={nb}
                    setIframes={setNb}
                    modalControll={setModalControll}
                    tabControll={tabControll}
                    setTabControll={setTabControll}
                />
            ) : (
                <AddIframe setModalControll={setModalControll} />
            )}
            <Modal
                modalControll={modalControll}
                setModalControll={setModalControll}
                createIframe={click}
                setFormValidate={setFormValidate}
                formValidate={formValidate}
                setErrorValidate={setErrorValidate}
                iframes={nb}
            />
            <bds-toast
                style={{
                    zIndex: '80001',
                    position: 'absolute',
                    bottom: '26px'
                }}
                button-action="close"
                icon="info"
                action-type="icon"
                toast-title="Valores incorretos"
                toast-text={errorValidate}
                variant="warning"
                duration="3"
                show={formValidate}
            ></bds-toast>
        </div>
    );
};

export default Home;
