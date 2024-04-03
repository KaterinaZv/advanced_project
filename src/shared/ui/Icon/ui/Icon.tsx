import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon: FC<IconProps> = memo((props) => {
  const { className, Svg } = props
  const { t } = useTranslation()

  return <Svg className={classNames(cls.Icon, {}, [className])} />
})
