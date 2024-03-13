import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select'
import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
  className?: string
  value?: string
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = (Object.keys(Currency) as Array<keyof typeof Currency>).map(
  (key) => ({
    value: Currency[key],
    content: Currency[key],
  })
)

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency)
      },
      [onChange]
    )

    return (
      <Select
        className={classNames('', {}, [className])}
        label={t('profileCurrency')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    )
  }
)
