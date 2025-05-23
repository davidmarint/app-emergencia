import {AuthenticateApi, EmergenciesApi,MainApi, UsersApi, ChangeRoleApi, PostulationsApi} from '../api-client'
import axios from './axios'

const apiUrl = "https://emergencies.byteobe.com:8000"

export const authentication = new AuthenticateApi(undefined, apiUrl, axios)

export const emergenciesApi = new EmergenciesApi(undefined, apiUrl, axios)

export const mainApi = new MainApi(undefined, apiUrl, axios)

export const usersApi = new UsersApi(undefined, apiUrl, axios)

export const changeRoleApi = new ChangeRoleApi(undefined, apiUrl, axios)

export const postulationsApi = new PostulationsApi(undefined, apiUrl, axios)