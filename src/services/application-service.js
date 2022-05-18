import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const PORTAL_NODE = 'postmaster@portal.blip.ai';
const CONFIGURATION_URI = `lime://${PORTAL_NODE}/configuration`;
const CONTACTS_URI = '/contacts';
const THREADS_URI = '/threads';
const JSON_TYPE = 'application/json';

const getApplicationDataAsync = async (fullIdentity = null) => {
    const { response: application } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.GET_APPLICATION,
        content: fullIdentity
    });
    return application;
};

const getConfigurationDataAsync = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SEND_COMMAND,
        content: {
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: CONFIGURATION_URI
            }
        }
    });

    return response;
};

const setConfigurationDataAsync = async (payload) => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SEND_COMMAND,
        content: {
            command: {
                method: IMPContainer.CommandMethods.SET,
                uri: CONFIGURATION_URI,
                type: JSON_TYPE,
                resource: payload
            }
        }
    });

    return response;
};

const getCurrentLanguageAsync = async () => {
    const { response } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.GET_CURRENT_LANGUAGE
    });

    return response;
};

const getContactsAsync = async () => {
    const {
        response: { items }
    } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SEND_COMMAND,
        content: {
            destination: IMPContainer.Destinations.MESSAGING_HUB_SERVICE,
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: CONTACTS_URI
            }
        }
    });

    return items;
};

const getThreadsAsync = async () => {
    const {
        response: { items }
    } = await IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SEND_COMMAND,
        content: {
            destination: IMPContainer.Destinations.MESSAGING_HUB_SERVICE,
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: THREADS_URI
            }
        }
    });

    return items;
};

const getTemplate = async () => {
    const template = [];

    try {
        const {
            response: { template_list }
        } = await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                command: {
                    to: 'postmaster@msging.net',
                    method: 'get',
                    uri: '/buckets/dashboard:dash_list'
                }
            }
        });

        return template_list;
    } catch (err) {
        await setTemplates({ template_list: [] });
    }

    return template;
};

const setTemplates = async (templates) => {
    const response = await IframeMessageProxy.sendMessage({
        action: 'sendCommand',
        content: {
            command: {
                to: 'postmaster@msging.net',
                method: 'set',
                type: JSON_TYPE,
                uri: '/buckets/dashboard:dash_list',
                resource: templates
            }
        }
    });

    return response;
};

export {
    getApplicationDataAsync,
    getConfigurationDataAsync,
    setConfigurationDataAsync,
    getCurrentLanguageAsync,
    getContactsAsync,
    getThreadsAsync,
    getTemplate,
    setTemplates
};
