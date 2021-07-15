<template>
  <div class="add-new-page">
        <header-bar title="새 목표추가" left></header-bar>
        <div class="form-area">
            <div class="row">
                <input type="text" placeholder="목표를 설정해주세요.">
                <p class="rule">* 목표를 작성해주세요</p>
            </div>
            <div class="row">
                <input type="text" placeholder="달성시 리워드를 적어주세요.">
                <p class="rule">* 달성시 리워드를 작성해주세요</p>
            </div>
            <div class="row">
                <input type="text" placeholder="지켜야할 규칙1.">
                <p class="rule">* 규칙을 작성해주세요</p>
            </div>
            <div class="row">
                <input type="text" placeholder="지켜야할 규칙2.">
                <p class="rule">* 규칙을 작성해주세요</p>
            </div>
            <div class="row">
                <input type="text" placeholder="지켜야할 규칙3.">
                <p class="rule">* 규칙을 작성해주세요</p>
            </div>

            <div class="slider-bar">
                <p>스탬프 개수를 설정해주세요.</p>

                <input id="slider" type="range" min="0" max="100" step="5" value="0"> 
            </div>

            <div class="type-btn flex-sb">
                <button
                    v-for="(item, i) in stampType"
                    :key="item.id"
                    @click="checkTypeBtn(i)"
                    :class="{active : i == activeType}"
                >
                {{ item.label }}
                </button>
            </div>

            <p class="type-info" v-if="activeType == 0">혼자하기는 셀프로 목표 설정하고 달성합니다.</p>
            <p class="type-info" v-else>
                같이하기는 함께 목표를 설정하고 <br>
                참여자에게 스티커를 줄수 있습니다. <br>
                아래 추가버튼을 눌러 참여자를 추가하세요
            </p>

            <div
                v-show="activeType == 1" 
                class="add-friend-area"
            >
                <div class="row add-friend">
                    <input type="text" placeholder="친구의 이름을 작성해주세요.">
                    <button type="button" class="remove-firend-btn" @click="removeName">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
                <button type="button" class="add-firend-btn" @click="addName">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>

        <button type="submit" class="save-btn" @click="saveBtn">완료</button>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'

export default {
    components:{
        HeaderBar,
    },
    data(){
        return{
            activeType: 0,
            stampType: [
                {label: '혼자하기', value: 0},
                {label: '같이하기', value: 1}
            ]
        }
    },
    methods:{
        saveBtn(){
            console.log('save');
            }, 
        checkTypeBtn(i){
            this.activeType = i;
        },
        addName(){
            console.log('add name');
        }
    }
}
</script>

<style lang="scss" scoped>
.add-new-page{
    position: relative;
    .form-area{
        padding: 0px 20px 20px;
        overflow-y: scroll;
        height: calc(100vh - 128px);
        .row{
            padding: 15px 0 0;
            input{
                box-sizing: border-box;
                padding: 12px 18px;
                width: 100%;
                font-size: 14px;
                border-radius: 22px;
                background: #fff9d8;
            }
            // &:first-child{
            //     padding: 0;
            // }
            .rule{
                font-size: 12px;
                color: #ff4444;
                padding: 10px 15px 0px;
                display: none;
            }
        }
        .slider-bar{
            padding: 30px 10px 20px;
            p{
                font-size: 16px;
            }
            #slider{
                margin-top: 30px;
                appearance:none;
                width: 100%;
                height: 5px;
                outline: none;
                // margin: 10px 0;
                border-radius: .25rem;
                background-color: #efefef;
                // background-image: linear-gradient(#9e6957, #9e6957);
            
                &::-webkit-slider-thumb{
                    appearance: none;
                    background: url('../../assets/img/whale-puple.svg') no-repeat;
                    // width: 65px;
                    width: 15px;
                    height: 15px;
                    background-color: #fdca6f;
                    border: .25rem solid #fdca6f;
                    border-radius: 7px;
                    cursor: pointer;
                }
            }
        }
        .type-btn{
            padding: 10px 0;
            width: 100%;
            button{
                background: #efefef;
                color: #757575;
                // background: #fff;
                // color: #fdca6f;
                // border: 1px solid #fdca6f;
                padding: 12px 18px;
                border-radius: 30px;
                font-size: 14px;
                width: 48%;
                &.active{
                    background: #fdca6f;
                    color: #fff;
                }
            }
        }
        .type-info{
            font-size: 14px;
            color: #6d5de8;
            padding: 10px;
            text-align: center;
        }
    }
    .add-friend-area{
        text-align: center;
        padding: 10px 0 20px;
        .add-friend{
            position: relative;
            .remove-firend-btn{
                position: absolute;
                right: 0;
                background: #fff;
                box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
                // background: #6d5de8;
                // width: 60px;
                // height: 60px;
                border-radius: 30px;
                .fa-minus{
                    font-size: 22px;
                    color: #6d5de8;
                    padding: 10px 11px 9px;
                }
            }
        }
        .add-firend-btn{
            margin: 20px 0;
            background: #cbd0ff;
            border-radius: 30px;
            .fa-plus{
                font-size: 34px;
                color: #fff;
                padding: 10px 12px;
            }
        }
    }
    .save-btn{
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        padding: 16px 0;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #d5d5d5;
        color: #fff;
        &.active{
            background: #6d5de8;
            color: #fff;
        }
    }
}
</style>