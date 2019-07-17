import { getCars, getCarDetail } from '@/services'

const state = {
    carsData: [] = [],
    letterData: [] = [],
    typeData: [] = [],
    carDetailData: {} = {},
   
}
const mutations = {
    upCarsData(state: any, payload: Array<Object>) {
        state.carsData = payload
    },
    upLetterData(state: any, payload: Array<string>) {
        state.letterData = payload
    },
    upTypeData(state: any, payload: Array<Object>) {
        state.typeData = payload
    },
    upCarDetailData(state:any,payload:Object){
        state.carDetailData=payload
    },
    upYearData(state:any,payload:any){
        state.yearData=payload
        console.log('yearData',state.yearData)
    },
    upKindsData(state:any,payload:any){
        state.kindsData=payload
        console.log('kindsData',state.kindsData)
    }
}
const actions = {
    async getCarsData({ commit }: { commit: Function }): Promise<void> {
        let data: any = await getCars();
        console.log('CarsData', data)
        //更新品牌信息
        let carsList: any = {};
        data.data.forEach((item: any) => {
            let letter = item.Spelling[0];
            if (carsList[letter]) {
                carsList[letter].push(item)
            } else {
                carsList[letter] = [item]
            }
        })
        commit('upCarsData', carsList)
        let letterData: Array<string> = data.data.map((item: { Spelling: string }) => {
            return item.Spelling[0]
        })
        //console.log('letterData',letterData)
        commit('upLetterData', Array.from(new Set(letterData)))
    },
    //详情
    async getCarDetailData({ commit }: { commit: Function },payload:any): Promise<void> {
        let data:any = await getCarDetail(payload);
        commit('upCarDetailData',data.data)
        //console.log('data.data',data.data.list)
        //筛选年
        let yearData:any=[]
        data.data.list.forEach((item:any)=>{
            return yearData.push(item.market_attribute.year*1)
        })
        commit('upYearData',Array.from(new Set(yearData)))
        //筛选不同的类型 
        let kindsData:any=[]
        data.data.list.forEach((item:any)=>{
            return kindsData.push(item.inhale_type)
        })
        commit('upKindsData',Array.from(new Set(kindsData)))
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}