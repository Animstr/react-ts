import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../model/types/currency';
import { memo, useCallback } from 'react';

export interface CurrencyProps {
    className?: string,
    value?: string,
    onChange?: (value: Currency) => void,
    readonly?: boolean,
};

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.USD, content: Currency.USD},
    {value: Currency.EUR, content: Currency.EUR},
]

export const CurrencySelect = memo(({className, value, onChange, readonly}: CurrencyProps) => {
    const{t} = useTranslation('profile');
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])
    return (
        <Select
            className={classNames('', [className])}
            options={options}
            label={t('Currency')}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});