import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './AuthForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

export interface AuthFormProps {
    className?:string
};

export const AuthForm = ({className}: AuthFormProps) => {
    const{t} = useTranslation();

    const [value, setValue] = useState(null);

    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <div className={classNames(style.AuthForm, [className])}>
            <Input 
                placeholder={t('Loggin')} 
                value={value} 
                onChange={onChange}
                type='text'
                autoFocus={true}
            />
            <Input 
                placeholder={t('Enter password')} 
                value={value} 
                onChange={onChange}
                type='text'
            />
            <Button className={style.loginBtn}>
                {t('Enter')}
            </Button>
        </div>
    );
};