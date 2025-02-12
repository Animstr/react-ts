import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Modal.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';

export interface ModalProps {
    children?: ReactNode,
    isOpen: boolean,
    onClose?: () => void,
    isTestingDark?: boolean,
};

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        children,
        isOpen,
        onClose,
        isTestingDark
    } = props;

    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeModal = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false)
            }, ANIMATION_DELAY);
        }
    }, [onClose])
    const onEscape = useCallback((e : KeyboardEvent) => {
        if (e.key == 'Escape') {
            closeModal()
        }
    }, [closeModal])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscape)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onEscape)
        }
    }, [isOpen, onEscape])

    const onContentClick = (e : React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [style.opened]: isOpen,
        [style.isClosing]: isClosing,
        'app dark': isTestingDark
    }
    return (
        <Portal>
            <div className={classNames(style.Modal, [], mods)}>
                <div className={style.overlay} onClick={closeModal}>
                    <div className={style.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};