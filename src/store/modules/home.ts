import { getCars, getCarDetail } from '@/services'

const state = {
    carsData: [] = [],
    letterData: [] = [],
    typeData: [] = [],
    carDetailData: {} = {}
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
        console.log(111,state.carDetailData)
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
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}