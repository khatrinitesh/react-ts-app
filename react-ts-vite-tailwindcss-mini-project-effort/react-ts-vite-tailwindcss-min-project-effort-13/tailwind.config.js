// Define viewport dimensions
const viewportHeightMobile = 900;
const viewportWidthDesktop = 1440;

// Conversion functions
const pxToVh = (px, viewportHeight = viewportHeightMobile) => (px / viewportHeight) * 100;
const pxToVw = (px, viewportWidth = viewportWidthDesktop) => (px / viewportWidth) * 100;

// List of pixel values
const pixelValues = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];

// Generate spacing values for mobile (vh) and desktop (vw)
const generateSpacing = (values, convertFunc) => {
  return values.reduce((acc, px) => {
    acc[`spacing-${px}`] = `${convertFunc(px)}%`;
    return acc;
  }, {});
};

// Export configuration
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        // Mobile viewport height (vh)
        ...generateSpacing(pixelValues, pxToVh),

        // Desktop viewport width (vw)
        ...generateSpacing(pixelValues, pxToVw),
      },
    },
  },
  plugins: [],
};
