import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { fetchProfileData } from './fetchProfileData'

jest.mock('axios')

const profileMock = {
  first: 'James',
  lastname: 'Bond',
  age: 50,
  currency: 'USD',
  country: 'United Kingdom',
  city: 'London',
  username: 'admin',
  avatar: 'https://sportshub',
}

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileMock }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileMock)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('Error')
  })
})
