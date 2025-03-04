import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

export interface AvatarProps {
    className?: string,
    src?: string,
    alt?: string,
    size?: number
};

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size 
    }), [size])

    return (
        <img 
            className={classNames(style.Avatar, [className])}
            src={src}
            alt={alt}
            style={styles}/>
    );
};