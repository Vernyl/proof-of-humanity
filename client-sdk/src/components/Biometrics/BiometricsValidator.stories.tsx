import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BiometricsValidator from './BiometricsValidator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Validators/BiometricsValidator',
  component: BiometricsValidator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} satisfies Meta<typeof BiometricsValidator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // @ts-expect-error
    app_id: import.meta.env.STORYBOOK_PASSAGE_APP_ID || '',
    url: 'localhost:3000/biometrics/proof',
    onProof: action('onProof'),
  },
};
