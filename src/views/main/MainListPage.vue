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
// import createStore from '@/store/index'
import { mapGetters } from 'vuex'
import MainListItem from '../main/MainListItem'

export default {
    components:{
        MainListItem
    },
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters({
            mainList: 'getMainList'
        }),
    }
}
</script>

<style lang="scss" scoped>

</style>