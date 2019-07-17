<template>
    <div class="brand-list" ref="scrollEle">
        <ul v-for="(item, index) in data" :key="index">
            <p :ref="index">{{index}}</p>
            <li v-for="(value) in item" 
                class="border-bottom"
                :key="value.MasterID" 
                @click="sidebarDetail(value.MasterID)">
                <img :src="value.CoverPhoto" :alt="value.Name">
                <span>{{value.Name}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState,mapMutations, mapActions} from 'vuex'
export default Vue.extend({
    props: {
        data: {
            type: Object,
            value: {}
        },
        current: {
            type: String,
            value: ''
        }
    },
    data(){
        return {
           
        }
    },
    methods: {
        sidebarDetail(id:number) {
            this.$router.push({path: '/?MasterID='+id})
            this.$store.state.detail.sidebar = true
            // this.getSidebar(this.sidebar)
            this.getDetailCars(id)
        },
        ...mapMutations({
            // updateSidebar: 'detail/updateSidebar'
        }),
        ...mapActions({
            // getSidebar: 'detail/getSidebar',
            getDetailCars: 'detail/getDetailCars'
        })
    },
    computed: {
        ...mapState({
            sidebar: (state:any) => state.detail.sidebar
        })
    },
    watch: {
        current(val) {
            if(val) {
                this.$refs.scrollEle.scrollTop = this.$refs[val][0].offsetTop 
            }
        }
    },
    created() {
       
    }
})
</script>


<style lang="scss" scoped>
@import '../scss/global.scss';
.brand-list{
    height: 100%;
    overflow-y: scroll;
}
.brand{
    font-size: .28rem;
    line-height: .4rem;
    padding-left: .3rem;
    color: #aaa;
}
ul{
    width: 100%;
    background: #fff;
    p {
        background: #f0eeee;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
    }
}
li{
    height: $brand-height;
    line-height: $brand-height;
    display: flex;
    align-items: center;
    padding: 0 10px;
    img{
        height: .8rem;
    }
    span{
        font-size: .32rem;
        margin-left: .4rem;
    }
    &:last-child:after{
        display: none;
    }
}
</style>