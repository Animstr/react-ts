import {screen} from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithRouter } from 'shared/lib/tests/renderWithRouter/renderWithRouter'

describe('Button UI', () => {
    test('Render in DOM', () => {
        renderWithRouter(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})