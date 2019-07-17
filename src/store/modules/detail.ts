import {getDetailCars} from '@/services/index'

const state = {
    detailcar: [],
    sidebar: false
}

const mutations = {
    updateDetail(state:any,payload:Array<Object>) {
        // console.log('payload...update', payload)
        state.detailcar = payload
    }
}

const actions = {
    async getDetailCars({commit}:{commit:Function},payload:any): Promise<void> {
        console.log('payload...',payload)
        let params:number = payload

        let data:any = await getDetailCars(params)
        // console.log('data...',data)
        commit('updateDetail', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}