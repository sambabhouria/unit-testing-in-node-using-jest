import axios from 'axios'
/**
 *
 * @param url Testing Asynchronous Code
 * @returns
 * Testing asynchronous code is straightforward with Jest. Let’s create a function that fetches data
 * from an API and write tests for it. Create a file named fetchData.js:
 */
const fetchData = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}
/**
 *
 * @returns Testing Asynchronous Code
 */
const fetchDataWithTimeOut = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data')
    }, 1000)
  })
}

const fetchDataWitCallBack = (callback: Function) => {
  setTimeout(() => {
    callback('Data')
  }, 1000)
}

export { fetchData, fetchDataWitCallBack, fetchDataWithTimeOut }
