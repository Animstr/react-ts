import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Skeleton.module.scss';
import { CSSProperties } from 'react';

export interface SkeletonProps {
    width: string | number,
    height: string | number,
    border?: string,
    className?: string,
};

export const Skeleton = ({width, height, border, className}: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return (
        <div className={classNames(style.Skeleton, [className])}
            style={styles}
        >
        </div>
    );
};