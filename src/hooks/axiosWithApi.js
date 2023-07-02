import axios from 'axios'
import { BaseUrl } from './URL'

const axiosInstance = axios.create({
	baseURL: BaseUrl().localApi,
})

axiosInstance.defaults.headers.common.accept = '*/*'
axiosInstance.defaults.headers.common.rid = 'anti-csrf'

const axiosWithApi = ({ url, method, headers = null, body = null }) => {
	return axiosInstance[method](url, JSON.parse(body), JSON.parse(headers))
}

export default axiosWithApi
