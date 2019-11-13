<template>
    <div id="main">
        <box-header />
        
        <router-view :key="key"></router-view>
        
        
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
    },
    computed:{
	    key(){
	        return this.$route.path + Math.random();
	    }
	}
}
</script>
<style lang="less" scoped>
    #main{
        
    }
</style>