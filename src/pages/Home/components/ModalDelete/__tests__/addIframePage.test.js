import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import ModalDelete from '../ModalDelete';

describe('AddIframePage component', () => {
    const handleClick = jest.fn();

    beforeEach(() => {
        render(
            <ModalDelete
                modalControll={true}
                closeModal={() => false}
                DeleteTabPanel={() => true}
            />
        );
    });

    it('Texts in the document', () => {
        expect(screen.getByText('Atenção!')).toBeInTheDocument();
        expect(
            screen.getByText(
                'Deseja excluir o Dashboard permanentemente? Você perderá todos os seus dados.'
            )
        ).toBeInTheDocument();
        expect(screen.getByText('Voltar')).toBeInTheDocument();
        expect(screen.getByText('Excluir DashBoard')).toBeInTheDocument();
    });

    it('should handle click event', () => {
        const backButtonNode = screen.getByText('Excluir DashBoard');
        fireEvent.click(backButtonNode);
        expect(handleClick).toHaveBeenCalledTimes(0);
    });

    it('should handle click event', () => {
        const backButtonNode = screen.getByText('Voltar');
        fireEvent.click(backButtonNode);
        expect(handleClick).toHaveBeenCalledTimes(0);
    });
});
