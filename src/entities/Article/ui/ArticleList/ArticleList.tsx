import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { Article, ArticleView } from '../../model/type/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
    ))
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const { className, articles, isLoading, view = ArticleView.SMALL } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        articleView={view}
        className={cls.card}
      />
    )
  }
  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length ? <>{articles.map(renderArticle)}</> : null}
    </div>
  )
}
