import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense} from 'react';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async';
import { useTheme } from '../theme/useTheme';
import { classNames } from '../helpers/classNames/classNames';

export function App () {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <div>Hello</div>
             <Router>
                <h2><Link to='/'>Main Page</Link></h2>
                <h2><Link to='/about'>About Page </Link></h2>
                <Suspense>
                <Routes>   
                        <Route path='/' element={<MainPageAsync/>}/>
                        <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
                </Suspense>
            </Router>
        </div>
    )
}