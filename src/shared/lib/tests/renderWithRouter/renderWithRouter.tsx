import { render } from "@testing-library/react";
import { AppRouter } from "app/providers/router";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";


export const renderWithRouter = (component: ReactNode) => {

    return render(
        <MemoryRouter>
            <AppRouter/>
            {component}
        </MemoryRouter>
    )
}