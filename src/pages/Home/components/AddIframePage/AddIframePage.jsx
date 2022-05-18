import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import empty from '../../../../assets/images/png/Empty.png';

const AddIframe = (props) => {
    const { setModalControll } = props;

    return (
        <div className={styles.AddIframe}>
            <img width="30%" alt="addIframeImage" src={empty} />
            <h1 className={styles.title} testid="addIframeTitle">
                Você ainda não tem nenhum dashboard :(
            </h1>
            <bds-button
                className="buttonAddIframe"
                onClick={setModalControll}
                icon="file-new"
            >
                Criar Dashboard
            </bds-button>
        </div>
    );
};

AddIframe.propTypes = {
    setModalControll: PropTypes.func.isRequired
};

export default AddIframe;
