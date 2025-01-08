import * as style from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from '../../assets/icons/theme-light.svg';
import DarkIcon from '../../assets/icons/theme-dark.svg';
import { Button, ThemeButton } from '../Button/Button';

export interface ThemeSwitcherProps {};

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button 
            theme={ThemeButton.CLEAR}
            className={style.btn}
            onClick={toggleTheme}>
            {theme == Theme.DARK ? <DarkIcon /> : <LightIcon/>}
        </Button>
    );
};