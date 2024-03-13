import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly', () => {
  test('should return profile readonly true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toBe(true)
  })

  test('should work tith empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
