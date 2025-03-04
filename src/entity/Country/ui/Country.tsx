import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../model/types/country';

export interface CurrencyProps {
    className?: string,
    value?: string,
    onChange?: (value: Country) => void,
    readonly?: boolean,
};

const options = [
    {value: Country.BELARUS, content: Country.BELARUS},
    {value: Country.GEORGIA, content: Country.GEORGIA},
    {value: Country.KAZAHSTAN, content: Country.KAZAHSTAN},
    {value: Country.LATVIA, content: Country.LATVIA},
    {value: Country.RUSSIA, content: Country.RUSSIA},
]

export const CountrySelect = memo(({className, value, onChange, readonly}: CurrencyProps) => {
    const{t} = useTranslation('profile');
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])
    return (
        <Select
            className={classNames('', [className])}
            options={options}
            label={t('Country')}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});