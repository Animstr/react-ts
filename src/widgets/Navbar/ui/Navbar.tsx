import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";

import * as style from './Navbar.module.scss';
import { AuthModal } from "fitures/AuthByUsername";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleButton = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])
    return (
        <div className={classNames(style.navbar, [className])}>
            <AuthModal
                isOpen={isOpen}
                onClose={toggleButton} />
            <Button
                theme={ButtonTheme.OUTLINE_INVERTED} 
                onClick={toggleButton}>
                {t('LogeIn')}
            </Button>
        </div>
    )
}