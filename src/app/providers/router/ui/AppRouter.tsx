import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routConfig';

export const AppRouter = () => {
    return (
        <Suspense>
            <Routes>   
                   {Object.values(routeConfig).map(({element, path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element} 
                        />
                   ))}
            </Routes> 
        </Suspense>  
    );
};