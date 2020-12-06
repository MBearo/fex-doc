<template>
    <div class="code-content">
        <iframe :srcdoc="htmlCode" class="iframe-content"></iframe>
        <div class="toolbar">
            <div>
                <div v-show="isExpand">
                    <span class="icon-wp reset"><i class="iconfont">&#xe607;</i>重置</span>
                </div>
            </div>
            <span @click="toggleIsExpand" class="icon-wp toggle-btn">
                <i class="iconfont">&#xe760;</i>
                {{ isExpand ? '收起代码' : '查看代码' }}
            </span>
        </div>
        <div v-show="isExpand" class="tabs-wp">
            <Tabs tab-position="left">
                <TabPane label="html">
                    <pre><code v-html="highlightHtml"></code></pre>
                </TabPane>
                <TabPane label="css">
                    <pre><code v-html="highlightCss"></code></pre>
                </TabPane>
                <TabPane label="script"><div>{{this.script}}</div></TabPane>
            </Tabs>
        </div>

    </div>
</template>

<script>
    import { Tabs, TabPane } from 'element-ui'
    import Prism from 'prismjs'
    import css from 'highlight.js/lib/languages/css'

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
              isExpand: false
          }
        },
        computed: {
            htmlCode () {
                return `<html><head><style>${this.css}</style></head><body>${this.html}<script>${this.script}<\/script></body></html>`
            },
            highlightHtml () {
                return Prism.highlight(this.html, Prism.languages.html, 'html')
            },
            highlightCss () {
                return Prism.highlight(this.css, Prism.languages.css, 'css')
            }
        },
        methods: {
            toggleIsExpand(){
                this.isExpand = !this.isExpand
            }
        },
        mounted() {

        }
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
            &.reset {
                color: #3ebaff;
                padding: 6px 8px;
                border-radius: 4px;
                transition: all .3s;
                font-size: 12px;
                &:hover {
                    color: white;
                    background-color: #3ebaff;
                }
            }
        }

        .tabs-wp {
            margin-top: 20px;
        }
    }
</style>
