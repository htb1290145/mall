import BackTop from '@/components/content/backTop/BackTop.vue'

export const backClick = {
  mounted() {
    // console.log('backClick');
  },
}

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isBackTopShow: false,
    }
  },
  methods: {
    //返回顶部按钮
    backClick() {
      this.$refs.detailScroll.scrollTo(0, 0)
      // backClick();
    },
  },
}
