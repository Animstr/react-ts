import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInited, userActions } from 'entity/User';

export function App () {
    const {theme} = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData())
    },[dispatch])
   
    return (
        <div className={classNames('app', [theme])}>
            <Navbar className='dark'/>
            <div className='content-page'>
                <Sidebar/>
                {inited && <AppRouter/>}
            </div>
        </div>
    )
}