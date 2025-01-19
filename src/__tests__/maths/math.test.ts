import { add, subtract } from '../../maths/math'

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

it('should calculate the sum of two numbers', () => {
  expect(1 + 2).toBe(3)
})
test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3)
})
