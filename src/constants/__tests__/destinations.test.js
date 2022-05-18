import '@testing-library/jest-dom/extend-expect';

import destinations from '../blip-portal-destinations';

describe('AddIframePage component', () => {
    it('Test constants strings', () => {
        expect(destinations.MESSAGING_HUB_SERVICE).toBe('MessagingHubService');
        expect(destinations.BLIP_SERVICE).toBe('BlipService');
    });
});
