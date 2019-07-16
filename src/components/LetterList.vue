<template>
    <div>
        <ul
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd">
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
        touchStart(e:Event):void{
            this.isTouch=true
        },
        touchMove(e:Event):void{
            //console.log('e...',e.touches[0].pageY);
            let pageY=e.touches[0].pageY;
            let letterHeight=0.4*window.innerHeight/750*100;
            let letterOffsetTop=(window.innerHeight-letterHeight*this.data.length)/2;

            let letterIndex=Math.floor((pageY-letterOffsetTop)/letterHeight);

            //处理上边界
            if(letterIndex>this.data.length-1){
                letterIndex=this.data.length-1;
            }
            console.log('letter...',this.data[letterIndex])
        this.current=this.data[letterIndex]
        },
        touchEnd(e:Event):void{
            this.isTouch=false;
            this.current='';
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
.letter{
    display:inline-block;
    width:1.6rem;
    height:1.6rem;
    background: rgba(0,0,0,.6);
    border-radius: .1rem;
    top:50%;
    left:50%;
    position: fixed;
    color:#fff;
    font-size: .8rem;
    text-align: center;
    line-height: 1.6rem;
    transform: translate(-50%,-50%,0)
}
</style>
