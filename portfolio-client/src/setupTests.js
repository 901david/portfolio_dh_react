import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { APP_THEME } from './Shared/theme';

const WithProviders = ({ children }) => {
  return <ThemeProvider theme={APP_THEME}>{children}</ThemeProvider>;
};
console.log('runs');
const customRender = (ui, options) =>
  render(ui, { wrapper: WithProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
