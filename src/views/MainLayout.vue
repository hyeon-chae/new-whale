<template>
    <div class="main-layout">
        <header-bar></header-bar>
        <router-view/>
        <div class="tool-bar"></div>
    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'

export default {
    components:{
        HeaderBar
    },
}
</script>

<style lang="scss" scoped>

</style>