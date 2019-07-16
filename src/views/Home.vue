<template>
  <div class="home">
      <BrandList :data="brandList" @click="onShow"/>
      <LetterList :data="letterList" />
      <carDetail  />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BrandList from '@/components/BrandList.vue'
import LetterList from '@/components/LetterList.vue'
import carDetail from '@/components/carDetail.vue'
import {mapState,mapMutations,mapActions} from 'vuex'

export default Vue.extend({
  name: 'home',
  data() {
      return {
        isShow: false
      }
  },
  components: {
    BrandList,LetterList,carDetail
  },
  computed: {
      ...mapState({
        letterList: (state:any) => state.home.letterList,
        brandList: (state:any) => state.home.brandList
      })
  },
  methods: {
    ...mapActions({
      getCardata: 'home/getCardata'
    }),
    onShow() {
      console.log(this.isShow)
      this.isShow = true
    }
  },
  created() {
    this.getCardata()
  }
});
</script> 

<style lang="scss" scoped>
@import '../scss/global.scss';
.home{
  background-color: $page-background-color;
  height: 100%;
}
</style>
