<template>
    <div class="main-layout">
        <header-bar title="김고래님의 목표!"></header-bar>

        
            
        <main-list-item
            v-for="item in mainList" 
            :key="item.id"
            :item="item"
        ></main-list-item>
        

        <bottom-nav
            :navList="navList"
        ></bottom-nav>

    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import BottomNav from '@/components/BottomNav'
import MainListItem from '../main/MainListItem'

export default {
    components:{
        HeaderBar,
        BottomNav,
        MainListItem
    },
    data(){
        return{
            navList: [
                {
                    icon:'fas fa-home',
                    name:'List',
                    route:'/',
                },
                {
                    icon:'fas fa-check-circle',
                    name:'Complete',
                    route:'',
                },
                {
                    icon:'fas fa-plus',
                    name:'',
                    route:'',
                },
                {
                    icon:'fas fa-chart-bar',
                    name:'Report',
                    route:'',
                },
                {
                    icon:'fas fa-cog',
                    name:'Setting',
                    route:'',
                },
            ],
            mainList: [
                {
                    title:'비타민, 루테인 챙겨먹기',
                    reward:'봄 원피스 사기',
                    rules: [
                        '점심먹고 먹기',
                        '인증샷 공유하기',
                        '하루 깜박하면, 스탬프 하나 회수',
                        
                    ]
                },
                {
                    title:'하루 게임 30분만 하기',
                    reward:'달성시 용돈 오만원 추가',
                    rules: [
                        '한달간 진행',
                        '집안일 끝나고 하기',
                        '주말엔 1시간',
                        
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.main-layout{
    position: relative;

}
</style>