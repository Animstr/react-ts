import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './AuthForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { authActions } from '../../model/slice/AuthSlice';
import { getAuthForm } from '../../model/selectors/getAuthFormState/getAuthFormState';
import { authByUsername } from '../../model/services/Auth/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextThemes } from 'shared/ui/Text/Text';

export interface AuthFormProps {
    className?:string
};

export const AuthForm = memo(({className}: AuthFormProps) => {
    const{t} = useTranslation();
    const dispatch = useDispatch();
    const {loggin, password, isLoading, error} = useSelector(getAuthForm)

    const onChangeLoggin = useCallback((value: string) => {
        dispatch(authActions.setLoggin(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authActions.setPassword(value))
    }, [dispatch])

    const onLogginClick = useCallback(() => {
        dispatch(authByUsername({loggin, password}))
    }, [dispatch, loggin, password])

    return (
        <div className={classNames(style.AuthForm, [className])}>
            <Text title={t('Login form')}/>
            {error && 
                <Text text={t('Wrong login or password')} theme={TextThemes.ERROR} />
            }
            <Input 
                placeholder={t('Loggin')} 
                onChange={onChangeLoggin}
                type='text'
                autoFocus={true}
                value={loggin}
            />
            <Input 
                placeholder={t('Enter password')} 
                onChange={onChangePassword}
                type='text'
                value={password}
            />
            <Button 
                onClick={onLogginClick}
                className={style.loginBtn}
                disabled={isLoading}>
                {t('Enter')}
            </Button>
        </div>
    );
});