<template>
    <div>
        <ul>
            <li v-for="(item,i) in data" :key="i">{{item}}</li>
        </ul>
        <span v-if="isTouch" class="letter">{{current}}</span>
    </div>
    
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:["data"],
    data(){
        return {
            current:'',
            isTouch:false
        }
    },
    methods:{
        touchStart(e:Event){
            //this.isTouch=true
        }
    }
})
</script>
<style lang="scss" scoped>
ul{
    position: fixed;
    z-index:99;
    top:0;
    right:0;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    li{
        font-size: .24rem;
        color:#666;
        font-weight: 500;
        padding: 0 .1rem;
        height:.4rem;
        width:.4rem;
    }
}
</style>
