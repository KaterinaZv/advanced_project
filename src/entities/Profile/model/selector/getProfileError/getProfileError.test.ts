import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Error',
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual('Error')
  })

  test('should work tith empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
