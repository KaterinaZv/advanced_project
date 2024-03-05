import { CounterSchema } from '../type/counterSchema'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    })
  })
  test('increment', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    })
  })
  test('should work with empty', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    })
  })
})
