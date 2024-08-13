<<<<<<< HEAD
import {AuthenticateApi, EmergenciesApi,MainApi, UsersApi} from '../api-client'
import axios from './axios'

const apiUrl = "https://emergencies.byteobe.com:8000"

export const authentication = new AuthenticateApi(undefined, apiUrl, axios)

export const emergenciesApi = new EmergenciesApi(undefined, apiUrl, axios)

export const mainApi = new MainApi(undefined, apiUrl, axios)

export const usersApi = new UsersApi(undefined, apiUrl, axios)
=======
import {} from '~/api-client'
  
  import axiosInstance from '~/api/axios'
  
  const apiUrl = ""
  
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3
