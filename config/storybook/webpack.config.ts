import webpack, { DefinePlugin } from 'webpack'
import path from 'path'
import { BuildPath } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  config.resolve!.modules = [
    path.resolve(__dirname, '../../src'),
    'node_modules',
  ]

  config.resolve?.modules?.push(paths.src)

  config.resolve?.extensions?.push('.ts', '.tsx')

  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module?.rules?.map((rule: any) => {
    if (/.svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config.module?.rules?.push(buildSvgLoader())
  config.module?.rules?.push(buildCssLoader(true))

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(''),
    })
  )

  return config
}
