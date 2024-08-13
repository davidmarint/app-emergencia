import axios from 'axios'

const apiUrl = "https://emergencies.byteobe.com:8000"

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
})

export default axiosInstance