<template>
    <div id="main">
        <box-header />
        
        <router-view />
        
        
    </div>
</template>
<script>
import header from '../views/parts/header'
export default {
    data(){
        return {

        }
    },
    components: {
        'box-header': header,
    }
}
</script>
<style lang="less" scoped>
    #main{
        
    }
</style>