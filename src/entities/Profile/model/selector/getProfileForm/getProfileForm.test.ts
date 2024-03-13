import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
  test('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          first: 'Avel',
          lastname: 'Hugo',
          age: 22,
          avatar: '111',
          country: Country.Belarus,
          currency: Currency.USD,
        },
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual({
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
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
