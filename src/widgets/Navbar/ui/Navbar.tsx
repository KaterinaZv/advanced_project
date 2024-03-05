import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import cls from './Navbar.module.scss'

interface INavbar {
  className?: string
}

export const Navbar = ({ className }: INavbar) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal} />
    </div>
  )
}
