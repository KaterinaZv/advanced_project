import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const onClickError = () => {
    setError((prev) => !prev)
  }

  useEffect(() => {
    if (error) throw new Error()
  }, [error])

  return <Button onClick={onClickError}>{t('throwError')}</Button>
}
