import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

export const PageLoader = () => {
    return (
        <div className={classNames(style.PageLoader, [])}>
            <Loader/>
        </div>
    );
};