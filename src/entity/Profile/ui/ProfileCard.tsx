import { classNames, Mods } from 'shared/lib/classNames/classNames'
import * as style from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextThemes } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from "entity/Currency";
import { Country, CountrySelect } from 'entity/Country';

export interface ProfileCardProps {
    form?: Profile,
    error?: string,
    isLoading: boolean | undefined,
    readonly: boolean | undefined,
    editLastname?: (value: string) => void,
    editFirstname?: (value: string) => void,
    editAge?: (value: string) => void,
    editCity?: (value: string) => void,
    editAvatar?: (value: string) => void,
    editUsername?: (value: string) => void,
    editCurrency?: (value: Currency) => void,
    editCountry?: (value: Country) => void
};

export const ProfileCard = (props: ProfileCardProps) => {
    const {t} = useTranslation('profile');
    const {
        form, 
        error, 
        isLoading, 
        editFirstname, 
        editLastname, 
        readonly,
        editAge,
        editCity,
        editAvatar,
        editUsername,
        editCountry,
        editCurrency
    } = props

    const mods: Mods = {
        [style.editing]: !readonly
    }

    if (isLoading) {
        return (
            <div className={classNames(style.ProfileCard, [])}>
                <Loader/>
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(style.ProfileCard, [])}>
                <Text title={t('reloadPage')} theme={TextThemes.ERROR} align={TextAlign.CENTER}/>
            </div>
        )
    }

    return (
        <div className={classNames(style.ProfileCard, [], mods)}>
            <div className={style.avatar_wrapper}>
                <Avatar 
                    src={form?.avatar}
                    alt='ghbdtn'
                    size={100}
                />
            </div>
            <Input 
                value={form?.first}
                placeholder={t('Name')}
                className={style.input}
                onChange={editFirstname}
                readonly={readonly}
            />
            <Input 
                value={form?.second}
                placeholder={t('LastName')}
                className={style.input}
                onChange={editLastname}
                readonly={readonly}
            />
            <Input 
                value={form?.age}
                placeholder={t('Age')}
                className={style.input}
                onChange={editAge}
                readonly={readonly}
            />
            <Input 
                value={form?.city}
                placeholder={t('City')}
                className={style.input}
                onChange={editCity}
                readonly={readonly}
            />
            <Input 
                value={form?.username}
                placeholder={t('Username')}
                className={style.input}
                onChange={editUsername}
                readonly={readonly}
            />
            <Input 
                value={form?.avatar}
                placeholder={t('AvatarLink')}
                className={style.input}
                onChange={editAvatar}
                readonly={readonly}
            />
            <CurrencySelect 
                className={style.input}
                value={form?.currency}
                onChange={editCurrency}
                readonly={readonly}
            />
            <CountrySelect 
                className={style.input}
                value={form?.country}
                onChange={editCountry}
                readonly={readonly}
            />
                
        </div>
    );
}; 