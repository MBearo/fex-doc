## 导航锚点型
导航锚点可以创建多个锚点，并指定其目标，在点击该锚点时，可以跳转到目标处。一般放在头部。

分为文字和图片两种类型，其中图片类型需要上传两张图片，二者的区别如下：
|类型|样式|选中样式|
|:--|:--|:--|
|文字|居中显示的一行文本|文本下方出现一条红色的线|
|图片|居中显示的一张小图|图片被替换为**选中图片**|

创建锚点时，可以指定锚点的列数，锚点数量不一定和列数一样，假如锚点个数为`9`个，列数为`4`列，则锚点的分配情况为`123412341`。

绑定锚点组件时，请先点击**锚点编辑**中的区块，再点击左侧**组件概览图**中的组件，**组件概览图**即为整个页面的组件缩略图。

#### 可编辑样式
---
<gls-explain :proplist="['留白','边距','背景色','颜色','字号','字重','行高','边框']"></gls-explain>