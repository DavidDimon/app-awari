import React from 'react'

import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'

const withProvider = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <div id="story-wrapper" style={{ minHeight: '100vh' }}>
        <StoryFn />
      </div>
    </ThemeProvider>
  )
}

export const decorators = [withProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
