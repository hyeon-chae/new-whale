<template>
    <ul class="bottom-nav flex-sa">
        <li 
            @click="$router.push(`${item.route}`)"
            v-for="item in navList" :key="item.id" 
            class="flex-col">
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
    background: #fff;
    // background: #fff9d8;
    box-shadow: 0 -2px 16px 0 rgba(0, 0, 0, 0.1);
    border-radius: 16px 16px 0 0;
    li{
        width: 52px;
        height: 42px;
        i{
            font-size: 22px;
            color: #6d5de8;
            // margin-bottom: 2px;
        }
        span{
            font-size: 11px;
            color: #929292;
        }
        &:nth-child(3){
            background: #fff9d8;
            // background: #fdca6f;
            padding: 10px;
            border-radius: 50%;
            width: 42px;
            height: 42px;
            box-sizing: border-box;
            // border: 1px solid #6d5de8;
        }
    }
}
</style>