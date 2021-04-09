<template>
  <div class="header-bar flex-sb">
    <div class="left">
      <button type="button">
        <i class="fas fa-arrow-left font-24"></i>
      </button>
    </div>
    <div class="center">
      <p></p>
    </div>
    <div class="right">
      <button type="button">
        <i class="far fa-trash-alt font-24"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {

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
  }
  .right{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>