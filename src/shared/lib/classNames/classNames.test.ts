import { classNames } from './classNames'

describe('classNames', () => {
  test('with one params', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['cl1', 'cl2'])).toBe(
      'someClass cl1 cl2'
    )
  })

  test('with modes', () => {
    expect(classNames('someClass', { hovered: true }, ['cl1', 'cl2'])).toBe(
      'someClass cl1 cl2 hovered'
    )
  })

  test('with modes false', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, [
        'cl1',
        'cl2',
      ])
    ).toBe('someClass cl1 cl2 hovered')
  })

  test('with modes undefined', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: undefined }, [
        'cl1',
        'cl2',
      ])
    ).toBe('someClass cl1 cl2 hovered')
  })
})
