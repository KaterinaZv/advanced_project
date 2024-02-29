import { Button, ThemeButton } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('toBeInTheDocument', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('toHaveClass', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>)
    expect(screen.getByText('test')).toHaveClass('clear')
  })
})
