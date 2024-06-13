import axiosInstance from '~/api/axios'
import { useLoader } from '~/composables/useLoader'

function setup(authStore) {
  // inject bearer token if exist
  axiosInstance.interceptors.request.use(
    (config) => {
      const { setLoading } = useLoader()
      if (authStore.accessToken)
        config.headers.Authorization = `Bearer ${authStore.accessToken}`
      setLoading(true)
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // handler unauthorized response and refresh token persist
  axiosInstance.interceptors.response.use(
    (response) => {
      const { setLoading } = useLoader()
      setLoading(false)
      return response
    },
    async (error) => {
      const { setLoading } = useLoader()
      setLoading(false)
      if (error.response.status === 401 && authStore.isAuthenticated)
        authStore.refresh()
      return Promise.reject(error)
    },
  )
}

export default setup