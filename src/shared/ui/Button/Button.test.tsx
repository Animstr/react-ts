import {render, screen} from '@testing-library/react'
import { Button } from "./Button";

describe('Button UI', () => {
    test('Render in DOM', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})