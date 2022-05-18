import '@testing-library/jest-dom/extend-expect';
import { CommandMethod, CommandStatus, NotificationEvent } from 'lime-js';
import BlipPortalDestinations from '../blip-portal-destinations';
import IframeMessageProxyActions from '../iframe-message-proxy-actions';

import proxyContainer from '../iframe-message-proxy-container';

describe('AddIframePage component', () => {
    it('Test constants strings', () => {
        expect(proxyContainer.CommandMethods).toBe(CommandMethod);
        expect(proxyContainer.CommandStatus).toBe(CommandStatus);
        expect(proxyContainer.NotificationEvents).toBe(NotificationEvent);
        expect(proxyContainer.Destinations).toBe(BlipPortalDestinations);
        expect(proxyContainer.Actions).toBe(IframeMessageProxyActions);
    });
});
