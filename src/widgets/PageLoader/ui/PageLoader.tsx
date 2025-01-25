import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

export interface PageLoaderProps {};

export const PageLoader = ({}: PageLoaderProps) => {
    return (
        <div className={classNames(style.PageLoader, [])}>
            <Loader/>
        </div>
    );
};