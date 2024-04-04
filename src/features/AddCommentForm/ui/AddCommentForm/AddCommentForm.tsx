import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { useSelector } from 'react-redux'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation('article')
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value))
      },
      [dispatch]
    )

    const onSendHandler = useCallback(() => {
      onSendComment(text!)
      onCommentTextChange('')
    }, [onSendComment, onCommentTextChange, text])

    return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
          <Input
            className={cls.input}
            placeholder={t('addComment')}
            value={text!}
            onChange={onCommentTextChange}
          />
          <Button onClick={onSendHandler}>{t('send')}</Button>
        </div>
      </DynamicModuleLoader>
    )
  }
)

export default AddCommentForm
