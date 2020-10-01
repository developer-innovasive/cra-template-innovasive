import axios from 'axios'
import Cookies from 'js-cookie'

const timeout = process.env.REACT_APP_AXIOS_TIMEOUT
const token = Cookies.get(`${process.env.REACT_APP_ACCESS_TOKEN_NAME}`)

export const defaultAppAxiosConfigs = {
  timeout: Number.parseInt(`${timeout}`),
  headers: {
    Authorization: `Bearer ${token}`,
  },
}

export interface AppAxiosConfig {
  headers: any
}

export const appAxios = (config?: AppAxiosConfig) => {
  const axiosInstance = config ? axios.create(config) : axios.create(defaultAppAxiosConfigs)

  axiosInstance.interceptors.request.use(
    async function (config) {
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(undefined, function (error) {
    return Promise.reject(error)
  })

  return axiosInstance
}

export const appAxiosMulipart = () => {
  return appAxios({
    ...defaultAppAxiosConfigs,
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data',
    },
  })
}
