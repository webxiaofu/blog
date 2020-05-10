<template>
  <div class="container-water-fall">
    <!-- <div><button @click="loadmore">loadmore</button> <button @click="mix">mix</button> <button @click="switchCol('5')">5列</button> <button @click="switchCol('8')">8列</button> <button @click="switchCol('10')">10列</button> </div> -->

    <waterfall
      :col='col'
      :width="210"
      :gutterWidth="10"
      :data="data"
      @loadmore="loadmore"
      @scroll="scroll"
    >
      <template>
        <div
          class="cell-item"
          v-for="(item,index) in data"
          :key="index"
        >
          <div class="text">
            <!-- <h1>Lorem ipsum.</h1> -->
            <img
              v-if="item.src"
              :src="item.src"
              :preview="0"
              alt="加载错误"
            />
            <!-- <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken
              meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            <div class="dots"> <span></span> <span></span> <span></span> </div> -->
          </div>
        </div>
      </template>
    </waterfall>

  </div>

</template>
<script>
//import vueWaterfallEasy from "vue-waterfall-easy";
import api from '../../../api/api'
export default {
  data() {
    return {
      data: [
        /* {
          src: "https://weiliicimg1.pstatp.com/weili/l/253957035422646351.webp",
          type: "aaa",
          
        },
        {
          src: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1026668437,1418066994&fm=26&gp=0.jpg",
          type: "bbb",
          
        },
        {
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587768795945&di=035e409b5614ac78ef5947cdc6e173a2&imgtype=0&src=http%3A%2F%2Fekladata.com%2FrH9kxnIwwCkV53pKR1rP5ObLwKw%40900x675.jpg",
          type: "asdeas",
         
        },
        {
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587768795945&di=acc80a5079fce4ec4e38a60b6f17ba88&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Faa959e941c66e31f3da571f6cbad1cae257d0bef53fc7-aP5jpl_fw658",
          type: "asd",
          
        },
        {
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587768795944&di=c563a8dfa4ff0cac395734779e32a404&imgtype=0&src=http%3A%2F%2Fwww.christian-roux.ch%2Fpanorama%2F2560px%2F108153_Marnand%2528VD%2529Vaches_Note3Pano_Cont-50_s10h15.jpg",
          type: "asd",
          
        },
        {
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587768795943&di=67aa0fd9ddc2a5759b1dc64cdd8a8ba2&imgtype=0&src=http%3A%2F%2Fimages.china.cn%2Fattachement%2Fjpg%2Fsite1002%2F20170811%2Ff44d307d8f121af7ab0c37.jpg",
          type: "aaa"
        },
        {
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587768877753&di=36241de03c0d21edf873fc1a72783f34&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1385540885%2C1667910511%26fm%3D214%26gp%3D0.jpg",
          type: "bbb"
        },
        {
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587768906712&di=ffd7f5736e0a5b9a59d0771e4e3c6ffe&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1134703187%2C2054437120%26fm%3D214%26gp%3D0.jpg",
          type: "asdeas"
        },
        {
          src: "https://icweiliimg1.pstatp.com/weili/l/254124805435162706.webp",
          type: "asd"
        },
        {
          src: "https://icweiliimg9.pstatp.com/weili/l/264546182801653992.webp",
          type: "asd"
        },
        {
          src: "https://weiliicimg1.pstatp.com/weili/l/253957035422646351.webp",
          type: "aaa"
        },
        {
          src: "https://icweiliimg9.pstatp.com/weili/l/882585560001675415.webp",
          type: "bbb"
        },
        {
          src: "https://icweiliimg6.pstatp.com/weili/l/459515063605919803.webp",
          type: "asdeas"
        },
        {
          src: "https://icweiliimg1.pstatp.com/weili/l/254124805435162706.webp",
          type: "asd"
        },
        {
          src: "https://icweiliimg9.pstatp.com/weili/l/264546182801653992.webp",
          type: "asd"
        },
        {
          src: "https://weiliicimg1.pstatp.com/weili/l/253957035422646351.webp",
          type: "aaa"
        },
        {
          src: "https://icweiliimg9.pstatp.com/weili/l/882585560001675415.webp",
          type: "bbb"
        },
        {
          src: "https://icweiliimg6.pstatp.com/weili/l/459515063605919803.webp",
          type: "asdeas"
        },
        {
          src: "https://icweiliimg1.pstatp.com/weili/l/254124805435162706.webp",
          type: "asd"
        },
        {
          src: "https://icweiliimg9.pstatp.com/weili/l/264546182801653992.webp",
          type: "asd"
        },
        {
          src: "https://weiliicimg1.pstatp.com/weili/l/253957035422646351.webp",
          type: "aaa"
        },
        {
          src: "https://icweiliimg9.pstatp.com/weili/l/882585560001675415.webp",
          type: "bbb"
        },
        {
          src: "https://icweiliimg6.pstatp.com/weili/l/459515063605919803.webp",
          type: "asdeas"
        },
        {
          src: "https://icweiliimg1.pstatp.com/weili/l/254124805435162706.webp",
          type: "asd"
        },
        {
          src: "https://icweiliimg9.pstatp.com/weili/l/264546182801653992.webp",
          type: "asd"
        },
        {
          src: "https://weiliicimg1.pstatp.com/weili/l/253957035422646351.webp",
          type: "aaa"
        },
        {
          src: "https://icweiliimg9.pstatp.com/weili/l/882585560001675415.webp",
          type: "bbb"
        },
        {
          src: "https://icweiliimg6.pstatp.com/weili/l/459515063605919803.webp",
          type: "asdeas"
        },
        {
          src: "https://icweiliimg1.pstatp.com/weili/l/254124805435162706.webp",
          type: "asd"
        },
        {
          src: "https://icweiliimg9.pstatp.com/weili/l/264546182801653992.webp",
          type: "asd"
        } */
      ],
      col: 3, // request param
      width: 210,
      type:this.$route.params.type,
      page:{
        page:1,
        pagesize:20
      }
    };
  },

  created() {
    //console.log(this.itemWidth, this.gutterWidth);
    this.getPicturesByType()
  },
  computed: {
    itemWidth() {
      return 138 * 0.5 * (document.documentElement.clientWidth / 375); //#rem布局 计算宽度
    },
    gutterWidth() {
      return 9 * 0.5 * (document.documentElement.clientWidth / 375); // #rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
    }
  },
  methods: {
    scroll(scrollData) {
      console.log(scrollData);
    },
    switchCol(col) {
      this.col = col;
      console.log(this.col);
    },
    loadmore(index) {
      console.log(index);
      console.log("aaaaaa");
      this.page.page+=1
      this.getPicturesByType()
      //this.data = this.data.concat(this.data);
    },
    getPicturesByType(){

      api.togetAllImgByType(this.page.page,this.page.pagesize,this.type).then((result) => {
        console.log(result)
        if(result.data.status == 1){
          this.data=this.data.concat(result.data.data)
          this.$previewRefresh()
        }
      }).catch((err) => {
        
      });
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.vue-waterfall {
  margin-left: 24px;
  .cell-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}

</style>