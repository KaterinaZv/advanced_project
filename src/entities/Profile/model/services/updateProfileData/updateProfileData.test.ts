import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { updateProfileData } from './updateProfileData'
import { ValidateProfileError } from '../../types/profile'

jest.mock('axios')

const profileMock = {
  first: 'James',
  lastname: 'Bond',
  age: 50,
  currency: Currency.EUR,
  country: Country.Kazakhstan,
  city: 'London',
  username: 'admin',
  avatar: 'https://sportshub',
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileMock,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileMock }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileMock)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileMock,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profileMock, first: '' },
      },
    })

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
})
