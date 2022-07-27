import {render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('', () => {
    const category = 'The big bang theory'
    const gifs = [
        {
            id: '1232',
            title: 'test',
            url: 'https://localhost/test.jpg'
        },
        {
            id: 'asd',
            title: 'goku',
            url: 'https://localhost/goku.jpg'
        }
    ];

    test('Debe mostrar el loading', () => {   
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });

        render( <GifGrid category={ category} /> );
        expect( screen.getByText('Cargando..'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las images useFetchGifs', () => {
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category} /> );
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});