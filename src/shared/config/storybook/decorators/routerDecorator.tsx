import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (StoryComponent: StoryFn) => (
    
    <BrowserRouter>
        <Suspense fallback='...'>
            <StoryComponent/>
        </Suspense>
    </BrowserRouter>
)