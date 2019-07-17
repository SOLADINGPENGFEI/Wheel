<template>
    <div class="car-img">
        <div class="nav">
            <p>
                <span>颜色</span>
            </p>
            <p>
                <span>车款</span>
            </p>
        </div>
        <ul class="img-default">
            <li></li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>
    .car-img {
        width: 100%;
        height: 100%;
        background: #f4f4f4;
        .nav {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            p {
                width: 50%;
                text-align: center;
                
            }
            & p:after {
                    content: "";
                    display: inline-block;
                    padding-top: .16rem;
                    padding-right: .16rem;
                    border-top: 2px solid #ccc;
                    border-right: 2px solid #ccc;
                    -webkit-transform: rotate(135deg);
                    transform: rotate(135deg);
                    margin-left: .2rem;
                    vertical-align: 5%;
                }
        }
        .img-default {
            overflow: hidden;
            position: absolute;
            background: #fff;
            top: .98rem;
            bottom: 0;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            border-bottom: .4rem solid #f4f4f4;
        }
    }
</style>


