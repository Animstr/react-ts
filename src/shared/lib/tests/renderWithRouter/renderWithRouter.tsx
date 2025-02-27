import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18n from "shared/config/i18n/i18nForTests";

interface RenderWithRouterOptions {
    route?: string,
    state?: Partial<StateSchema>
}

export const renderWithRouter = (component: ReactNode, options: RenderWithRouterOptions = {}) => {
    const {
        route = '/',
        state
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={state}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>   
            </StoreProvider>
        </MemoryRouter>
    )
}