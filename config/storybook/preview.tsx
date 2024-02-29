import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'
import { Theme } from '../../src/app/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => (
      <div className={`app ${Theme.LIGHT}`}>
        <Story />
      </div>
    ),
    (Story: any) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
}

export default preview
