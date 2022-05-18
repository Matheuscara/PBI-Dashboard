import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Modal = (props) => {
    const {
        modalControll,
        createIframe,
        setModalControll,
        setFormValidate,
        setErrorValidate,
        iframes
    } = props;

    const MessageDisplay = (string) => {
        setFormValidate(true);
        setErrorValidate(string);
        setTimeout(() => {
            setFormValidate(false);
        }, 3000);
    };

    const validateLink = async () => {
        const link = document.getElementById('url-text').value;
        const name = document.getElementById('dash-name').value;

        if (name === '') {
            MessageDisplay('Nome inválido!');
        } else if (name.length > 20) {
            MessageDisplay('O "Nome" não pode ter mais que 20 caracteres!');
        } else if (link === '') {
            MessageDisplay('Link Invalido');
        } else if (!link.startsWith('https://app.powerbi.com')) {
            MessageDisplay('Link inválido');
        } else if (
            iframes.find(
                (iframe) => iframe.name.toLowerCase() === name.toLowerCase()
            ) &&
            iframes.length > 0
        ) {
            MessageDisplay('O Nome do Iframe ja existe.');
        } else if (
            iframes.find(
                (iframe) => iframe.iframe.toLowerCase() === link.toLowerCase()
            ) &&
            iframes.length > 0
        ) {
            MessageDisplay('O link do Iframe ja existe.');
        } else {
            setFormValidate(false);
            createIframe();
        }
    };

    return (
        <bds-modal open={modalControll} close-button="true">
            <form>
                <div className={styles.Modal}>
                    <div className={styles.right}>
                        <img
                            alt="blipinho"
                            src="https://d9hhrg4mnvzow.cloudfront.net/csc.take.net/6fc45479-blipinho-2-1.gif"
                        />
                    </div>
                    <div className={styles.left}>
                        <div>
                            <bds-typo variant="fs-20" bold="semi-bold">
                                Criar DashBoard
                            </bds-typo>
                            <div>Nome</div>
                            <div>
                                <bds-input id="dash-name"></bds-input>
                            </div>
                        </div>
                        <div>
                            <div>Link</div>
                            <div>
                                <bds-input id="url-text" />
                            </div>
                        </div>
                        <bds-modal-action>
                            <bds-button
                                style={{ paddingRight: '20px' }}
                                variant="delete"
                                onClick={() => setModalControll(false)}
                            >
                                Cancelar
                            </bds-button>
                            <bds-button onClick={validateLink}>
                                Criar
                            </bds-button>
                        </bds-modal-action>
                    </div>
                </div>
            </form>
        </bds-modal>
    );
};

Modal.propTypes = {
    modalControll: PropTypes.bool.isRequired,
    createIframe: PropTypes.func.isRequired,
    setModalControll: PropTypes.func.isRequired,
    setFormValidate: PropTypes.func.isRequired,
    setErrorValidate: PropTypes.func.isRequired,
    iframes: PropTypes.object.isRequired
};

export default Modal;
