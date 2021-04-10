<template>
    <div class="">
        <main-list-item
            v-for="item in mainList" 
            :key="item.id"
            :item="item"
        ></main-list-item>
    </div>  
</template>

<script>
import MainListItem from '../main/MainListItem'

export default {
    components:{
        MainListItem
    },
    data(){
        return{
            mainList: [
                {
                    id: 1,
                    title:'비타민, 루테인 챙겨먹기',
                    reward:'봄 원피스 사기',
                    rules: [
                        '점심먹고 먹기',
                        '인증샷 공유하기',
                        '하루 깜박하면, 스탬프 하나 회수',
                        
                    ],
                    rate:'',
                },
                {
                    id: 2,
                    title:'하루 게임 30분만 하기',
                    reward:'달성시 용돈 오만원 추가',
                    rules: [
                        '한달간 진행',
                        '집안일 끝나고 하기',
                        '주말엔 1시간',
                        
                    ],
                    rate:'',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>