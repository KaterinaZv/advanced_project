import axios from 'axios'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userMock = { username: 'qwerty', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userMock }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'qwerty', password: '1' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userMock)
    )
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'qwerty', password: '1' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('Wrong username or password')
  })

  //без класса TestAsyncThunk
  //   let dispatch: Dispatch
  //   let getState: () => StateSchema
  //   beforeEach(() => {
  //     dispatch = jest.fn()
  //     getState = jest.fn()
  //   })
  //   test('success login', async () => {
  //     const userMock = { username: 'qwerty', id: '1' }
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userMock }))
  //     const action = loginByUsername({ username: 'qwerty', password: '1' })
  //     const result = await action(dispatch, getState, undefined)
  //     expect(dispatch).toHaveBeenCalledTimes(3)
  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userMock))
  //     expect(mockedAxios.post).toHaveBeenCalled()
  //     expect(result.meta.requestStatus).toBe('fulfilled')
  //   })
  //   test('error login', async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //     const action = loginByUsername({ username: 'qwerty', password: '1' })
  //     const result = await action(dispatch, getState, undefined)
  //     expect(dispatch).toHaveBeenCalledTimes(2)
  //     expect(mockedAxios.post).toHaveBeenCalled()
  //     expect(result.meta.requestStatus).toBe('rejected')
  //     expect(result.payload).toEqual('Wrong username or password')
  //   })
})
