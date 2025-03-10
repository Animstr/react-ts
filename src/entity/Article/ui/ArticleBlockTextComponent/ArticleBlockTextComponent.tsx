import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleBlockTextComponent.module.scss';
import { memo } from 'react';
import { ArticleBlockText } from '../../model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

export interface ArticleBlockTextComponentProps {
    className?: string,
    block: ArticleBlockText
};

export const ArticleBlockTextComponent = memo((props: ArticleBlockTextComponentProps) => {
    const {className, block} = props;

    return (
        <div className={classNames('', [className])}>
            {block.title && (
                <Text title={block.title} className={style.title} />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text key={index} text={paragraph} className={style.paragraph} align={TextAlign.LEFT}/> 
            ))}
        </div>
    );
});