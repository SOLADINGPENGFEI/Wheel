<template>
  <div class="letterList">
      <ul @touchstart="touchStart"
          @touchmove="touchMove"
          @touchend="touend">
        <li>#</li>
        <li v-for="(item) in data" :key="item" 
        :class="current==item?'active':''">{{item}}</li>
      </ul>
      <span v-if="isTouch" class="letter">{{current}}</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      data: {
        type: Array,
        value: []
      }
    },
    data() {
      return {
        current: '',
        isTouch: false
      }
    },
    methods: {
      touchStart(e: Event):void {
        this.isTouch = true
      },
      touchMove(e: Event):void {
        // console.log(e)
        let pageY = e.touches[0].pageY
        let letterHeight = 0.4*window.innerWidth/750*100
        let letterOffsetTop = (window.innerHeight - letterHeight*this.data.length)/2

        let letterIndex = Math.floor((pageY - letterOffsetTop)/letterHeight);
        // 处理上边界
        if (letterIndex < 0){
          letterIndex = 0;
        }
        // 处理下边界
        if (letterIndex > this.data.length-1){
          letterIndex = this.data.length-1;
        }
        // console.log('letter...', this.data[letterIndex]);
        this.current = this.data[letterIndex];
      },
      touend(e: Event):void {
        this.isTouch = false
        this.current = ''
      }
    }
  })
</script>


<style lang="scss" scoped>
  ul {
    position: fixed;
    z-index: 101;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  li {
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: #666;
    font-weight: 500;
    padding: 0 .1rem;
  }
    li.active{
      width: 20px;
      height: 20px;
      line-height: 20px;
      background: #1be9f0;
      color: #fff;
      border-radius: 50%;
    }
  .letter{
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    background: rgba(0,0,0, .6);
    border-radius: .1rem;
    top: 50%;
    left: 50%;
    position: fixed;
    color: #fff;
    font-size: .8rem;
    text-align: center;
    line-height: 1.6rem;
    transform: translate3d(-50%, -50%, 0);
  }
</style>