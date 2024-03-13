import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation(['translation', 'profile'])
  const dispatch = useAppDispatch()

  const readonly = useSelector(getProfileReadonly)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile', { ns: 'profile' })} />
      {readonly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
          onClick={onEdit}
        >
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={cls.editBtn}
            onClick={onCancelEdit}
          >
            {t('cancel')}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.editBtn}
            onClick={onSave}
          >
            {t('save')}
          </Button>
        </>
      )}
    </div>
  )
}
