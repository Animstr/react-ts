import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entity/User";
import { SidebarItemType } from "../types/item";
import { RoutePaths } from "shared/config/routeConfig/routConfig";
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export const getSidebarItemsList = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemList: SidebarItemType[] = [
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
                path: RoutePaths.profile + userData?.id,
                text: "Profile Page",
                icon: ProfileIcon,
                authOnly: true
            },
            {
                path: RoutePaths.articles,
                text: "Articles Page",
                icon: ArticleIcon,
                authOnly: true
            },
        ]
        
        return SidebarItemList
    }
)