import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import ListViewIcon from 'shared/assets/icons/listView.svg'
import TiledViewIcon from 'shared/assets/icons/tiledView.svg'
import { Button } from 'shared/ui/Button'
import { Icon } from 'shared/ui/Icon'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from '../../model/type/article'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  { view: ArticleView.BIG, icon: ListViewIcon },
  { view: ArticleView.SMALL, icon: TiledViewIcon },
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
  (props) => {
    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleView) => {
      return () => {
        onViewClick?.(newView)
      }
    }

    return (
      <div className={classNames(cls.articleViewSelector, {}, [className])}>
        {viewTypes.map((elem) => (
          <Button theme={ButtonTheme.CLEAR} onClick={onClick(elem.view)}>
            <Icon
              Svg={elem.icon}
              className={classNames('', {
                [cls.notSelected]: elem.view !== view,
              })}
            />
          </Button>
        ))}
      </div>
    )
  }
)
