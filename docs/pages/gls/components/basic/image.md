## 图片
生成一个图片**容器**，可在该容器中添加一个或多个图片，可选择图片的排列方向。

横向排列时，图片从左往右排列，如果宽度不够，则换行至下一行；  
纵向排列时，图片从上往下排列，如果高度不够，则换行至下一列，此时还可手动调整**容器**的宽度使其换行。

图片的上传规则参考<explain project="gls" :proplist="['图片批量上传与设置']"></explain>。  
上传完毕之后，可以点击图片，设置<explain project="gls" :proplist="['跳转类型']"></explain>。

还可以选择是否显示大图。

#### 可编辑样式
---
容器：<explain project="gls" :proplist="['留白','边距','背景色']"></explain>  
容器中的每个图片：<explain project="gls" :proplist="['边距','宽度']"></explain>
