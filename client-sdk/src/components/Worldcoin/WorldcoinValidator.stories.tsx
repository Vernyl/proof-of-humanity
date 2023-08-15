import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import WorldcoinValidator from './WorldcoinValidator';
import { IDKitWidget, CredentialType, ISuccessResult } from '@worldcoin/idkit'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Validators/WorldcoinValidator',
  component: WorldcoinValidator,
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
} satisfies Meta<typeof WorldcoinValidator>;

export default meta;
type Story = StoryObj<typeof meta>;

function onVerify(result: ISuccessResult) {
  console.log(result)
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: 'From storybook...',
    // @ts-expect-error
    app_id: import.meta.env.STORYBOOK_WORLDCOIN_APP_ID || '',
    action: 'human-verification',
    url: 'localhost:3000/worldcoin/proof',
    onProof: action('onProof'),
  },
};