import {getCardata, getInfocar} from '@/services/home'
const state = {
    brandList: {} = {},
    letterList: [] = [],
    typeList: [] = [],
    Infocar: {} = {},
    infoYear: [] = [],
    initData: {} = {}
}

const actions = {
    async getCardata({commit}: {commit: Function}): Promise<void>{
        let data:any = await getCardata();
        // 更新品牌信息
        let brandList:any = {};
        data.data.forEach((item:any) => {
            let letter = item.Spelling[0];
            if (brandList[letter]){
                brandList[letter].push(item);
            }else{
                brandList[letter] = [item];
            }
        });
        commit('updateBrandList', brandList);

        // 更新字母信息
        let letterList: Array<string> = data.data.map((item: {Spelling: String})=>{
            return item.Spelling[0];
        })
        commit('updateLetterList', Array.from(new Set(letterList)));
        commit('updateInit',data)
    },
    async getInfocar({commit}:{commit:Function},payload:any):Promise<void> {
        
        let data:any = await getInfocar(payload) 
        
        let market:any = data.data.list.map((item:any)=> {
            // return new Set(item.market_attribute.year)
            return item.market_attribute.year
        })
        let yearArray = Array.from(new Set(market))
        commit('updateInfocar',{yearArray,data})
    }
}

const mutations = {
    updateInit(state:any , payload: any) {
        // console.log('payload...',payload)
        state.initData = payload
    },
    updateBrandList(state: any, payload: Object) {
        state.brandList = payload;
    },
    updateLetterList(state: any, payload: Array<string>) {
        state.letterList = payload;
    },
    updateTypeList(state: any, payload: Array<Object>) {
        state.typeList = payload;
    },
    updateInfocar(state:any, payload:any) {
        console.log('dataInfo...',payload)
        state.Infocar = payload.data.data
        state.infoYear = payload.yearArray
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}