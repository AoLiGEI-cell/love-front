import axios from 'axios'

const service = axios.create({
    timeout: 0,
})

//请求前拦截
service.interceptors.request.use(
    (config) => {
        config.baseURL = "http://ourlove.duanxu.kooboo.asia/"
        return config
    }
)
//请求后拦截

service.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
    }
)

export default service