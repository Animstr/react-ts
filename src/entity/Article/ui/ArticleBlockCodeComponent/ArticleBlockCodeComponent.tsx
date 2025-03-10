import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react';
import { ArticleBlockCode } from '../../model/types/article';
import { Code } from 'shared/ui/Code/Code';

export interface ArticleBlockCodeComponentProps {
    className?: string,
    block: ArticleBlockCode,
};

export const ArticleBlockCodeComponent = memo((props: ArticleBlockCodeComponentProps) => {
    const {className, block} = props;

    return (
        <div className={classNames('', [className])}>
            <Code text={block.code}/>
        </div>
    );
});