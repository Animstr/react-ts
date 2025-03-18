import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './ArticleViewSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleView } from 'entity/Article/model/types/article';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
]

export interface ArticleViewSelectorProps {
    className?: string,
    view: ArticleView,
    onViewClick: (view: ArticleView) => void,
};

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const{className, view, onViewClick} = props;
    const{t} = useTranslation();

    const onClickHandler = (newView: ArticleView) => () => {
        onViewClick(newView)
    }

    return (
        <div className={classNames('', [className])}>
            {viewTypes.map((viewType) => (
                <Button 
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClickHandler(viewType.view)}>
                    <Icon Svg={viewType.icon}  className={classNames('', [], {[style.notActive]: viewType.view !== view})}/>
                </Button>
            ))}
        </div>
    );
});