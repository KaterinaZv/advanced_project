import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { Input } from 'shared/ui/Input'
import { getProfileIsLoading } from '../../model/selector/getProfileIsLoading/getProfileIsLoading'
import { getProfileData } from '../../model/selector/getProfileData/getProfileData'
import { getProfileError } from '../../model/selector/getProfileError/getProfileError'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  const onChangeFirstname = () => {}

  const onChangeLastname = () => {}

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first || ''}
          placeholder={t('profileFirstname')}
          onChange={onChangeFirstname}
          className={cls.input}
        />
        <Input
          value={data?.lastname || ''}
          placeholder={t('profileLastname')}
          onChange={onChangeLastname}
          className={cls.input}
        />
      </div>
    </div>
  )
}
