import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Text.module.scss';

export enum TextThemes {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    theme?: TextThemes,
};

export const Text = (props: TextProps) => {
    const {
        className, 
        text, 
        title, 
        theme,
    } = props;

    return (
        <div className={classNames(style.Text, [className], {[style[theme]]: true})}>
            {title && <p className={style.title}>{title}</p>}
            {text && <p className={style.text}>{text}</p>}
        </div>
    );
};