import { renderWithRouter } from "shared/lib/tests/renderWithRouter/renderWithRouter";
import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render counter', () => {
        renderWithRouter(<Counter/>, {
            state: {counter: {value: 10}}
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    });
    test('counter increment push', async () => {
        renderWithRouter(<Counter/>, {
            state: {counter: {value: 10}}
        })
        const incrementButton = screen.getByTestId('increment')

        expect(incrementButton).toBeInTheDocument()

        userEvent.click(incrementButton);

        await waitFor(() => {
            expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        })
    });
    test('counter decrement push', async () => {
        renderWithRouter(<Counter/>, {
            state: {counter: {value: 10}}
        })
        userEvent.click(screen.getByTestId('decrement'))
        await waitFor(() => {
            expect(screen.getByTestId('value-title')).toHaveTextContent('9');
        })
    })
});