---
{
    code1: {
        html: "<button class='btn'>123</button>",
        css: ".btn{color:red;}",
        script: "function alertSth(){alert('123')} document.getElementsByClassName('btn')[0].addEventListener('click',alertSth)"
    },
    code2: {
        html: "<button class='btn'>456</button>",
        css: ".btn{color:blue;}"
    }
} 
---

# 可执行代码

仅标签

<div>
<fe-code-box
    :html="this.$page.frontmatter.code1.html"
    :css="this.$page.frontmatter.code1.css" 
    :script="this.$page.frontmatter.code1.script"
    >
</fe-code-box>
<fe-code-box
    :html="this.$page.frontmatter.code2.html"
    :css="this.$page.frontmatter.code2.css">
</fe-code-box>
</div>
