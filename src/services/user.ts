import { fetchData } from './fetchData'
/**
 *
 * @param userId
 * @returns
 * Mocking Functions
 * Mocking is essential for isolating the unit of code being tested. Jest provides powerful mocking capabilities
 * to achieve this. Let’s demonstrate how to mock functions using Jest.
 */
export const getUserData = async (userId: number) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`
  const data = await fetchData(url)
  return data
}

export const getUserDataErrorHandling = async (userId: number) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const data = await fetchData(url)
    return data
  } catch (error) {
    throw new Error('Unable to fetch user data')
  }
}
