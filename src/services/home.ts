import request from '@/utils/request';

//获取所有汽车数据
export function getCardata(): Promise<Object>{
    return request.get('/v2-car-getMasterBrandList.html')
}

//点击车型返回所有该车型的数据
export function getDetailCars(params:number):Promise<Object> {
    return request.get('/v2-car-getMakeListByMasterBrandId.html?MasterID='+params)
}

//点击某车型返回到详情数据
export function getInfocar(id:number):Promise<Object> {
    return request.get('/v2-car-getInfoAndListById.html?_1563441300775&SerialID='+id)
}

//点机具体的该车的详情数据的图片
export function getImg():Promise<Object> {
    return request.get('/v2-car-getImageList.html?SerialID=2593&_1563368067386')
}

//点击分类的图片获取分类下所有的图片
export function getAllimg(params:Object):Promise<Object> {
    return request.get('/v2-car-getCategoryImageList.html',params)
}

//所有该汽车2009-2017的颜色
export function getColor(params:number):Promise<object> {
    return request.get('/v2-car-getModelImageYearColor.html?_1563439621616&SerialID'+params)
}

//所有该汽车