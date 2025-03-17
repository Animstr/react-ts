import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Article, ArticleBlockText, ArticleBlockType, ArticleView } from '../../model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routConfig';

export interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: ArticleView
};

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const{
        className,
        article,
        view = ArticleView.SMALL,
    } = props;
    const{t} = useTranslation('articles');
    const [isHover, bindHover] = useHover();
    const types =  <Text align={TextAlign.LEFT} text={article.type.join(', ')} className={style.types}/> ;
    const views = (
        <>
            <Text text={String(article.views)} className={style.views}/>
            <Icon Svg={EyeIcon}/>
        </>
    )
    const navigate = useNavigate();

    const onArticleClick = useCallback(() => {
        navigate(`${RoutePaths.article_details}${article.id}`)
    }, [article.id, navigate])

    if (view == ArticleView.BIG) {

        const textBlock = article.blocks.find((block) => (
            block.type == ArticleBlockType.TEXT
        )) as ArticleBlockText

        return (
            <div className={classNames('', [className, style[view]])}>
                <Card>
                    <div className={style.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={style.username}/>
                        <Text text={article.createdAt} className={style.date}/>
                    </div>
                    <Text align={TextAlign.LEFT} title={article.title} className={style.title}/>
                    {types}
                    <img src={article.img} alt={article.title} className={style.img}/>
                    {textBlock && (
                        <ArticleBlockTextComponent block={textBlock} className={style.textBlock}/>
                    )}
                    <div className={style.footer}>
                        <Button 
                            onClick={onArticleClick}
                            theme={ButtonTheme.CLEAR}>
                            {t('Read more')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div {...bindHover} className={classNames('', [className, style[view]])}>
            <Card onClick={onArticleClick}>
                <div className={style.cardWrapper}>
                    <img src={article.img} alt={article.title} className={style.img}/>
                    <Text text={article.createdAt} className={style.date}/>
                </div>
                <div className={style.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text title={article.title} className={style.title}/>
            </Card>
        </div>
    );
});