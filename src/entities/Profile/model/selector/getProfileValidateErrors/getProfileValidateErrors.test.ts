import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../types/profile'

describe('getProfileValidateErrors', () => {
  test('should return profile validate error incorrect country', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCORECT_COUNTRY],
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORECT_COUNTRY,
    ])
  })

  test('should return profile validate error incorrect age', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCORRECT_AGE],
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ])
  })

  test('should work tith empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
