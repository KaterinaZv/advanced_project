import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text'
import cls from './CommentList.module.scss'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation('article')

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ? (
        <>
          {comments.map((elem) => (
            <CommentCard
              className={cls.comment}
              comment={elem}
              isLoading={isLoading}
            />
          ))}
        </>
      ) : (
        <Text text={t('emptyComments')} />
      )}
    </div>
  )
})
