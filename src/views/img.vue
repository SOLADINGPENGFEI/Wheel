<template>
    <div class="car-img">
        <div class="nav">
            <p>
                <span @click="chooseColor">颜色</span>
            </p>
            <p>
                <span>车款</span>
            </p>
        </div>
        <div class="main">
            <ul class="img-default" v-for="(item,index) in imgdata" :key="index">
                <li v-for="(ite,ind) in item.List" :key="ind">
                    <img :src="ite.Url.replace('{0}',3)" alt="">
                    <div class="classify" v-if="ind==0">
                        <p>{{item.Name}}</p>
                        <p>{{item.Count}}></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapState,mapMutations,mapActions} from 'vuex'
export default Vue.extend({
    methods: {
        ...mapActions({
            getImgdata: 'img/getImgdata'
        }),
        chooseColor() {
            console.log()
        }
    },
    computed: {
        ...mapState({
            imgdata: (state:any) => state.img.imgdata
        })
    },
    created() {
        this.getImgdata()
    }
})
</script>

<style lang="scss" scoped>
    .car-img {
        width: 100%;
        height: 100%;
        background: #f4f4f4;
        display: flex;
        flex-direction: column;
        .nav {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            p {
                width: 50%;
                text-align: center;
                
            }
            & p:after {
                    content: "";
                    display: inline-block;
                    padding-top: .16rem;
                    padding-right: .16rem;
                    border-top: 2px solid #ccc;
                    border-right: 2px solid #ccc;
                    -webkit-transform: rotate(135deg);
                    transform: rotate(135deg);
                    margin-left: .2rem;
                    vertical-align: 5%;
                }
        }
        .main {
             flex: 1;
             overflow-y: scroll;
              ul {
                width: 100%;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                li {
                    width: 33%;
                    height: 123px;
                    position: relative;
                    .classify {
                        width: 123px;
                        height: 123px;
                        background: rgba(27, 27, 27, 0.479);
                        color: #fff;
                        text-align: center;
                        position: absolute;
                        top: 0;
                        left: 0;
                        line-height: 40px;
                        p {
                            padding: 10px;
                        }
                    }
                     img {
                        width: 123px;
                        height: 123px;
                    }
                }
            }
        }
    }
</style>


