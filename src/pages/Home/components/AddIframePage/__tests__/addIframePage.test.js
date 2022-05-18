import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import AddIframe from '../AddIframePage';

describe('AddIframePage component', () => {
    const handleClick = jest.fn();

    beforeEach(() => {
        render(<AddIframe setModalControll={() => true} />);
    });

    it('Test title', () => {
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
