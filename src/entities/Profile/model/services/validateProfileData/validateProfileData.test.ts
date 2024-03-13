import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../types/profile'

describe('validateProfileData', () => {
  test('return without error', () => {
    const profileMock = {
      first: 'James',
      lastname: 'Bond',
      age: 50,
      currency: Currency.EUR,
      country: Country.Russia,
      city: 'London',
      username: 'admin',
      avatar: 'https://sportshub',
    }

    expect(validateProfileData(profileMock)).toEqual([])
  })

  test('return with error age', () => {
    const profileMock = {
      first: 'James',
      lastname: 'Bond',
      age: NaN,
      currency: Currency.EUR,
      country: Country.Russia,
      city: 'London',
      username: 'admin',
      avatar: 'https://sportshub',
    }

    expect(validateProfileData(profileMock)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ])
  })

  test('return with error firstname or lasname', () => {
    const profileMock = {
      first: 'James',
      lastname: undefined,
      age: 22,
      currency: Currency.EUR,
      country: Country.Russia,
      city: 'London',
      username: 'admin',
      avatar: 'https://sportshub',
    }

    expect(validateProfileData(profileMock)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ])
  })
})
