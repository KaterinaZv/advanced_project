import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import { TextTheme } from 'shared/ui/Text/ui/Text'
import { loginActions } from 'features/AuthByUsername'
import { Text } from 'shared/ui/Text'
import cls from './LoginForm.module.scss'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginUsername } from '../../model/selector/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selector/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selector/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selector/getLoginError/getLoginError'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  )
})

export default LoginForm
