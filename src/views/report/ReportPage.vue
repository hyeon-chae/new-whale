<template>
    <div class="report-page">
        <div class="header flex-col-start">
            <span>{{ $store.state.userName }}님</span>
            <span>현재까지 달성한 목표입니다.</span>
        </div>
        <div class="report-area ">
            <div class="">
                총 목표
            </div>
            <div class="">
                완료 목표
            </div>
            <div class="">
                현재 진행 목표
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // userName: this.$store.state.userName,
        }
    }
}
</script>

<style lang="scss" scoped>
.report-page{
    padding: 10px 20px;
    .header{
        margin-bottom: 15px;
        span{
            font-size: 22px;
            font-weight: 300;
            // border-bottom: 2px solid rgba(253, 202, 111, .4);
            // box-shadow: inset 0 -15px 0 rgba(253, 202, 111, .4);
            border-bottom: 2px solid rgba(255, 249, 216, .6);
            box-shadow: inset 0 -15px 0 rgba(255, 249, 216, .6);
            margin-bottom: 5px;
            padding: 0 2px;
        }
    }
}
</style>