import React from 'react';
import PropTypes from 'prop-types';

const ModalDelete = (props) => {
    const { modalControll, closeModal, DeleteTabPanel } = props;

    return (
        <bds-alert open={modalControll}>
            <bds-alert-header variant="error" icon="error">
                Atenção!
            </bds-alert-header>
            <bds-alert-body>
                Deseja excluir o Dashboard permanentemente? <br></br>Você
                perderá todos os seus dados.
            </bds-alert-body>
            <bds-alert-actions>
                <bds-button
                    onClick={() => closeModal(false)}
                    variant="secondary"
                    bold="true"
                >
                    Voltar
                </bds-button>
                <bds-button
                    onClick={() => {
                        closeModal(false);
                        DeleteTabPanel();
                    }}
                    variant="secondary"
                    bold="true"
                >
                    Excluir DashBoard
                </bds-button>
            </bds-alert-actions>
        </bds-alert>
    );
};

ModalDelete.propTypes = {
    modalControll: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    DeleteTabPanel: PropTypes.func.isRequired
};

export default ModalDelete;
