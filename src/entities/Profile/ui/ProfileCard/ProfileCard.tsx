import { useTranslation } from 'react-i18next'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Loader } from 'shared/ui/Loader'
import { Avatar } from 'shared/ui/Avatar'
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text'
import { Currency, CurrencySelect } from 'entities/Currency'
import { CountrySelect, Country } from 'entities/Country'
import cls from './ProfileCard.module.scss'
import { Profile } from '../../model/types/profile'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: number) => void
  onChangeAvatar?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeCountry?: (value?: Country) => void
  onChangeCurrency?: (value?: Currency) => void
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeLastname,
  onChangeFirstname,
  onChangeCity,
  onChangeAge,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency,
}: ProfileCardProps) => {
  const { t } = useTranslation(['translation', 'profile'])

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('pageError')}
          theme={TextTheme.ERROR}
          text={t('reloadPage')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt='' />
        </div>
      )}
      <Input
        value={data?.first || ''}
        placeholder={t('profileFirstname', { ns: 'profile' })}
        onChange={onChangeFirstname!}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        value={data?.lastname || ''}
        placeholder={t('profileLastname', { ns: 'profile' })}
        onChange={onChangeLastname!}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        value={data?.city || ''}
        placeholder={t('profileCity', { ns: 'profile' })}
        onChange={onChangeCity!}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        value={data?.age || ''}
        placeholder={t('profileAge', { ns: 'profile' })}
        //@ts-ignore
        onChange={onChangeAge!}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        value={data?.avatar || ''}
        placeholder={t('profileAvatar', { ns: 'profile' })}
        onChange={onChangeAvatar!}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        value={data?.username || ''}
        placeholder={t('profileUsername', { ns: 'profile' })}
        onChange={onChangeUsername!}
        className={cls.input}
        readonly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        className={cls.input}
        readonly={readonly}
      />
      <CountrySelect
        value={data?.country || ''}
        onChange={onChangeCountry}
        className={cls.input}
        readonly={readonly}
      />
    </div>
  )
}
