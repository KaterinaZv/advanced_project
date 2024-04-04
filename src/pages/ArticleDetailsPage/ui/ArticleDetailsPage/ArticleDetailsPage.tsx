import { FC, memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { AddCommentForm } from 'features/AddCommentForm'
import cls from './ArticleDetailsPage.module.scss'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('undefinedArticle')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('comment')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
