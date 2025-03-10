import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';


const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        text:'<pre>\n'
                +'        <code className={classNames(style.Code, [className])}>\n'
                +'            {children}\n'
                +'        </code>\n'
                +'</pre>\n'
    }
};