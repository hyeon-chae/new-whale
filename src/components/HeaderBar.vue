<template>
  <div class="header-bar flex-sb">
    <div class="left" v-show="left">
      <button type="button" @click="$router.go(-1)">
        <i class="fas fa-arrow-left font-24"></i>
      </button>
    </div>
    <div class="center" >
      <p>{{title}}</p>
    </div>
    <div class="right" v-show="right">
      <button type="button">
        <i class="far fa-trash-alt font-24"></i>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
        title : String,
        left: Boolean,
        right: Boolean
    },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.header-bar{
  width: 100%;
  position: relative;
  height: 56px;
  .left{
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  .center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: bold;
  }
  .right{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>