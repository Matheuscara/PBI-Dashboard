import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import BasicTabs from '../Tabs';

describe('AddIframePage component', () => {
    const handleClick = jest.fn();

    beforeEach(() => {
        render(
            <BasicTabs
                iframes={[
                    {
                        index: '3',
                        name: 'teste',
                        iframe: 'https://app.powerbi.com/reportEmbed?reportId=755fcaa0-a0c0-4f54-8665-fe7f5d926614&autoAuth=true&ctid=762e087d-ffac-4986-a488-df1fb16dc3d3&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D'
                    },
                    {
                        index: '3',
                        name: 'teste2',
                        iframe: 'https://app.powerbi.com/reportEmbed?reportId=755fcaa0-a0c0-4f54-8665-fe7f5d926614&autoAuth=true&ctid=762e087d-ffac-4986-a488-df1fb16dc3d3&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D'
                    }
                ]}
                modalControll={() => false}
                setIframes={() => true}
                tabControll={0}
                setTabControll={() => true}
            />
        );
    });

    it('Texts in the document', () => {
        expect(screen.getByText('teste')).toBeInTheDocument();
    });

    it('should handle click event', () => {
        const backButtonNode = screen.getByTestId('createIframe');
        fireEvent.click(backButtonNode);
        expect(handleClick).toHaveBeenCalledTimes(0);
    });

    it('should handle click event', () => {
        const backButtonNode = screen.getByTestId('deleteIframe');
        fireEvent.click(backButtonNode);
        expect(handleClick).toHaveBeenCalledTimes(0);
    });
});
