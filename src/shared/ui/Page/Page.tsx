import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Page.module.scss';
import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

export interface PageProps {
    className?: string,
    children: ReactNode,
    onScrollEnd?: () => void
};

export const Page = memo((props: PageProps) => {

    const{className, children, onScrollEnd} = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({callback: onScrollEnd, triggerRef, wrapperRef})
    return (
        <section ref={wrapperRef} className={classNames(style.Page, [className])}>
            {children}
            <div ref={triggerRef}/>
        </section>
    );
});