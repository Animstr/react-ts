import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './PageError.module.scss';

export interface PageErrorProps {};

export const PageError = ({}: PageErrorProps) => {
    const reloadPage = () => {
        location.reload()
    }
    return (
        <div className={classNames(style.PageError, [])}>
            Something is going wrong <br/>
            <button onClick={reloadPage}>Reload page</button>
        </div>
    );
};