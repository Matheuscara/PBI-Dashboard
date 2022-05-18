import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('AddIframePage component', () => {
    const handleClick = jest.fn();

    beforeEach(() => {
        render(<Header title={'teste'} />);
    });

    it('Texts in the document', () => {
        expect(screen.getByText('teste')).toBeInTheDocument();
    });
});
