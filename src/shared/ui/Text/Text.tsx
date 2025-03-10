import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Text.module.scss';
import { Mods } from 'shared/lib/classNames/classNames';

export enum TextThemes {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    theme?: TextThemes,
    align?: TextAlign,
    size?: TextSize,
};

export const Text = (props: TextProps) => {
    const {
        className, 
        text, 
        title, 
        theme = TextThemes.PRIMARY,
        align = TextAlign.CENTER,
        size = TextSize.M,
    } = props;
    const mods: Mods = {
        [style[theme]]: true,
        [style[align]]: true,
        [style[size]]: true,
    }
    return (
        <div className={classNames(style.Text, [className], mods)}>
            {title && <p className={style.title}>{title}</p>}
            {text && <p className={style.text}>{text}</p>}
        </div>
    );
};