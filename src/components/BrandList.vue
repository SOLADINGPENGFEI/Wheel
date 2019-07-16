<template>
    <div class="brand-list">
        <ul v-for="(item, index) in data" :key="index">
            <p>{{index}}</p>
            <li v-for="(value) in item" 
                class="border-bottom"
                :key="value.MasterID" 
                @click="sidebarDetail(value.MasterID)">
                <img :src="value.CoverPhoto" :alt="value.Name">
                <span>{{value.Name}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        data: {
            type: Object,
            value: {}
        }
    },
    methods: {
        sidebarDetail(id:number) {
            this.$router.push({path: '/detail?MasterID='+id})
        }
    }
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
    width: 100%;
    background: #fff;
    p {
        background: #f0eeee;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
    }
}
li{
    height: $brand-height;
    line-height: $brand-height;
    display: flex;
    align-items: center;
    padding: 0 10px;
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