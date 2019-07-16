import request from '@/utils/request';

//获取所有汽车数据
export function getCardata(): Promise<Object>{
    return request.get('/v2-car-getMasterBrandList.html')
}

//点击车型返回所有该车型的数据
export function getDetailCars(params:number):Promise<Object> {
    return request.get('/v2-car-getMakeListByMasterBrandId.html?MasterID='+params)
}