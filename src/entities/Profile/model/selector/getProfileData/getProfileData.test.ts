import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'Avel',
          lastname: 'Hugo',
          age: 22,
          avatar: '111',
          country: Country.Belarus,
          currency: Currency.USD,
        },
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual({
      first: 'Avel',
      lastname: 'Hugo',
      age: 22,
      avatar: '111',
      country: Country.Belarus,
      currency: Currency.USD,
    })
  })

  test('should work tith empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
