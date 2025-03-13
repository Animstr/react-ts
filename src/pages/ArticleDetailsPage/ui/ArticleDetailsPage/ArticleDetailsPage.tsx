import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entity/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entity/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { articleCommentsReducer, getArticleComments } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleCommentsById } from 'pages/ArticleDetailsPage/model/services/getArticleCommentsById';
import { AddCommentForm } from 'fitures/AddCommentForm';
import { sendCommentOnArticle } from 'pages/ArticleDetailsPage/model/services/sendCommentOnArticle';
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading';

const reducers: ReducersList = {
    articleDetailsComments: articleCommentsReducer,
}

const ArticleDetailsPage = () => {
    const{t} = useTranslation('articles');
    let {id} = useParams<{id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(sendCommentOnArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(getArticleCommentsById(id))
    })

    if (__PROJECT__ == 'storybook') {
        id = '1';
    }
    if (!id) {
        return (
            <div className={classNames(style.ArticleDetailsPage, [])}>
                {t('Article is not found')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(style.ArticleDetailsPage, [])}>
                <ArticleDetails id={id}/>
                <Text title={t('Comments')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList comments={comments} isLoading={isLoading}/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)