<template>
    <div class="sidebar" v-if="sidebar">
        <div v-for="(item,index) in data.data" :key="index">
            <p>{{item.GroupName}}</p>
            <ul>
                <li v-for="(ite) in item.GroupList" :key="ite.SerialID">
                    <img :src="ite.CoverPhoto" alt="">
                    <div>
                        <h3 class="title">{{ite.AliasName}}</h3>
                        <span class="price">{{ite.DealerPrice}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">

import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
export default Vue.extend({
    props: {
        data: {
            type: Object,
            value: {}
        }
    },
    methods: {
       
    },
    computed: {
       ...mapState({
           sidebar: (state:any) => state.detail.sidebar
       })
    },
    created() {
      
    }
    
})
</script>

<style scoped lang="scss">
    .sidebar {
        width: 80%;
        height: 100%;
        background: #fff;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 999;
        overflow-y: scroll;
        animation: sideslip .5s;
        div {
            width: 100%;
            p {
                margin-left: 1px;
                font-size: .28rem;
                line-height: .48rem;
                background: #f2f2f2;
                padding-left: .3rem;
                color: #717171;
            }
            ul {
                li {
                    height: 60px;
                    box-sizing: border-box;
                    border-bottom: 1px solid #ddd;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    img {
                        margin: 0 .1rem 0 .2rem;
                        width: 90px;
                        height: 60px;
                        border: none;
                    }
                    div {
                        flex: 1;
                        height: 100%;
                        h3 {
                            color: #5f687a;
                            font-size: .34rem;
                            margin-top: 10px;
                        }
                        .price {
                            display: inline-block;
                            margin-top: 10px;
                            font-size: 12px;
                            color: red;
                        }
                    }
                }
            }
        }
    }
    @keyframes sideslip
        {
            from {width:0}
            to {width: 80%}
        }
</style>