import '@testing-library/jest-dom/extend-expect';

import toastTypes from '../blip-portal-toast-types';

describe('AddIframePage component', () => {
    it('Test constants strings', () => {
        expect(toastTypes.INFO).toBe('info');
        expect(toastTypes.SUCCESS).toBe('SUCCESS');
        expect(toastTypes.WARNING).toBe('warning');
        expect(toastTypes.DANGER).toBe('danger');
        expect(toastTypes.REFRESH).toBe('refresh');
    });
});
