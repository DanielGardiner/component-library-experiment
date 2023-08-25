import {Alert} from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   color: { control: 'color' },
  // },
};

export const Primary = {
  args: {
    variant: 'primary',
  }
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary = {
//   args: {
//     color: 'black',
//   }
// };

// Alert.propTypes = {
//   color: PropTypes.oneOf(['red', 'blue', 'green']),
// };

// Alert.defaultProps = {
//   color: 'black',
// };
