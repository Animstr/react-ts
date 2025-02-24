import type { Preview } from "@storybook/react";
import { styleDecorator } from '../../src/shared/config/storybook/decorators/styleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { routerDecorator } from "../../src/shared/config/storybook/decorators/routerDecorator";
import { translationDecorator } from "../../src/shared/config/storybook/decorators/renderWithTranslationDecorator";
import { StoreDecorator } from "shared/config/storybook/decorators/storeDecorator";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        styleDecorator(Theme.LIGHT),
        routerDecorator,
        translationDecorator,
        StoreDecorator({
            authForm:{loggin: '', password: '', isLoading: false}
        })
    ]
};

export default preview;
