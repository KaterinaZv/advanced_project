import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
  test('should return profile isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    }
    expect(getProfileIsLoading(state as StateSchema)).toBe(true)
  })

  test('should return profile isLoading false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    }
    expect(getProfileIsLoading(state as StateSchema)).toBe(false)
  })

  test('should work tith empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
  })
})
