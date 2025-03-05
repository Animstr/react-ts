import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { getProfile, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer, ValidateProfileErrors } from 'entity/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entity/Profile/ui/ProfileCard';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { Text, TextThemes } from 'shared/ui/Text/Text';


const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = () => {
    const{t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const form = useSelector(getProfileForm);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslate = {
        [ValidateProfileErrors.INCORECT_USER_DATA]: t('Incorrect Name or Lastname'),
        [ValidateProfileErrors.INCORECT_USER_AGE]: t('Incorrect Age'),
        [ValidateProfileErrors.INCORECT_USER_CITY]: t('Incorrect City'),
        [ValidateProfileErrors.NO_DATA]: t('No data'),
        [ValidateProfileErrors.SERVER_ERROR]: t('Server error')
    }

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(getProfile())
        }
    }, [dispatch])

    const onEditFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({first: value}))
    }, [dispatch])

    const onEditLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({second: value}))
    }, [dispatch])

    const onEditAge = useCallback((value: string) => {
        if (/^\d+$/.test(value)) {
            dispatch(profileActions.updateProfile({age: Number(value || 0)}))
        }
    }, [dispatch])

    const onEditCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({city: value || undefined}))
    }, [dispatch])

    const onEditAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({avatar: value || undefined}))
    }, [dispatch])

    const onEditUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({username: value || undefined}))
    }, [dispatch])

    const onEditCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({currency: value || undefined}))
    }, [dispatch])

    const onEditCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({country: value || undefined}))
    }, [dispatch])
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', [])}>
                <ProfilePageHeader/>
                {validateErrors?.length && validateErrors.map((error : ValidateProfileErrors) => (
                    <Text theme={TextThemes.ERROR} text={validateErrorsTranslate[error]} key={error}/>
                ))}
                <ProfileCard 
                    form={form}
                    error={error}
                    isLoading={isLoading}
                    readonly={readonly}
                    editFirstname={onEditFirstname}
                    editLastname={onEditLastname}
                    editAge={onEditAge}
                    editCity={onEditCity}
                    editAvatar={onEditAvatar}
                    editUsername={onEditUsername}
                    editCurrency={onEditCurrency}
                    editCountry={onEditCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};
//

export default ProfilePage