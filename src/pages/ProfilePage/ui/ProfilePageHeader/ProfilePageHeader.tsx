import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, saveData } from 'entity/Profile';
import { useCallback } from 'react';
import { getUserAuthData } from 'entity/User';


export const ProfilePageHeader = () => {
    const{t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const userData = useSelector(getUserAuthData);
    const profile = useSelector(getProfileData);
    const canChange = userData?.id == profile?.id;
    
    const onClose = useCallback(() => {
        dispatch(profileActions.discardChanges())
    },[dispatch])

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    },[dispatch])

    const onSave = useCallback(() => {
        dispatch(saveData())
    }, [dispatch])

    return (
        <div className={classNames(style.ProfilePageHeader, [])}>
            <Text title={t('Profile')}/>
            {
                canChange && (
                    <div>
                        { readonly ? ( 
                            <Button 
                                className={style.button} 
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}>
                                {t('Change')}
                            </Button>) : 
                            (
                                <div>
                                    <Button 
                                        className={style.button} 
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onClose}>
                                        {t('Cancel')}
                                    </Button>
                                    <Button 
                                        className={style.button} 
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}>
                                        {t('SaveChanges')}
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};