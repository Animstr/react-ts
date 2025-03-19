import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entity/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entity/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { articleCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleCommentsById } from '../../model/services/getArticleCommentsById';
import { AddCommentForm } from 'fitures/AddCommentForm';
import { sendCommentOnArticle } from '../../model/services/sendCommentOnArticle';
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading';
import { Button } from 'shared/ui/Button/Button';
import { RoutePaths } from 'shared/config/routeConfig/routConfig';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
    articleDetailsComments: articleCommentsReducer,
}

const ArticleDetailsPage = () => {
    const{t} = useTranslation('articles');
    let {id} = useParams<{id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const navigate = useNavigate();

    const onSendComment = useCallback((text: string) => {
        dispatch(sendCommentOnArticle(text))
    }, [dispatch]);

    const onBack = useCallback(() => {
        navigate(RoutePaths.articles)
    },[navigate]) 

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
            <Page className={classNames(style.ArticleDetailsPage, [])}>
                <Button onClick={onBack}>
                    {t('Back')}
                </Button>
                <ArticleDetails id={id}/>
                <Text title={t('Comments')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList comments={comments} isLoading={isLoading}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)