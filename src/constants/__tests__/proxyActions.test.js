import '@testing-library/jest-dom/extend-expect';

import proxyActions from '../iframe-message-proxy-actions';

describe('AddIframePage component', () => {
    it('Test constants strings', () => {
        expect(proxyActions.SEND_COMMAND).toBe('sendCommand');
        expect(proxyActions.START_LOADING).toBe('startLoading');
        expect(proxyActions.STOP_LOADING).toBe('stopLoading');
        expect(proxyActions.HEIGHT_CHANGE).toBe('heightChange');
        expect(proxyActions.SHOW_MODAL).toBe('showModal');
        expect(proxyActions.HIDE_NAVBAR).toBe('hideNavbar');
        expect(proxyActions.SHOW_NAVBAR).toBe('showNavbar');
        expect(proxyActions.GET_CURRENT_LANGUAGE).toBe('getCurrentLanguage');
        expect(proxyActions.TOAST).toBe('toast');
        expect(proxyActions.GET_APPLICATION).toBe('getApplication');
        expect(proxyActions.HAS_PERMISSIONS).toBe('hasPermissions');
        expect(proxyActions.GET_PERMISSIONS_OBJECT).toBe(
            'getPermissionsObject'
        );
        expect(proxyActions.GET_USER_CONTEXT).toBe('getUserContext');
    });
});
