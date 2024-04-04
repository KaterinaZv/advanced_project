import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const profileMock = {
  first: 'James',
  lastname: 'Bond',
  age: 15,
  currency: Currency.EUR,
  country: Country.Russia,
  city: 'London',
  username: 'admin',
  avatar: 'https://sportshub',
  id: '1',
}

describe('profileSlice.test', () => {
  test('test set setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
    }

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false))
    ).toEqual({ readonly: false })
  })

  test('test set updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        first: 'James',
        lastname: 'Bond',
        age: 50,
        currency: Currency.EUR,
        country: Country.Russia,
        city: 'London',
        username: 'admin',
        avatar: 'https://sportshub',
        id: '1',
      },
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ ...state.form, age: 15 })
      )
    ).toEqual({
      form: {
        first: 'James',
        lastname: 'Bond',
        age: 15,
        currency: Currency.EUR,
        country: Country.Russia,
        city: 'London',
        username: 'admin',
        avatar: 'https://sportshub',
        id: '1',
      },
    })
  })

  test('test extra update profile pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    })
  })

  test('test extra update profile fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: true,
      validateErrors: undefined,
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(profileMock, '')
      )
    ).toEqual({
      isLoading: false,
      form: profileMock,
      data: profileMock,
      readonly: true,
      validateErrors: undefined,
    })
  })
})
