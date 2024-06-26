import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import cls from './CommentCard.module.scss'
import { Comment } from '../../model/types/comment'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton border='50%' width={30} height={30} />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width={100} height={50} className={cls.text} />
      </div>
    )
  }

  if (!comment) return null

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink
        className={cls.header}
        to={`${RoutePath.profile}${comment.user.id}`}
      >
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text className={cls.username} title={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </div>
  )
})
