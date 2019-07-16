import request from '@/utils/request'

//请求首页汽车列表数据
export function getCars():Promise<Object>{
    return request.get('v2-car-getMasterBrandList.html')
}