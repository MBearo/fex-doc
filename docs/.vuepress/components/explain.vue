<template>
  <span class="explain-wp">
    <RouterLink :to="`/pages/gls/explain/#${item}`" v-for="item in $props.proplist" :key="item">
      <span class="text" @mouseenter="getTip($event,item)" @mouseleave="cancelTip">{{item}}</span>
    </RouterLink>
    <div v-if="isShowTip" v-html="content" class="explain-content" :class="isShowTip ? 'enter' : ''" :style="{left: left+'px',top: top+'px'}"/>
  </span>
</template>

<script>
export default {
  name: "explain",
  props: {
    project: String,
    proplist: Array
  },
  data(){
    return{
      content: null,
      left: 0,
      top: 0,
      isShowTip: true
    }
  },
  methods: {
    getTip: function (e,item){
      const showdown = require('showdown')
      const { width, height, left, top } = e.target.getBoundingClientRect()
      import('../../explainContent.json').then(module=>{
        const res = module.default
        const obj = res[this.$props.project].filter(a=>a.title === item)[0]
        // 配置项见 https://github.com/showdownjs/showdown/wiki/Showdown-options
        const converter = new showdown.Converter({
          "omitExtraWLInCodeBlocks":true,
          "tables":true,
          "tasklists":true
        })
        this.content = converter.makeHtml(obj.content)
        const wp = document.createElement('div')
        wp.innerHTML = this.content
        this.left = left + width - 20
        this.top = top + height + 10
        this.isShowTip = true
      })
    },
    cancelTip: function (){
      this.isShowTip = false
    }
  }
}
</script>

<style scoped lang="less">
  .explain-wp{
    position: relative;

    .text{
      position: relative;
      display: inline-block;
      margin: 0 7px;
      color: #4ba9ce;
      font-size: 14px;
      border-bottom: dashed 1px #1f999e;
      font-weight: normal;
      cursor: pointer;

      &::before{
        content: '';
        position: absolute;
        top: 0;
        right: -7px;
        width: 4px;
        height: 4px;
        border: solid 1px #757575;
        background-color: #e8ff00;
        border-radius: 50%;
        opacity: 0;
        animation: colorChange infinite 1.5s;
        transition: opacity 0.3s;
      }
      &:hover{
        color: #8dd0ea;

        &::before{
          opacity: 1;
          transition: opacity 0.3s;
        }
      }
    }

    .explain-content {
      position: fixed;
      background-color: white;
      padding: 0 12px;
      border-radius: 5px;
      box-shadow: 0 2px 5px 2px rgba(212, 209, 209, 0.3);
      z-index: 2;
      transform-origin: left top;
      pointer-events: none;

      &.enter {
        animation: enter linear 0.5s forwards;
      }
    }
  }

  @keyframes enter {
    0%{
      transform: scale(0.7) translateY(-10px);
    }
    100%{
      transform: scale(0.7) translateY(0);
    }
  }

  @keyframes colorChange {
    0%{
      background-color: #e8ff00;
    }
    50%{
      background-color: #a0ea6c;
    }
    100%{
      background-color: #e8ff00;
    }
  }
</style>
