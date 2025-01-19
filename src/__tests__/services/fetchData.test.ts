/***
 *
 */
import axios from 'axios'
import { fetchData } from '../../services/fetchData'

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
