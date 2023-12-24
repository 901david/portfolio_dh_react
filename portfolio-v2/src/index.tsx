import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { APP_THEME } from './Shared/theme';
import { App } from './components/App';

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
    <ThemeProvider theme={APP_THEME}>
        <App />
    </ThemeProvider>
)