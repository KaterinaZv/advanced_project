import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { TextTheme } from 'shared/ui/Text/ui/Text'
import { loginActions } from 'features/AuthByUsername'
import { Text } from 'shared/ui/Text'
import cls from './LoginForm.module.scss'
import { getLoginState } from '../../model/selector/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (name: string) => {
      dispatch(loginActions.setUsername(name))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (pass: string) => {
      dispatch(loginActions.setPassword(pass))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('loginForm')} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        className={cls.input}
        value={username}
        onChange={onChangeUsername}
        placeholder={t('username')}
      />
      <Input
        className={cls.input}
        value={password}
        onChange={onChangePassword}
        placeholder={t('password')}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  )
})
