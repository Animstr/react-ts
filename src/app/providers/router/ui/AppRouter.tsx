import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>   
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        )} 
                    />
                ))}
            </Routes> 
        </Suspense>
    );
};