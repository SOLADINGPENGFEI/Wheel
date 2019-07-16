<template>
    <div class="sidebar">
        <ul v-for="(item,index) in detailcar" :key="index">
            <p>{{item.GroupName}}</p>
            <li v-for="(ite) in item" :key="ite.SerialID">
                <img :src="ite.CoverPhoto" alt="">
                <div>
                    <h3 class="title">{{ite.AliasName}}</h3>
                    <span class="price">{{ite.DealerPrice}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">

import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
export default Vue.extend({
    methods: {
        ...mapActions({
            getDetailCars: 'detail/getDetailCars'
        })
    },
    computed: {
        ...mapState({
            detailcar: (state:any) => state.detail.detailcar
        })
    },
    created() {
        console.log(this.$router.currentRoute.query)
        let MasterID:any = this.$router.currentRoute.query.MasterID
        this.getDetailCars(MasterID)
    }
    
})
</script>

<style scoped lang="scss">
    .sidebar {
        width: 70%;
        height: 100%;
        background: #fff;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 120;
    }
</style>