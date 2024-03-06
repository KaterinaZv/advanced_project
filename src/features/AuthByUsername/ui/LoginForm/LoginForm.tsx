import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onChangeUsername = (name: string) => {
    setUsername(name)
  }

  const onChangePassword = (pass: string) => {
    setPassword(pass)
  }

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
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
      <Button className={cls.loginBtn}>{t('login')}</Button>
    </div>
  )
}
