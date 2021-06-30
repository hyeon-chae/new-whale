<template>
  <div class="add-new-page">
        <header-bar title="새 목표추가" left></header-bar>
        <div class="form-area">
            <div class="row">
                <input type="text" placeholder="목표를 설정해주세요.">
                <p class="rule"></p>
            </div>
            <div class="row">
                <input type="text" placeholder="달성시 리워드를 적어주세요.">
                <p class="rule"></p>
            </div>
            <div class="row">
                <input type="text" placeholder="지켜야할 규칙1.">
                <p class="rule"></p>
            </div>
            <div class="row">
                <input type="text" placeholder="지켜야할 규칙2.">
                <p class="rule"></p>
            </div>
            <div class="row">
                <input type="text" placeholder="지켜야할 규칙3.">
                <p class="rule"></p>
            </div>

            <div class="slider-bar">
                <p>고래를 움직여 스탬프 개수를 설정해주세요.</p>
                <input id="slider" type="range" min="0" max="100" step="5" value="0"> 
            </div>

            <div class="type-btn flex-sb">
                <button type="button" class="">혼자하기</button>
                <button type="button">같이하기</button>
                <p class="type-info"></p>
            </div>

            <div class="">

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
    methods:{
        saveBtn(){
            console.log('save');
        }
    }
}
</script>

<style lang="scss" scoped>
.add-new-page{
    position: relative;
    .form-area{
        padding: 10px 20px;
        .row{
            padding: 10px 0;
            input{
                box-sizing: border-box;
                padding: 12px 18px;
                width: 100%;
                font-size: 14px;
                border-radius: 22px;
                background: #fff9d8;
            }
        }
        .slider-bar{
            padding: 10px;
            p{
                font-size: 14px;
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
                    width: 15px;
                    height: 15px;
                    background-color: #292929;
                    // border: .25rem solid #929292;
                    border-radius: 7px;
                    cursor: pointer;
                }
            }
        }
        .type-btn{
            padding: 10px;
            width: 100%;
            button{
                background: #efefef;
                color: #757575;
                padding: 12px 18px;
                border-radius: 30px;
                font-size: 14px;
                width: 46%;
                &.active{
                    background: #fdca6f;
                    color: #fff;
                }
            }
        }
    }
    .save-btn{
        width: 100%;
        background: #6d5de8;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 16px 0;
        position: fixed;
        bottom: 0;
        left: 0;
    }
}
</style>