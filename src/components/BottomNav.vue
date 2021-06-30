<template>
    <ul class="bottom-nav flex-sa">
        <li 
            @click="$router.push(`${item.route}`)"
            v-for="item in navList" :key="item.id" 
            class="flex-col"
            :class="$route.name == item.routeName ? 'active' : ''">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
        </li>
    </ul> 
</template>

<script>
export default {
    props:{
        navList: Array
    },
    date(){
        return{
        
        }
    },
    methods:{
       
    }
}
</script>

<style lang="scss" scoped>
.bottom-nav{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 6px 10px 4px;
    box-sizing: border-box;
    background: #fff;
    // background: #fff9d8;
    box-shadow: 0 -2px 16px 0 rgba(0, 0, 0, 0.1);
    border-radius: 16px 16px 0 0;
    z-index: 10;
    li{
        width: 62px;
        height: 42px;
        &.active{
            i, span{
                color: #6d5de8;
            }
        }
        i{
            color: #929292;
            font-size: 22px;
            // margin-bottom: 2px;
        }
        span{
            font-size: 11px;
            color: #929292;
        }
        &:nth-child(2){
            margin-right: 30px;
        }
        &:nth-child(4){
            margin-left: 30px;
        }
        &:nth-child(3){
            position: fixed;
            bottom: 10px;
            box-shadow: 2px 2px 16px 2px rgba(0, 0, 0, 0.1);
            background: #fff9d8;
            // background: linear-gradient(69deg, #fdca6f 11%, #fff9d8 91%);;
            // background: #fdca6f;
            padding: 10px;
            border-radius: 50%;
            width: 55px;
            height: 55px;
            box-sizing: border-box;
            // border: 1px solid #6d5de8;
            i{
                color: #6d5de8;
                font-size: 26px;
            }
        }
    }
}
</style>