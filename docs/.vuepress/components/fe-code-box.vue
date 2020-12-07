<template>
  <div class="code-content">
    <iframe :srcdoc="htmlCode" class="iframe-content"></iframe>
    <div class="toolbar">
      <div>
        <div v-show="isExpand">
          <span class="icon-wp operate-btn"><i class="iconfont">&#xe607;</i>重置</span>
          <span class="icon-wp operate-btn" @click="edit()" v-show="!isEditing"><i class="iconfont">&#xe613;</i>编辑</span>
          <span class="icon-wp operate-btn finish" @click="finish()" v-show="isEditing"><i class="iconfont">&#xe603;</i>完成</span>
        </div>
      </div>
      <span @click="toggleIsExpand" class="icon-wp toggle-btn">
        <i class="iconfont">&#xe760;</i>
        {{ isExpand ? '收起代码' : '查看代码' }}
            </span>
        </div>
        <div v-show="isExpand" class="tabs-wp">
          <Tabs tab-position="left">
            <TabPane label="html" v-if="html">
              <pre><code v-html="highlightHtml" :contenteditable="isEditing" @input="xx"></code></pre>
            </TabPane>
            <TabPane label="css" v-if="css">
              <pre><code v-html="highlightCss"></code></pre>
            </TabPane>
            <TabPane label="script" v-if="script">
              <pre ><code v-html="highlightJs" :contenteditable="isEditing"></code></pre>
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
        console.log(this.isChange)
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
        return Prism.highlight(css_beautify(this.css), Prism.languages.css, 'css')
      },
      highlightJs () {
        return Prism.highlight(beautify(this.script), Prism.languages.javascript, 'javascript')
      }
    },
    methods: {
      toggleIsExpand(){
        this.isExpand = !this.isExpand
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
        Object.assign(this, {
          isEditing: false
        })
      },
      xx(e){
        this.editedHtml = e.target.innerText
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
      outline: none
    }
  }
</style>
