## 富文本组件
富文本是对普通文本样式的进一步设置，支持的功能有：
|功能|解释|
|:--|:--|
|加粗|加大字重|
|斜体|使文本向右倾斜|
|下划线|文本底部添加一条线|
|删除线|文本中间位置添加一条线|
|颜色|设置文本颜色|
|清除格式|清除所有文本的样式|
|超链接|给文本添加超链接，链接应包含协议和域名，如`https://www.baidu.com`|
|跳转|给文本添加超链接，链接为<gls-explain :proplist="['跳转类型']"></gls-explain>中的某一项|

#### 可编辑样式
---
<gls-explain :proplist="['留白','边距','颜色','字号','字重','行高','对齐','换行方式','背景色']"/></gls-explain>
其中**颜色**属性和富文本中的颜色重叠了，其中富文本编辑器中的颜色设置优先级最高。