import '@testing-library/jest-dom/extend-expect';

import tracking from '../tracking-events';

describe('AddIframePage component', () => {
    it('Test constants strings', () => {
        expect(tracking.EVENT_EXAMPLE).toBe('TRACKING_ACTION_EXAMPLE');
    });
});
