const bootstrapBreakpoints = {
  xSmall: {
    name: "1. X-Small - none",
    styles: {
      width: "575px",
      height: "400px",
    },
  },
  small: {
    name: "2. Small - sm",
    styles: {
      width: "767px",
      height: "400px",
    },
  },
  medium: {
    name: "3. Medium - md",
    styles: {
      width: "991px",
      height: "400px",
    },
  },
  large: {
    name: "4. Large - lg",
    styles: {
      width: "1199",
      height: "400px",
    },
  },
  extraLarge: {
    name: "5. Extra large - xl",
    styles: {
      width: "1399px",
      height: "400px",
    },
  },
  extraExtraLarge: {
    name: "6. Extra extra large - xxl",
    styles: {
      width: "1400px",
      height: "400px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const preview = {
  parameters: {
    viewport: { viewports: bootstrapBreakpoints },
  },
};

export default preview;
