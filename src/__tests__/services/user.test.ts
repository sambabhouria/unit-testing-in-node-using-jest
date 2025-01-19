// user.test.ts

import axios from 'axios'
import { fetchData } from '../../services/fetchData'
import { getUserData } from '../../services/user'

jest.mock('../../services/fetchData')

test('returns user data for a given userId', async () => {
  const data = { id: 1, name: 'John Doe' } as const

  ;(fetchData as jest.Mock).mockResolvedValue(data)
  const result = await getUserData(1)
  expect(result).toEqual(data)
  expect(fetchData).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1')
})

test('handles errors when fetching user data', async () => {
  ;(fetchData as jest.Mock).mockResolvedValue(new Error('Network Error'))

  try {
    await getUserData(1)
  } catch (e) {
    if (axios.isAxiosError(e)) {
      expect(e.message).toBe('Unable to fetch user data')
    }
  }
})
