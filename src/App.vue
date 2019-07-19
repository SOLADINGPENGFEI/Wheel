<template>
    <transition name="fade" mode="in-out">
        <router-view v-loading="Loading" />
    </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import { Loading } from 'element-ui'
let loadingInstance:any
loadingInstance = Loading.service({ fullscreen: true });

export default Vue.extend({
    data() {
        return {
            Loading: true
        }
    },
    computed: {
        ...mapState({
            initData: (state:any) => state.home.initData
        })
    },
    methods: {
        ...mapActions({
            getCardata: 'home/getCardata'
        })
    },
    mounted() {
        
    },
    created() {
        this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close();
            console.log(this.initData.code)
            // if(this.initData.msg === "成功") {
            //      this.Loading = false
            // }
            setTimeout(() => {
                this.Loading = false
            },1000)
        })
        this.getCardata()
    }
})
</script>


<style lang="scss">
    .fade-enter-active {
    transition: all .3s ease;
    }
    .fade-leave-active {
    transition: all .3s ease;
    }
    .fade-enter
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(100%);
    opacity: 0;
    }
    .fade-leave-to{
    transform: translateY(-100%);
    opacity: 0;
    }
    .fade-enter-to, .fade-leave{
    transform: translateY(0);
    opacity: 1;
    background: red;
    }
</style>
