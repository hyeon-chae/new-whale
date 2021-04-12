<template>
    <div class="">
        <main-list-item
            v-show="item.rate == 100"
            v-for="item in mainList" 
            :key="item.id"
            :item="item"
        ></main-list-item>
    </div>  
</template>

<script>
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