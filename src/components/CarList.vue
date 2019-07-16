<template>
    <div class="brand-list">
        <div v-for="(item, index) in data" :key="index">
            <p class="brand">{{index}}</p>
            <ul>
                <li v-for="(value) in item" :key="value.MasterID" class="border-bottom">
                    <img :src="value.CoverPhoto" :alt="value.Name">
                    <span>{{value.Name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ["data"]
})
</script>


<style lang="scss" scoped>
@import '../scss/global.scss';
.brand-list{
    height: 100%;
    overflow-y: scroll;
}
.brand{
    font-size: .28rem;
    line-height: .4rem;
    padding-left: .3rem;
    color: #aaa;
}
ul{
    padding:  0 .3rem;
    background: #fff;
}
li{
    height: $brand-height;
    line-height: $brand-height;
    display: flex;
    align-items: center;
    img{
        height: .8rem;
    }
    span{
        font-size: .32rem;
        margin-left: .4rem;
    }
    &:last-child:after{
        display: none;
    }
}
</style>