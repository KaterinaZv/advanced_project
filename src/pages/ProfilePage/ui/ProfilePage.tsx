import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from 'entities/Profile'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text } from 'shared/ui/Text'
import { TextTheme } from 'shared/ui/Text/ui/Text'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const onChangeFirstname = useCallback(
    (first?: string) => {
      dispatch(profileActions.updateProfile({ first: first || '' }))
    },
    [dispatch]
  )

  const onChangeLastname = useCallback(
    (last?: string) => {
      dispatch(profileActions.updateProfile({ lastname: last || '' }))
    },
    [dispatch]
  )

  const onChangeCity = useCallback(
    (city?: string) => {
      dispatch(profileActions.updateProfile({ city: city || '' }))
    },
    [dispatch]
  )

  const onChangeAge = useCallback(
    (age?: number) => {
      dispatch(profileActions.updateProfile({ age: Number(age || 0) }))
    },
    [dispatch]
  )

  const onChangeAvatar = useCallback(
    (avatar?: string) => {
      dispatch(profileActions.updateProfile({ avatar: avatar || '' }))
    },
    [dispatch]
  )

  const onChangeUsername = useCallback(
    (username?: string) => {
      dispatch(profileActions.updateProfile({ username: username || '' }))
    },
    [dispatch]
  )

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(
        profileActions.updateProfile({ currency: currency || Currency.EUR })
      )
    },
    [dispatch]
  )

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country: country || Country.UK }))
    },
    [dispatch]
  )

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((er) => (
            <Text text={t(er)} theme={TextTheme.ERROR} key={er} />
          ))}
        <ProfileCard
          data={formData}
          error={error}
          isLoading={isLoading}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
