import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../model/sellectors/getProfileData/getProfileData';
import { getProfileError } from '../model/sellectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/sellectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

export interface ProfileCardProps {};

export const ProfileCard = ({}: ProfileCardProps) => {
    const {t} = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(style.ProfileCard, [])}>
            <div className={style.header}>
                <Text title={t('Profile')}/>
                <Button className={style.button} theme={ButtonTheme.OUTLINE}>{t('Change')}</Button>
            </div>
            <div className={style.data}>
                <Input 
                    value={data?.first}
                    placeholder={t('Name')}
                    className={style.input}
                />
                <Input 
                    value={data?.second}
                    placeholder={t('LastName')}
                    className={style.input}
                />
            </div>
        </div>
    );
}; 