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

            <div class="stamp-area">
                <p>고래를 움직여 스탬프 개수를 설정해주세요.</p>
            </div>
        </div>

        <button type="button" class="save-btn" @click="saveBtn">완료</button>
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
        .stamp-area{
            padding: 10px 0;
            p{
                font-size: 14px;
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