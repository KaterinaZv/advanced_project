import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { StoreProvider } from '../../src/app/providers/StoreProvider'
import i18n from '../../src/shared/config/i18n/i18n'

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
      <StoreProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </StoreProvider>
    ),
    (Story: any) => (
      <I18nextProvider i18n={i18n}>
        <Suspense fallback='...loading'>
          <Story />
        </Suspense>
      </I18nextProvider>
    ),
  ],
}

export default preview
