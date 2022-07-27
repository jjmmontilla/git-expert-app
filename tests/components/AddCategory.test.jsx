import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Prueba en <AddCategory />', () => {
    const inputValue = 'Saitama';

    test('Debe cambiar el valor del input', () => {
        render( <AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue }});
        expect(input.value).toBe(inputValue);
    });

    test('Debe de llamar onNewCategory si el input tiene valor', () => {
        const onNewCategory = jest.fn(); 

        render( <AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar al onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn(); 

        render( <AddCategory onNewCategory={onNewCategory} />);
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});