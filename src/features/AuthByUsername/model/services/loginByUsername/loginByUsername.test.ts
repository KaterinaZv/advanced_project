import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { userActions } from 'entities/User'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userMock = { username: 'qwerty', id: '1' }
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userMock }))

    const result = await thunk.callThunk({ username: 'qwerty', password: '1' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userMock)
    )
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: 'qwerty', password: '1' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
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
