---
html: "123"
---


## 可执行代码段测试

仅标签

<div>
<fe-code-box
    :html=" ` <button class='btn'>123</button> ` "
    :css="'.btn{color:red;}'" >
</fe-code-box>
<fe-code-box
    :html=" `<button class='btn'>456</button>` "
    :css="'.btn{color:blue;}'">
</fe-code-box>
</div>
