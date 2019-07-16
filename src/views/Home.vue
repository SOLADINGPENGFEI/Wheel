<template>
  <div class="home">
    <CarList :data="carsData"/>
    <LetterList :data="letterData" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CarList from '@/components/CarList.vue';
import LetterList from '@/components/LetterList.vue';
import {mapState,mapActions} from 'vuex';

export default Vue.extend({
  name: 'home',
  components: {
    CarList,
    LetterList
  },
  
  computed:{
    ...mapState({
      carsData:(state:any)=>state.home.carsData,
      letterData:(state:any)=>state.home.letterData
    })
  },
  methods:{
    ...mapActions({
      getCarsData:"home/getCarsData"
    })
  },
  created(){
    this.getCarsData();
  },
});
</script>
<style lang="scss" scoped>
@import '../scss/reset.scss';

 

</style>
