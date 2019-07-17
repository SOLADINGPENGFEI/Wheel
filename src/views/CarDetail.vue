<template>
    <div class="carDetail">
        <div class="img">
            <img :src="carDetailData.Picture" alt="">
            <span>{{carDetailData.pic_group_count}}张照片</span>
        </div>
        <div class="info">
            <p>{{carDetailData.market_attribute.dealer_price}}</p>
            <p>指导价{{carDetailData.market_attribute.official_refer_price}}</p>
            <div class="action">
                {{carDetailData.BottomEntranceTitle}}
            </div>
        </div>
        <div class="list">

            <div class="type">
                <span :class="{active:-1==navIndex}" @click="changeActive(-1,'全部')">全部</span>
                <span :class="{active:index==navIndex}" v-for="(item,index) in yearData" :key="index" 
                @click="changeActive(index,item)">{{item}}</span>
            </div>
            <div class="car_list">
                <p v-for="(v,i) in kindsData" :key="i">{{v}}</p>
                <ul v-for="item in contentData" :key="item.car_id">
                    <li>
                        <p>{{item.car_name}}</p>
                        <p></p>
                        <p></p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom">
             <p>询问底价</p>
             <p>本地经销商为你报价</p>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      navIndex: -1,
      show: false,
      contentData:[]
    };
  },
  computed: {
    ...mapState({
      carDetailData: (state: any) => state.home.carDetailData,
      yearData: (state: any) => state.home.yearData,
      kindsData: (state: any) => state.home.kindsData
    })
  },
  methods: {
    ...mapActions({
      getCarDetailData: "home/getCarDetailData"
    }),
    changeActive(index: any,item:any) {
      this.navIndex = index;
      if(item=='全部'){
         this.contentData=this.carDetailData.list
      }else{
            this.contentData=this.carDetailData.list.filter((v:any)=>{
          return v.market_attribute.year*1==item
      })
      }
     console.log(item,this.contentData)
    }
  },

  created() {
    this.getCarDetailData({
      SerialID: 1729
    });

  }
});
</script>
<style lang="scss" scoped>
.carDetail {
  width: 100%;
  height: 100%;
  .img {
    position: relative;
    height: 3.29rem;
    overflow: hidden;
    img {
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }
    span {
      position: absolute;
      bottom: 0.3rem;
      right: 0.3rem;
      color: #fff;
      padding: 1px 0.1rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.6);
      font-size: 0.24rem;
    }
  }
  .info {
    padding: 0.36rem 0.2rem 0.3rem;
    background: #fff;
    position: relative;
    p {
      padding: 0.08rem 0;
    }
    p:first-child {
      font-size: 0.36rem;
      color: red;
      font-weight: 500;
    }
    p:nth-child(2) {
      font-size: 0.26rem;
      color: silver;
    }
    .action {
      margin-top: 0.2rem;
      width: 50%;
      position: absolute;
      right: 0.1rem;
      top: 0.22rem;
      text-align: center;
      background: #00afff;
      color: #fff;
      border-radius: 0.1rem;
      font-size: 0.32rem;
      height: 0.7rem;
      line-height: 0.7rem;
    }
  }
  .list {
    .type {
      border-top: 0.15rem solid #f4f4f4;
      padding: 0 0.3rem;
      font-size: 0.32rem;
      height: 0.77rem;
      line-height: 0.77rem;
      background: #fff;
      span {
        padding-right: 0.46rem;
      }
      .active {
        color: #3aacff;
      }
    }
    .car_list{
        p{
            padding: 0 .2rem;
    height: .5rem;
    line-height: .5rem;
    font-size: .26rem;
    color: #999;
    background: #f4f4f4;
        }
        ul{
                background: #fff;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p:first-child {
      font-size: 0.32rem;
      font-weight: 500;
    }
    p:nth-child(2) {
        margin-top:.08rem;
      font-size: 0.24rem;
    }
  }
}
</style>
