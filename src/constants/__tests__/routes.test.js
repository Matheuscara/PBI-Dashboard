import '@testing-library/jest-dom/extend-expect';

import routes from '../routes-path';

describe('AddIframePage component', () => {
    it('Test constants strings', () => {
        expect(routes.HOME).toStrictEqual({ NAME: 'Home', PATH: '/' });
        expect(routes.EXAMPLE_PAGE).toStrictEqual({
            NAME: 'Example Page',
            PATH: '/example'
        });
    });
});
