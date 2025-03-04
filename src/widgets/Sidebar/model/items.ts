import { FunctionComponent, SVGAttributes } from "react";
import { RoutePaths } from "shared/config/routeConfig/routConfig";
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string,
    text: string,
    icon: FunctionComponent<SVGAttributes<SVGElement>>,
    authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePaths["main "],
        text: "mainPage",
        icon: MainIcon,
    },
    {
        path: RoutePaths.about,
        text: "aboutPage",
        icon: AboutIcon,
    },
    {
        path: RoutePaths.profile,
        text: "Profile Page",
        icon: ProfileIcon,
        authOnly: true
    },
]