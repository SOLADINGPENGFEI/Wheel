<template>
  <div class="home">
      <BrandList :data="brandList" :current="current" />
      <LetterList :data="letterList" :current.sync="current" />
      <carDetail :data="detailcar" />
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
        current: '',
        
      }
  },
  components: {
    BrandList,LetterList,
    carDetail
  },
  computed: {
      ...mapState({
        letterList: (state:any) => state.home.letterList,
        brandList: (state:any) => state.home.brandList,
        sidebar: (state:any) => state.detail.sidebar,
        detailcar: (state:any) => state.detail.detailcar
      })
  },
  methods: {
    ...mapActions({
      getCardata: 'home/getCardata',
      getDetailCars: 'detail/getDetailCars'
    })
  },
  created() {
    this.getCardata()
    let MasterID:any = this.$router.currentRoute.query.MasterID
    this.getDetailCars(MasterID)
    
  },
  mounted() {
    
  }
});
</script> 

<style lang="scss" scoped>
@import '../scss/global.scss';
.home{
  background-color: $page-background-color;
  height: 100%;
  width: 100%;
   
}
</style>
