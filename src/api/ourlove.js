import request from './request'

export function login(params){
    return request({
        url: '/login',
        method: 'post',
        data: params
    })
}

export function forgetpswd(params){
    return request({
        url: '/forgetpswd',
        method: 'put',
        data: params
    })
}

export function getuserinfor(params){
    return request({
        url: '/getuserinfor',
        method: 'get',
        params: {params}
    })
}

export function updateuserinfor(params){
    return request({
        url: '/updateuserinfor',
        method: 'put',
        data: params
    })
}