import {getImg} from '@/services/index'

const state = {
    imgdata: [] = []
}

const mutations = {
    updateImg(state:any,payload:any) {
        console.log('payload...', payload)
        state.imgdata = payload.data
    }
}

const actions = {
    async getImgdata({commit}:{commit:Function}):Promise<void> {
        let data:any = await getImg()
        console.log(data)
        commit('updateImg',data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}