import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './CommentCard.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

export interface CommentCardProps {
    className?: string,
    comment: Comment,
    isLoading?: boolean
};

export const CommentCard = memo((props: CommentCardProps) => {
    const{className, comment, isLoading} = props;
    const{t} = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(style.CommentCard, [className])}>
                <div className={style.header}>
                    <Skeleton width={50} height={50} border={'50%'}/>
                    <Skeleton width={100} height={30} className={style.username}/>
                </div>
                <Skeleton width={'100%'} height={70} className={style.text}/>
            </div>
        )
    }

    return (
        <div className={classNames(style.CommentCard, [className])}>
            <div className={style.header}>
                { comment.user.avatar ? <Avatar src={comment.user.avatar} size={50}/> : null}
                <Text className={style.username} title={comment.user.username}/>
            </div>
            <Text text={comment.text} className={style.text} align={TextAlign.LEFT}/>
        </div>
    );
});