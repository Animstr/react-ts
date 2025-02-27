import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './AuthModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { AuthFormAsync } from '../AuthForm/AuthForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

export interface AuthModalProps {
    isOpen: boolean,
    onClose?: () => void
};

export const AuthModal = ({isOpen, onClose}: AuthModalProps) => {
    return (
        <Modal 
            className={classNames(style.AuthModal, [])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <Suspense fallback={<Loader/>}>
                <AuthFormAsync onSucess={onClose}/>
            </Suspense>
        </Modal>
    );
};