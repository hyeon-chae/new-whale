<template>
    <div class="main-layout">
        <header-bar title="김고래님의 목표!"></header-bar>

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
                },
                {
                    icon:'fas fa-check-circle',
                    name:'Complete',
                    route:'/complete',
                },
                {
                    icon:'fas fa-plus',
                    name:'',
                    route:'/addNew',
                },
                {
                    icon:'fas fa-chart-bar',
                    name:'Report',
                    route:'/report',
                },
                {
                    icon:'fas fa-cog',
                    name:'Setting',
                    route:'/setting',
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.main-layout{
    position: relative;

}
</style>