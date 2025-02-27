import * as style from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from '../../assets/icons/theme-light.svg';
import DarkIcon from '../../assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '../Button/Button';
import { memo } from 'react';

export const ThemeSwitcher = memo(() => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button 
            theme={ButtonTheme.CLEAR}
            className={style.btn}
            onClick={toggleTheme}>
            {theme == Theme.DARK ? <DarkIcon /> : <LightIcon/>}
        </Button>
    );
});