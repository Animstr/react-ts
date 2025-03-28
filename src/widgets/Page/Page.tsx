import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Page.module.scss';
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollByPath, scrollPositionActions } from 'fitures/SaveScrollPosition';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';


export interface PageProps {
    className?: string,
    children: ReactNode,
    onScrollEnd?: () => void
};

export const Page = memo((props: PageProps) => {

    const{className, children, onScrollEnd} = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

    useInfiniteScroll({callback: onScrollEnd, triggerRef, wrapperRef})

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    })

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollPositionActions.setScrollPosition({path: pathname, scroll: e.currentTarget.scrollTop}))
    }, 1000)

    return (
        <section 
            ref={wrapperRef}
            className={classNames(style.Page, [className])}
            onScroll={onScrollHandler}>
            {children}
            <div ref={triggerRef}/>
        </section>
    );
});