import { FC, useEffect } from 'react'
import { Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { reducers, removeAfterUnmount = true, children } = props

  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name}` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name}` })
        })
      }
    }

    // eslint-disable-next-line
  }, [])

  return <>{children}</>
}
