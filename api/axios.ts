import axios from 'axios'

interface RequestT {
  method: string
  headers?: any
  data?: any
}

interface ResponseT {
  data: any
  code: number
}

interface Params {
  [key: string]: any
}

const axiosInstance = axios.create({
  baseURL: '/api',
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY
  }
})

export const $http = (url: string, params: RequestT): Promise<ResponseT> => {
  return new Promise((resolve, reject) => {
    axiosInstance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        config.headers = {
          ...params.headers
        }
        if (import.meta.client) {
          config.headers.token = `Bearer ${localStorage.getItem('token')}`
        } else {
          url = 'http://localhost:3000/api' + url
        }
        config.url = url
        // get
        if (params.method === 'get') {
          config.params = params.data
        }
        // post
        if (params.method === 'post') {
          config.data = params.data
        }
        // form
        if (params.method === 'form') {
          config.data = params.data
          config.transformRequest = (data) => {
            return new URLSearchParams(data).toString()
          }
          config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        // post query
        if (params.method === 'postQuery') {
          config.data = params.data
          config.url = `${config.url}?${new URLSearchParams(params.data).toString()}`
        }
        // blob
        if (params.method === 'blob') {
          config.responseType = 'blob'
        }
        console.log('config: ', config)
        return config
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error)
      }
    )

    axiosInstance.interceptors.response.use(
      (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if(response.data.code !== 200) {
          reject(response.data)
        }
        return response
      },
      (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error)
      }
    )

    axiosInstance({
      method: params.method === 'get' ? 'get' : 'post',
      url,
      headers: params.headers
    })
      .then((res) => {
        const result = res.data as ResponseT
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const $getApi = (url: string, params: Params) => {
  return $http(url, { method: 'get', data: params })
}

const $postApi = (url: string, params: Params) => {
  return $http(url, { method: 'post', data: params })
}
const $formApi = (url: string, params: Params) => {
  return $http(url, { method: 'form', data: params })
}
const $postQueryApi = (url: string, params: Params) => {
  return $http(url, { method: 'postQuery', data: params })
}
const $blobApi = (url: string, params: Params) => {
  return $http(url, { method: 'blob', data: params })
}

export { $blobApi, $getApi, $formApi, $postApi, $postQueryApi }
