<template>
    <div class="detail">
        <div class="car">
            <div class="img" @touch="Touch">
                <img :src="Infocar.Picture" alt="">
                <span class="num">{{Infocar.pic_group_count}}张照片</span>
            </div>
            <div class="info">
                <p>{{Infocar.market_attribute.dealer_price}}</p>
                <p>指导价{{Infocar.market_attribute.official_refer_price}}</p>
                <div class="action">
                    <button>{{Infocar.BottomEntranceTitle}}</button>
                </div>
            </div>
            <div class="car-list">
                <div class="c-type">
                    <span class="active">全部</span>
                    <span v-for="(item,index) in infoYear" :key="index">
                        {{item}}
                    </span>
                </div>
                <div class="list">
                    <div class="cont" v-for="(item,index) in Infocar.list" :key="index">
                        <p class="detailMsg">{{item.exhaust_str+'/'+item.max_power_str+' '+item.inhale_type}}</p>
                        <div>
                            <p class="title">{{item.market_attribute.year}}款  {{item.car_name}}</p>
                            <p class="power">{{item.max_power+'马力'+item.gear_num+'档'+item.trans_type}}</p>
                            <p class="price">
                                <span class="refer">指导价{{item.market_attribute.official_refer_price}}</span>
                                <span class="min">{{item.market_attribute.dealer_price_min}}万起</span>
                            </p>
                            <button>{{Infocar.BottomEntranceTitle}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <p>询问底价</p>
            <p>本地经销商为你报价</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex';
export default Vue.extend({
    created() {
        
    },
    computed: {
        ...mapState({
            Infocar: (state:any) => state.home.Infocar,
            infoYear: (state:any) => state.home.infoYear
        })
    },
    methods: {
        
    }
})
</script>

<style lang="scss" scoped>
    .detail {
        width: 100%;
        height: 100%;
        .car {
            height: 100%;
            width: 100%;
            .img {
                width: 100%;
                height: 3.29rem;
                overflow: hidden;
                position: relative;
                img {
                    width: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    position: absolute;
                }
                span {
                    position: absolute;
                    bottom: .3rem;
                    right: .3rem;
                    color: #fff;
                    padding: 1px .1rem;
                    border-radius: .2rem;
                    background: rgba(0,0,0,.6);
                    font-size: .24rem;
                }
            }
            .info {
                padding: .36rem .2rem .3rem;
                background: #fff;
                position: relative;
                .action {
                    padding-top: .2rem;
                    -webkit-box-pack: justify;
                    justify-content: space-between;
                    width: 50%;
                    position: absolute;
                    right: .1rem;
                    top: .22rem;
                    button {
                        background: #00afff;
                        color: #fff;
                        border-radius: .1rem;
                        font-size: .32rem;
                        height: .7rem;
                        width: 3.45rem;
                        border: none;
                        box-sizing: border-box;
                    }
                }
            }
            .info p:first-child {
                font-size: .36rem;
                color: red;
                font-weight: 500;
            }
            .info p:nth-child(2) {
                font-size: .26rem;
                color: silver;
            }
            .car-list {
                .c-type {
                    border-top: .15rem solid #f4f4f4;
                    padding: 0 .3rem;
                    font-size: .32rem;
                    height: .77rem;
                    line-height: .77rem;
                    background: #fff;
                    span {
                        padding-right: .46rem;
                    }
                }
                .list {
                     .cont {
                         padding: 0 10px;
                         .detailMsg {
                             padding: 0 .2rem;
                             height: .5rem;
                             line-height: .5rem;
                             font-size: .26rem;
                             color: #999;
                             background: #f4f4f4;
                         }
                         div {
                             background: #fff;
                                .title {
                                    padding: 16px 10px;
                                    font-size: .3rem;
                                    line-height: 1;
                                    color: #3d3d3d;
                                }
                                .power {
                                    color: #bdbdbd;
                                    font-size: .26rem;
                                    padding: 0 .2rem;
                                }
                                .price {
                                    text-align: right;
                                    padding-bottom: .1rem;
                                    font-size: 12px;
                                    color: #818181;
                                    .refer {
                                        text-align: right;
                                        padding-bottom: .1rem;
                                        font-size: 12px;
                                        color: #818181;
                                    }
                                    .min {
                                        font-size: 18px;
                                        color: #ff2336;
                                        margin-left: 18px;
                                    }
                                }
                                button {
                                    border: none;
                                    border-top: 1px solid #eee;
                                    width: 110%;
                                    height: .8rem;
                                    font-size: .32rem;
                                    color: #00afff;
                                    background: #fff;
                                    font-weight: 500;
                                    margin-left: -.3rem;
                                }
                         }
                     }
                }
            }
        }
        .bottom {
            position: fixed;
            width: 100%;
            bottom: 0;
            z-index: 99;
            background: #3aacff;
            height: 1rem;
            color: #fff;
            text-align: center;
        }
        .bottom p:first-child {
                font-size: .32rem;
                margin-top: .12rem;
                font-weight: 500;
            }
        .bottom p:nth-child(2) {
            font-size: .24rem;
            margin-top: 5px;
        }

    }
    .active {
        color: #3aacff;
    }
</style>


