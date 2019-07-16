<template>
  <div class="home">
      <BrandList :data="brandList" />
      <LetterList :data="letterList" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BrandList from '@/components/BrandList.vue'
import LetterList from '@/components/LetterList.vue'
import {mapState,mapMutations,mapActions} from 'vuex'

export default Vue.extend({
  name: 'home',
  components: {
    BrandList,LetterList
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
    })
  },
  created() {
    this.getCardata()
  }
});
</script>
