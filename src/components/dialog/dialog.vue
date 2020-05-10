<template>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <div>aaaa</div>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="sure">确 定</el-button>
  </div>
</el-dialog>
</template>
<script>
export default {
  props:{
    dialogFormVisible:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {

    }
  },
  methods:{
    sure(){
      this.dialogFormVisible = false
      this.$parent.closeDialog()
    }
  }
}
</script>
<style lang="less" scoped>

</style>