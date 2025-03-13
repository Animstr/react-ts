import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';

export interface CommentListProps {
    className?: string,
    comments: Comment[],
    isLoading?: boolean
};

export const CommentList = memo((props: CommentListProps) => {
    const{className, comments, isLoading} = props;
    const{t} = useTranslation();

    if(isLoading) {
        return (
            <>
                <CommentCard isLoading={isLoading}/>
                <CommentCard isLoading={isLoading}/>
                <CommentCard isLoading={isLoading}/>
            </>
        )
    }

    return (
        <div className={classNames(style.CommentList, [className])}>
            {   comments.length 
                ? 
                comments?.map(comment => (
                    <CommentCard key={comment.id} comment={comment} className={style.comment}/>
                ))
                :
                <Text title={t('There are no comments')}/>
            }
        </div>
    );
});