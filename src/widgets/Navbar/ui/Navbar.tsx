import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface INavbar {
  className?: string
}

export const Navbar = ({ className }: INavbar) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links} />
  </div>
)
