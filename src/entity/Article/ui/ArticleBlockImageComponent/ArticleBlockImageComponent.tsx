import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleBlockImageComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleBlockImage } from '../../model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

export interface ArticleBlockImageComponentProps {
    className?: string;
    block: ArticleBlockImage;
};

export const ArticleBlockImageComponent = memo((props: ArticleBlockImageComponentProps) => {
    const {className, block} = props;

    return (
        <div className={classNames(style.ArticleBlockImageComponent, [className])}>
            <img src={block.src} alt={block.title}/>
            {block.title && (
                <Text text={block.title} align={TextAlign.LEFT}/>
            )}
        </div>
    );
});