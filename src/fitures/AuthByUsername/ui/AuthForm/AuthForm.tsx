import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './AuthForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { authActions, authReducer } from '../../model/slice/AuthSlice';
import { authByUsername } from '../../model/services/Auth/AuthByUsername';
import { useSelector } from 'react-redux';
import { Text, TextThemes } from 'shared/ui/Text/Text';
import { getAuthFormLoggin } from '../../model/selectors/getAuthFormLoggin/getAuthFormLoggin';
import { getAuthFormPassword } from '../../model/selectors/getAuthFormPassword/getAuthFormPassword';
import { getAuthFormLoading } from '../../model/selectors/getAuthFormLoading/getAuthFormLoading';
import { getAuthFormError } from '../../model/selectors/getAuthFormError/getAuthFormError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface AuthFormProps {
    className?:string,
    onSucess?: () => void,
};

const initialReducers: ReducersList = {
    authForm: authReducer
}

const AuthForm = memo(({className, onSucess}: AuthFormProps) => {
    const{t} = useTranslation();
    const dispatch = useAppDispatch();
    const loggin = useSelector(getAuthFormLoggin);
    const password = useSelector(getAuthFormPassword);
    const isLoading = useSelector(getAuthFormLoading);
    const error = useSelector(getAuthFormError)

    const onChangeLoggin = useCallback((value: string) => {
        dispatch(authActions.setLoggin(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authActions.setPassword(value))
    }, [dispatch])

    const onLogginClick = useCallback(async () => {
        const response = await dispatch(authByUsername({loggin, password}))
        if (response.meta.requestStatus == 'fulfilled' && onSucess) {
            onSucess()
        }
    }, [onSucess, dispatch, loggin, password])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
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
        </DynamicModuleLoader>
    );
});

export default AuthForm;