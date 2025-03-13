import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from 'fitures/AddCommentForm/model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from 'fitures/AddCommentForm/model/slice/addCommentsFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';

export interface AddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void
};

const reducers: ReducersList = {
    addCommentsForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const{className, onSendComment} = props;
    const{t} = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch()

    const onSetComment = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || ' ');
        onSetComment('');
    }, [text, onSendComment, onSetComment])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(style.AddCommentForm, [className])}>
                <Input
                    className={style.input} 
                    placeholder={t('Enter the comment text')}
                    value={text}
                    onChange={onSetComment}/>
                <Button
                    onClick={onSendHandler}>
                    {t('Send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;