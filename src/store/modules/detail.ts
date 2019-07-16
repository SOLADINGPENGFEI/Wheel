import {getDetailCars} from '@/services/index'

const state = {
    detailcar: []
}

const mutations = {
    updateDetail(state:any,payload:Object) {
        state.detailcar = payload
    }
}

const actions = {
    async getDetailCars({commit}:{commit:Function},payload:any): Promise<void> {
        console.log('payload...',payload)
        let params:number = payload

        let data:any = await getDetailCars(params)
        console.log('data...',data)
        commit('updateDetail', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}