import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleById } from '../../model/services/getArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'entity/Article/model/selectors/articleDetails';
import { Text, TextAlign, TextSize, TextThemes } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleBlockCodeComponent } from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent';
import { ArticleBlockImageComponent } from '../ArticleBlockImageComponent/ArticleBlockImageComponent';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';

const reducer: ReducersList = {
    articleDetails: articleDetailsReducer
}

export interface ArticleDetailsProps {
    id: string;
};

export const ArticleDetails = memo(({id}: ArticleDetailsProps) => {
    const{t} = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const data = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const renderBlock = (block: ArticleBlock) => {
        switch(block.type) {
        case ArticleBlockType.CODE:
            return <ArticleBlockCodeComponent 
                className={style.block} 
                block={block}
                key={block.id}/>;
        case ArticleBlockType.IMAGE:
            return <ArticleBlockImageComponent 
                className={style.block} 
                block={block}
                key={block.id}/>;
        case ArticleBlockType.TEXT:
            return <ArticleBlockTextComponent 
                className={style.block} 
                block={block}
                key={block.id}/>;
        }
    }

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(getArticleById(id))
        }
    }, [dispatch, id])
    let content;

    if(isLoading) {
        content = (
            <>
                <Skeleton className={style.avatar} width={200} height={200} border={'50%'}/> 
                <Skeleton className={style.title} width={300} height={32}/> 
                <Skeleton className={style.skeleton} width={600} height={24}/>
                <Skeleton className={style.skeleton} width={'100%'} height={200}/> 
                <Skeleton className={style.skeleton} width={'100%'} height={200}/>  
            </>
        )
    } else if(error) {
        content = (
            <Text theme={TextThemes.ERROR} title={t('Error')} align={TextAlign.CENTER}/> 
        )
    } else {
        content = (
            <>
                <div className={style.avatar_wrapper}>
                    <Avatar
                        size={200}
                        src={data?.img}
                        className={style.avatar}
                    />
                </div>
                <Text 
                    size={TextSize.L}
                    title={data?.title}
                    text={data?.subtitle}
                    className={style.title}
                    align={TextAlign.LEFT}
                />
                <div className={style.articleInfo}>
                    <Icon Svg={EyeIcon} className={style.icon}/>
                    <Text text={String(data?.views)}/>
                </div>
                <div className={style.articleInfo}>
                    <Icon Svg={CalendarIcon} className={style.icon}/>
                    <Text text={String(data?.createdAt)}/>
                </div>
                {data?.blocks.map(renderBlock)}
            </>
        )
    }


    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(style.ArticleDetails, [])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

