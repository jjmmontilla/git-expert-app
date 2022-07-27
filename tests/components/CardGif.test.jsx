import { render, screen } from '@testing-library/react';
import { CardGif } from '../../src/components/CardGif';

describe('Pruebas en <CardGif />',  () => {
    const title = 'Dragon ball';
    const url = 'https://media3.giphy.com/media/VXJWhaO7afRe/giphygif&ct=g';

    test('Debe hacer match con el snatshop', () => {
        const { container } = render( <CardGif title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar la img con el url y el Alt indicado', () => {
        render( <CardGif title={title} url={url} /> );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render( <CardGif title={title} url={url} /> );
        expect(screen.getAllByText(title)).toBeTruthy();
    });
});