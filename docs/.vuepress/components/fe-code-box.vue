<template>
  <div class="code-content">
    <iframe :srcdoc="htmlCode" class="iframe-content"></iframe>
    <div class="toolbar">
      <div>
        <div v-show="isExpand">
          <span class="icon-wp operate-btn" @click="reset"><i class="iconfont">&#xe607;</i>重置</span>
          <span class="icon-wp operate-btn" @click="edit()" v-show="!isEditing"><i class="iconfont">&#xe613;</i>编辑</span>
          <span class="icon-wp operate-btn finish" @click="finish()" v-show="isEditing"><i class="iconfont">&#xe603;</i>完成</span>
        </div>
      </div>
      <span @click="toggleIsExpand" class="icon-wp toggle-btn" :class="isChange ? 'changed' : ''">
        <i class="iconfont">&#xe760;</i>
        {{ isExpand ? '收起代码' : '查看代码' }}
      </span>
    </div>
    <div v-show="isExpand" class="tabs-wp">
      <Tabs tab-position="left">
        <TabPane label="html" v-if="html" key="0">
          <pre :contenteditable="isEditing"  @keydown="addBrWhenEnter"><code v-html="highlightHtml" ref="html"></code></pre>
        </TabPane>
        <TabPane label="css" v-if="css" key="1">
          <pre :contenteditable="isEditing" @keydown="addBrWhenEnter"><code v-html="highlightCss" ref="css"></code></pre>
        </TabPane>
        <TabPane label="script" v-if="script" key="2">
          <pre :contenteditable="isEditing" @keydown="addBrWhenEnter"><code v-html="highlightJs"  ref="script"></code></pre>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import { Tabs, TabPane } from 'element-ui'
  import Prism from 'prismjs'
  import beautify, { css_beautify, html_beautify } from 'js-beautify'

  export default {
    name: "fe-code-box",
    props: {
      html: String,
      css: String,
      script: String,
    },
    components:{
      Tabs,
      TabPane
    },
    data(){
      return {
        id: '',
        isExpand: false, // 是否展开代码
        isEditing: false, // 是否正在编辑代码
        isChange: false, // 是否修改过，不管有没有修改，只要点了【编辑】，都算修改，直到点击【重置】
        editedHtml: '',
        editedCss: '',
        editedScript: ''
      }
    },
    computed: {
      htmlCode () {
        let code = ''
        if (this.isChange) {
          code = `<html><head><style>${this.editedCss}</style></head><body>${this.editedHtml}<script>${this.editedScript}<\/script></body></html>`
        } else {
          code = `<html><head><style>${this.css}</style></head><body>${this.html}<script>${this.script}<\/script></body></html>`
        }
        return code
        return `<html><head><style>${this.css}</style></head><body>${this.html}<script>${this.script}<\/script></body></html>`
      },
      highlightHtml () {
        const html = this.isChange ? this.editedHtml : this.html
        return Prism.highlight(html_beautify(html), Prism.languages.html, 'html')
      },
      highlightCss () {
        const css = this.isChange ? this.editedCss : this.css
        return Prism.highlight(css_beautify(css), Prism.languages.css, 'css')
      },
      highlightJs () {
        const script = this.isChange ? this.editedScript : this.script
        return Prism.highlight(beautify(script), Prism.languages.javascript, 'javascript')
      }
    },
    methods: {
      toggleIsExpand(){
        this.isExpand = !this.isExpand
      },
      reset () {
        Object.assign(this,{
          isChange: false,
          isEditing: false,
          editedHtml: '',
          editedCss: '',
          editedScript: ''
        })
      },
      edit(status) {
        Object.assign(this, {
          isChange: true,
          isEditing: true,
          editedHtml: this.isChange ? this.editedHtml : this.html,
          editedCss: this.isChange ? this.editedCss : this.css,
          editedScript: this.isChange ? this.editedScript : this.script
        })
      },
      finish() {
        const { html, css, script } = this.$refs
        const hT = html.innerText
        const hC = css.innerText
        const hS = script.innerText
        Object.assign(this, {
          isEditing: false,
          editedHtml: hT,
          editedCss: hC,
          editedScript: hS,
        })
        if (hT === html_beautify(this.html) && hC === css_beautify(this.css) && beautify(this.script)) {
          this.isChange = false
        }
      },
      // div或其他元素设置contenteditable为true，并且在手机端和谷歌、ie、等浏览器上，按下回车的时候，在这个div中会自动生成div或者p，而我们需要的是生成br标签
      addBrWhenEnter(e) {
        const { keyCode, target } = e
        if(keyCode === 13) {
          // 阻止默认行为
          if(e.preventDefault) {
            e.preventDefault()
          } else {
            e.returnValue = false
          }
          if(target.focus === false) {
            return false;
          }
          const br = document.createElement('br')
          // 获取光标的范围
          const sel = window.getSelection()
          const rang = sel.rangeCount > 0 ? sel.getRangeAt(0) : null
          if(rang === null) {
            return false
          }
          rang.deleteContents()
          let tempRange = rang.cloneRange()
          tempRange.selectNodeContents(target)
          tempRange.setEnd(rang.endContainer, rang.endOffset)
          const offset = tempRange.toString().length
          //chrome、safari內，尾部换行是多添加一个<br type='_moz'>
          //在行尾且不存在<br type='_moz'>时
          if(offset === target.textContent.length && target.querySelectorAll("#edit-div br[type='_moz']").length === 0) {
            const fixbr = br.cloneNode()
            fixbr.setAttribute('type', '_moz')
            rang.insertNode(fixbr)
          } else {
            // 普通情况下添加一个普通的br即可
            rang.insertNode(br)
          }
          tempRange = document.createRange()
          tempRange.selectNodeContents(target)
          tempRange.setStart(rang.endContainer, rang.endOffset)
          tempRange.setEnd(rang.endContainer, rang.endOffset);
          sel.removeAllRanges()
          sel.addRange(tempRange)
        }
      }
    },
  }
</script>

<style scoped lang="less">
  @import "~element-ui/lib/theme-chalk/index.css";
  @import "~prismjs/themes/prism-okaidia.css";
  @import "../styles/iconfont.css";
  .code-content {
    width: 100%;
    border: 1px solid #ebeef5;;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding: 20px;
    margin: 20px 0;

    .iframe-content {
      width: 100%;
      border: none;
      border-bottom: 1px solid #ebeef5;
    }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
    }

    .icon-wp {
      cursor: pointer;
      font-size: 14px;
      user-select: none;

      & > i {
        margin-right: 4px;
        font-size: 14px;
      }

      &.toggle-btn {
        color: #888b8f;
        &.changed {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            top: -2px;
            right: -7px;
            width: 4px;
            height: 4px;
            border-radius: 10px;
            border: 1px solid #757575;
            background-color: #ff7373;
            animation: colorChange infinite 1.5s;
          }
        }
      }
      &.operate-btn {
        color: #3ebaff;
        padding: 4px 6px;
        border-radius: 4px;
        transition: all .3s;
        font-size: 12px;
        &:hover {
          color: white;
          background-color: #3ebaff;
        }

        &.finish {
          color: #ffb315;
          &:hover {
            color: white;
            background-color: #ffb315;
          }
        }
      }
    }

    .tabs-wp {
      margin-top: 20px;
    }

    *[contenteditable='true'] {
      outline: none;
    }
  }

  @keyframes colorChange {
    0%{
      background-color: #ff7373;
    }
    50%{
      background-color: #ffcece;
    }
    100%{
      background-color: #ff7373;
    }
  }
</style>
