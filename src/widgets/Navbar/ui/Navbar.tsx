import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo, useCallback, useState } from "react";
import * as style from './Navbar.module.scss';
import { AuthModal } from "fitures/AuthByUsername";
import { getUserAuthData, userActions } from "entity/User";
import { useDispatch, useSelector } from "react-redux";

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const user = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const closeModal = useCallback(() => {
        setIsOpen(false)
    }, [])

    const openModal = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])
   
    if (user) {
        return (
            <header className={classNames(style.navbar, [className])}>
                <Button
                    theme={ButtonTheme.OUTLINE_INVERTED} 
                    onClick={onLogout}>
                    {t('Logout')}
                </Button>
            </header>
        )
    }

    return (
        <header className={classNames(style.navbar, [className])}>
            { isOpen &&
                <AuthModal
                    isOpen={isOpen}
                    onClose={closeModal} />
            }
            <Button
                theme={ButtonTheme.OUTLINE_INVERTED} 
                onClick={openModal}>
                {t('LogeIn')}
            </Button>
        </header>
    )
});