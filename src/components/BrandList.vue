<template>
    <div class="brandlist">
        <ul v-for="(item, index) in data" :key="index">
            <p>{{index}}</p>
            <li v-for="(value) in item" :key="value.MasterID" @click="sidebarDetail(value.MasterID)">
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
            console.log(this.$router,'...',id)
            this.$router.push({path: '/detail?MasterID='+id})
        }
    }
})
</script>


<style lang="scss" scoped>
@import '../scss/global.scss';
    .brandlist {
        width: 100%;
        height: 100%;
        ul {
            p {
                height: 20px;
                background: #f3f2f2;
                line-height: 20px;
                padding: 0 10px;
            }
            li {
                height: 50px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 0 10px;
                border-bottom: 1px solid #ccc;
                &:last-child {
                    border-bottom: none;
                }
                img {
                    width: 40px;
                    height: 40px;
                }
                span {
                    display: inline-block;
                    margin-left: 20px;
                }
            }
        }
    }
</style>