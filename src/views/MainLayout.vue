<template>
    <div class="main-layout">
        <header-bar :title="$route.name == '목표 리스트' ? `${$store.state.userName}님의 ${$route.name}!` : $route.name "></header-bar>

        <router-view/>

        <bottom-nav
            :navList="navList"
        ></bottom-nav>

    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import BottomNav from '@/components/BottomNav'

export default {
    components:{
        HeaderBar,
        BottomNav,
    },
    data(){
        return{
            navList: [
                {
                    icon:'fas fa-list-ul',
                    name:'List',
                    route:'/',
                    routeName:'목표 리스트'
                },
                {
                    icon:'fas fa-check-circle',
                    name:'Complete',
                    route:'/complete',
                    routeName:'완료 목표'
                },
                {
                    icon:'fas fa-plus',
                    name:'',
                    route:'/addNew',
                    routeName:''
                },
                {
                    icon:'fas fa-chart-bar',
                    name:'Report',
                    route:'/report',
                    routeName:'리포트'
                },
                {
                    icon:'fas fa-cog',
                    name:'Setting',
                    route:'/setting',
                    routeName:'마이페이지'
                },
            ],

        }
    },
    methods:{

    },
    created(){
    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>
.main-layout{
    position: relative;

}
</style>