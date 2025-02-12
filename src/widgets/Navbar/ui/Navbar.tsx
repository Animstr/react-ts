import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";

import * as style from './Navbar.module.scss';

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
            <Modal
                isOpen={isOpen}
                onClose={toggleButton}
                // eslint-disable-next-line i18next/no-literal-string
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.Minus quas debitis itaque quod, nam molestias vitae.Nemo odio eaque non, officiis recusandae expedita vero fugiat architecto maiores optio tempora cumque.
            </Modal>
            <Button
                theme={ButtonTheme.OUTLINE_INVERTED} 
                onClick={toggleButton}>
                {t('LogeIn')}
            </Button>
        </div>
    )
}