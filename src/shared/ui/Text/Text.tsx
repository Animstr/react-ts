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

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    theme?: TextThemes,
    align?: TextAlign,
};

export const Text = (props: TextProps) => {
    const {
        className, 
        text, 
        title, 
        theme = TextThemes.PRIMARY,
        align = TextAlign.CENTER
    } = props;
    const mods: Mods = {
        [style[theme]]: true,
        [style[align]]: true
    }
    return (
        <div className={classNames(style.Text, [className], mods)}>
            {title && <p className={style.title}>{title}</p>}
            {text && <p className={style.text}>{text}</p>}
        </div>
    );
};