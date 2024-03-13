import { CSSProperties, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  src: string
  className?: string
  size?: number
  alt?: string
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: `${size}px`,
      height: `${size}px`,
    }
  }, [size])

  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      alt={alt}
      style={styles}
    />
  )
}
