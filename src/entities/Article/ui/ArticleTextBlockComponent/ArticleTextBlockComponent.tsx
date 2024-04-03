import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text'
import cls from './ArticleTextBlockComponent.module.scss'
import { ArticleTextBlock } from '../../model/type/article'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
  memo((props) => {
    const { className, block } = props
    const { t } = useTranslation()

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text className={cls.title} title={block?.title} />}
        {block.paragraphs.map((item) => (
          <Text className={cls.paragraph} text={item} key={item} />
        ))}
      </div>
    )
  })
