import { getUserAuthData } from "entity/User";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePaths } from "shared/config/routeConfig/routConfig";

export function RequireAuth ({children}: {children: JSX.Element}) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation()

    if(!auth) {
        return <Navigate to={RoutePaths["main "]} state={{from: location}} replace/>
    }
    return children;
}