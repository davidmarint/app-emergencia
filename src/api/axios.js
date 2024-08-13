import axios from 'axios'

<<<<<<< HEAD
const apiUrl = "https://emergencies.byteobe.com:8000"
=======
const apiUrl = ""
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
})

export default axiosInstance