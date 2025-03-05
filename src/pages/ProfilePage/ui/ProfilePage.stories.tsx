import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { styleDecorator } from 'shared/config/storybook/decorators/styleDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  
};
export const Dark: Story = {
};

Light.decorators = [StoreDecorator({
    profile: {
        isLoading: false,
        readonly: true,
        data: {
            first: "Daniil",
            second: "Shuliyatev",
            age: 21,
            currency: Currency.EUR,
            country: Country.RUSSIA,
            username: "admin",
            avatar: "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13",
            city: "Владимир"
        },
        form: {
            first: "Daniil",
            second: "Shuliyatev",
            age: 21,
            currency: Currency.EUR,
            country: Country.RUSSIA,
            username: "admin",
            avatar: "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13",
            city: "Владимир"
        },
    }
})]

Dark.decorators = [styleDecorator(Theme.DARK), StoreDecorator({
    profile: {
        isLoading: false,
        readonly: true,
        data: {
            first: "Daniil",
            second: "Shuliyatev",
            age: 21,
            currency: Currency.EUR,
            country: Country.RUSSIA,
            username: "admin",
            avatar: "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13",
            city: "Владимир"
        },
        form: {
            first: "Daniil",
            second: "Shuliyatev",
            age: 21,
            currency: Currency.EUR,
            country: Country.RUSSIA,
            username: "admin",
            avatar: "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13",
            city: "Владимир"
        },
    }
})]