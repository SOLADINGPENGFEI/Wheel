import request from '@/utils/request';

//获取所有汽车数据
export function getCardata(): Promise<Object>{
    return request.get('/v2-car-getMasterBrandList.html')
}

//点击车型返回所有该车型的数据
export function getDetailCars(params:number):Promise<Object> {
    return request.get('/v2-car-getMakeListByMasterBrandId.html?MasterID='+params)
}

//点机具体的该车的详情数据的图片
export function getImg():Promise<Object> {
    return request.get('/v2-car-getImageList.html?SerialID=2593&_1563368067386')
}
