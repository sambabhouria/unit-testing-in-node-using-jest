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

/**
 * describe in Jest testing
 * ‘describe’ defines Test Suites that group test cases
 * With ‘describe’, you can group tests and organize common settings, hierarchize them to handle complex tests.
 * Test grouping via describe
 */
describe('Calculator Functions', () => {
  test('add Test', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('subtract Test', () => {
    expect(subtract(5, 2)).toBe(3)
  })
})
/**
 * Grouping related test cases to increase structure clarity and readability
 * Organizing common settings via describe
 *
 * Functions can be used for organizing commong setting before and after test.
  1.  beforeAll: A block of code that runs once before all tests are executed
  2.  beforeEach: A block of code that runs every time before each test run
  3.  afterAll: A block of code that runs only once after all tests run
  4.  afterEach: A block of code that is executed every time after each test run
 */

describe('Database Test', () => {
  beforeAll(() => {
    // Database Initialization
  })

  afterAll(() => {
    // Database Clear
  })

  test('Data Add Test', () => {
    // Test Code
  })
})

/**
 * describe hierarchy
 */
describe('Component', () => {
  describe('...', () => {
    test('...', () => {
      // Test Code
    })
  })

  describe('...', () => {
    test('...', () => {
      // Test Code
    })
  })
})

/**
 * Mock npm modules
 */
jest.mock('uuid', () => ({
  v4: () => '123',
}))
