<template>
    <div class="carDetail">
        <div class="img">
            <img :src="carDetailData.CoverPhoto" alt="">
            <span>{{carDetailData.pic_group_count}}张照片</span>
        </div>
        <div class="info">
            <p>{{carDetailData.market_attribute.dealer_price}}</p>
            <p>指导价{{carDetailData.market_attribute.official_refer_price}}</p>
            <div class="action">
                <button>{{carDetailData.BottomEntranceTitle}}</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState({
      carDetailData: (state: any) => state.home.carDetailData
    })
  },
  methods: {
    ...mapActions({
      getCarDetailData: "home/getCarDetailData"
    })
  },
  created() {
    this.getCarDetailData({
      SerialID: 2046
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
     width: 50%;
      position: absolute;
      right: 0.1rem;
      top: 0.22rem;
      button {
           width: 50%;
        background: #00afff;
        color: #fff;
      }
    }
  }
}
</style>
