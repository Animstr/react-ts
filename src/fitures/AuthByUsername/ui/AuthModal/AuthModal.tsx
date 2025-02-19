import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './AuthModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { AuthForm } from '../AuthForm/AuthForm';

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
            <AuthForm/>
        </Modal>
    );
};