import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface ThemeResults {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme ():ThemeResults {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const toggleTheme = () => {
        let newTheme: Theme;
        switch(theme) {
        case Theme.LIGHT:
            newTheme = Theme.BLUE;
            break;
        case Theme.BLUE:
            newTheme = Theme.DARK;
            break;
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    }

}