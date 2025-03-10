import { classNames } from 'shared/lib/classNames/classNames'
import * as style from './Code.module.scss';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';

export interface CodeProps {
    className?: string,
    text: string,
};

export const Code = memo((props: CodeProps) => {
    const{className, text} = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    },[text])

    return (
        <div className={classNames(style.Code, [className])}>
            <Button 
                className={style.copy} 
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}>
                <CopyIcon className={style.copyIcon} />
            </Button>
            <pre>
                <code>
                    {text}
                </code>
            </pre>
        </div>
    );
});