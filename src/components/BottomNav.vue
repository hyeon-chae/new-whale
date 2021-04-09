<template>
    <ul class="bottom-nav flex-sa">
        <li v-for="item in navList" :key="item.id" class="flex-col">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
        </li>
    </ul> 
</template>

<script>
export default {
    props:{
        navList: Array
    }
}
</script>

<style lang="scss" scoped>
.bottom-nav{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px 0 6px;
    background: #fff9d8;
    border-radius: 16px 16px 0 0;
    li{
        i{
            font-size: 22px;
        }
        span{
            font-size: 11px;
            color: #929292;
        }
    }
}
</style>