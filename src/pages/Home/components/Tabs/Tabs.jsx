/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddLinkIcon from '@mui/icons-material/AddLink';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// Components
import ModalDelete from '../ModalDelete/ModalDelete';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function BasicTabs(props) {
    const { iframes, setIframes, modalControll, tabControll, setTabControll } =
        props;

    const [modalDelete, setModalDelete] = React.useState(false);

    const handleChange = (event, newValue) => {
        setTabControll(newValue);
    };

    const styleIconAdd = {
        position: 'absolute',
        zIndex: '100'
    };

    const styleIconDelete = {
        position: 'absolute',
        zIndex: '100',
        right: '60px'
    };

    const styleIframe = {
        height: '20%',
        backgroundColor: 'red'
    };

    const DeleteTabPanel = () => {
        const newArray = [];
        iframes.forEach((element, index) => {
            if (index !== tabControll) {
                newArray.push(element);
            }
        });
        setIframes(newArray);
    };

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <ModalDelete
                modalControll={modalDelete}
                closeModal={setModalDelete}
                DeleteTabPanel={DeleteTabPanel}
            />

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <IconButton
                    onClick={modalControll}
                    style={styleIconAdd}
                    color="primary"
                    aria-label="AddLinkIcon"
                    data-testid="createIframe"
                >
                    <AddLinkIcon fontSize="large" color="primary" />
                </IconButton>

                <IconButton
                    style={styleIconDelete}
                    size="large"
                    onClick={() => {
                        setModalDelete(true);
                    }}
                    data-testid="deleteIframe"
                    aria-label="delete"
                >
                    <DeleteIcon />
                </IconButton>

                <Tabs
                    value={tabControll}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                >
                    {iframes.map((element, index) => {
                        return (
                            <Tab
                                key={index}
                                label={element.name}
                                {...a11yProps(index)}
                            />
                        );
                    })}
                </Tabs>
            </Box>

            {iframes.map((element, index) => {
                return (
                    <TabPanel
                        string
                        key={index}
                        value={tabControll}
                        index={index}
                    >
                        <div className={styleIframe}>
                            <iframe
                                width="100%"
                                height="620px"
                                src={element.iframe}
                                frameBorder="0"
                            />
                        </div>
                    </TabPanel>
                );
            })}
        </Box>
    );
}

BasicTabs.propTypes = {
    iframes: PropTypes.array.isRequired,
    modalControll: PropTypes.func.isRequired,
    setIframes: PropTypes.func.isRequired,
    tabControll: PropTypes.number.isRequired,
    setTabControll: PropTypes.func.isRequired
};
