import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main ',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'notFound'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths["main "],
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFoundPage/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutePaths.profile,
        element: <ProfilePage/>,
        authOnly: true
    }
}