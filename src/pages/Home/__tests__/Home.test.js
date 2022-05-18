import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import Home from '../Home';

describe('AddIframePage component', () => {
    const handleClick = jest.fn();

    beforeEach(() => {
        render(<Home />);
    });

    it('Test Nothing Iframe ', () => {
        expect(
            screen.getByText('Você ainda não tem nenhum dashboard :(')
        ).toBeInTheDocument();
    });

    it('should handle click event', () => {
        const backButtonNode = screen.getByText('Criar Dashboard');
        fireEvent.click(backButtonNode);
        expect(handleClick).toHaveBeenCalledTimes(0);
    });
});
