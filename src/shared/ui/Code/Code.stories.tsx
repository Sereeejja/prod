import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Code from 'shared/ui/Code/Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        text: 'const meta = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    parameters: {\n'
            + '        layout: \'fullscreen\',\n'
            + '    },\n'
            + '    tags: [\'autodocs\'],\n'
            + '    argTypes: {\n'
            + '        // backgroundColor: { control: \'color\' },\n'
            + '    },\n'
            + '    args: {},\n'
            + '\n'
            + '} satisfies Meta<typeof Code>;\n'
            + '\n'
            + 'export default meta;\n'
            + 'type Story = StoryObj<typeof meta>;',
    },
};
