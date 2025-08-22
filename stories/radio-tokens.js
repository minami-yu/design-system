import tokens from '../src/tokens/tokens.json';

// Extract design tokens for radio component
export const radioTokens = {
  colors: {
    primary: tokens.core.Brand_Chlorophyll.value,      // #61892f
    secondary: tokens.core.Brand_Sunrise.value,        // #ffa500
    default: '#222629',                                 // Standard text color
    disabled: 'rgba(34, 38, 41, 0.38)',               // Disabled state
    defaultAlpha: 'rgba(34, 38, 41, 0.6)',            // Default with transparency
  },
  hover: {
    primary: 'rgba(97, 137, 47, 0.04)',
    secondary: 'rgba(255, 165, 0, 0.04)',
    default: 'rgba(34, 38, 41, 0.04)',
  },
  focus: {
    primary: 'rgba(97, 137, 47, 0.30)',
    secondary: 'rgba(255, 165, 0, 0.30)',
    default: 'rgba(34, 38, 41, 0.12)',
  }
};

// Function to inject design tokens as CSS custom properties
export const injectRadioTokens = () => {
  const root = document.documentElement;
  
  // Inject color tokens
  Object.entries(radioTokens.colors).forEach(([key, value]) => {
    root.style.setProperty(`--radio-color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
  });
  
  // Inject hover tokens
  Object.entries(radioTokens.hover).forEach(([key, value]) => {
    root.style.setProperty(`--radio-hover-${key}`, value);
  });
  
  // Inject focus tokens
  Object.entries(radioTokens.focus).forEach(([key, value]) => {
    root.style.setProperty(`--radio-focus-${key}`, value);
  });
};

export default radioTokens;
