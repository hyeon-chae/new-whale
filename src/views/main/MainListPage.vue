<template>
    <div class="main-list-page">
        <div class="filter-area">
            <div class="filter" @click="checkShowAll">
                <i class="fa-check-square icon-16"
                    :class="checkAll ? 'fas' : 'far' "
                ></i>
                <span>전체보기</span>
            </div>
        </div>
        
        <div>
            <main-list-item
                @click="showListDetail(item)"
                v-show="checkAll ? item.totalRate : item.totalRate !== 100 "
                v-for="item in mainList" 
                :key="item.id"
                :item="item"
            ></main-list-item>
        </div>

        <list-item-detail
            v-show="visibleDetail"
            :listItem="listItem"
            @close="visibleDetail = false"
        ></list-item-detail>
    </div>  
</template>

<script>

import { mapGetters } from 'vuex'
import MainListItem from '../main/MainListItem'
import ListItemDetail from '../../components/ListItemDetail'

export default {
    components:{
        MainListItem,
        ListItemDetail
    },
    data(){
        return{
            checkAll: true,
            visibleDetail: false,
            listItem: {}
        }
    },
    computed:{
        ...mapGetters({
            mainList: 'getMainList'
        }),
    },
    methods:{
        checkShowAll(){
            this.checkAll = !this.checkAll;
        },
        showListDetail(item){
            this.visibleDetail = true;
            this.listItem = item;
            console.log(item);
        }
    }
}
</script>

<style lang="scss" scoped>
.main-list-page{
    height: calc(100vh - 108px);
    overflow-y: scroll;
    .filter-area{
        text-align: right;
        .filter{
            padding: 6px 20px;
            max-width: 100px;
            display: inline-block;
            i{
                color: #6d5de8;
            }
            .fa-check-square{
                margin-right: 6px;
            }
        }
    }
    .main-list-item{
        &:last-child{
            padding-bottom: 50px;
        }
    }
}
</style>