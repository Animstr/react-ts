import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Icon.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

export interface IconProps {
    className?: string,
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
};

export const Icon = memo(({className, Svg}: IconProps) => {
    const{t} = useTranslation();

    return (
        <Svg className={classNames(style.Icon, [className])} />
    );
});