import { BrowserRouter as Router} from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar';

export function App () {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', [theme])}>
            <Router>
                <Navbar className='dark'/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Router>
        </div>
    )
}