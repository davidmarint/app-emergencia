import axios from 'axios'

const apiUrl = ""

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
})

export default axiosInstance