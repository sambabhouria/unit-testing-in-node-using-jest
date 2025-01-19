/***
 *
 */
import axios from 'axios'
import { fetchData, fetchDataWitCallBack, fetchDataWithTimeOut } from '../../services/fetchData'

// Mock jest and set the type
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

interface UserType {
  userId: number
  id: number
  title: string
  body: string
}

interface ValidationError {
  message: string
  errors: Record<string, string[]>
}

test('fetches successfully data from an API', async () => {
  const data: UserType = { userId: 1, id: 1, title: 'Test Title', body: 'Test Body' }
  mockedAxios.get.mockResolvedValue({ data })
  const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1')
  expect(result).toEqual(data)
})

test('fetches erroneously data from an API', async () => {
  const errorMessage = 'Network Error'
  mockedAxios.get.mockRejectedValue(new Error(errorMessage))

  try {
    await fetchData('https://jsonplaceholder.typicode.com/posts/1')
  } catch (error) {
    if (axios.isAxiosError(error)) {
      expect(error.message).toBe(errorMessage)
    }
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      expect(error.message).toBe(errorMessage)
    }
  }
})

/**
 * ===> Mock Function
    Create a mock function to trace calls to other functions, specifying the return value.
    It can make the test is isolated with dependencies
 *  1. Make mock function via 'jest.fn()'
 *  2. Set return value each time a method is called with 'mockReturnValueOnce()'
 * 3. Verify that the return value set via 'fetchData()' is correct
 */
const fetchDataMock = jest.fn().mockReturnValueOnce(10)
test('Mock Function Test', () => {
  expect(fetchDataMock()).toBe(10)
})
/**
  1. Defining asynchronous functions with 'fetchData()'
  2. Asynchronous testing with 'async'
  3. After waiting, compare with the expected value via expect

 */
test('Async Test', async () => {
  const data = await fetchDataWithTimeOut()
  expect(data).toBe('Data')
})

test('Async Test', (done) => {
  fetchDataWitCallBack((data: Function) => {
    expect(data).toBe('Data')
    done() // Indicate that the test is complete via 'done()'
  })
})
