::: tip 提示
GLS系统中所有数值都是基于`750px`的设计稿。
:::

### 宽度
设置一个元素的宽度。

---

### 高度
设置一个元素的宽度。

---

### 留白
在元素**内部**创建额外的空间。

---

### 边距
在元素**外部**创建额外的空间。

---

### 颜色
设置元素的文本颜色，为16进制格式。  
![颜色设置](https://pic.lehe.com/pic/_o/e6/76/457f98b7e2b2edf6815f560f5def_398_74.cz.png)  
如图所示，可以直接输入颜色数值，也可以点击左侧小色块，打开**取色器**选取颜色。  
![取色器](https://pic.lehe.com/pic/_o/41/b6/0ccfefdb6dd420b099bbacf6a4fb_626_454.cz.png)

---

### 字号
设置字体的大小。

---

### 字重
设置字体的粗细，数值 100 到 900 大致对应于以下常用重量名称：
|数值|常用字重名称|
|:--|:--|
|100|Thin(Hairline)|
|200|ExtraLight(Ultra Light)|
|300|Light|
|400|normal|
|500|Medium|
|600|SemiBold(Demi Bold)|
|700|Bold|
|800|Extra Bold(Ultra Bold)|
|900|Black(Heavy)|

---

### 行高
设置每一行的高度，单位为`px`。

---

### 对齐
设置水平对齐方式，可从下拉框中选择 4 个可用的值。
|对齐方式|作用|
|:--|:--|
|left|与容器的左边缘对齐|
|center|水平居中|
|right|与容器的右边缘对齐|
|justify|除了最后一行，文本应隔开一定距离，以使其左、右边缘分别与容器的左右边缘对齐|

---

### 换行方式
设置文本的换行方式，即如何处理元素中的空白，有 6 个可用的值。
|换行方式|作用|
|:--|:--|
|normal|多个空格折叠成一个|
|pre-wrap|保留空格，自动换行|
|pre|保留空格，除非遇到**换行符**，否则不会自动换行|
|nowrap|多个空格折叠成一个，**不支持**换行|
|pre-line|多个空格折叠成一个，自动换行|
|inherit|继承父元素的换行方式|

---

### 背景色
设置元素的背景色，见<gls-explain :proplist="['颜色']"></gls-explain>。

---

### 边框
设置元素的边框，包括边框大小、边框类型、边框颜色。  

本系统中直接在一个文本框中填入所有的值，顺序没有要求。三种值各自的要求如下：
#### 边框大小
以`px`为单位的数值。
#### 边框类型
|类型|作用|示例|
|:--|:--|:--|
|none|没有边框|<span style="border:none 3px #cccccc;padding:3px">示例文本</span>|
|solid|实线|<span style="border:solid 3px #cccccc;padding:3px">示例文本</span>|
|dashed|虚线|<span style="border:dashed 3px #cccccc;padding:3px">示例文本</span>|
|dotted|点|<span style="border:dotted 3px #cccccc;padding:3px">示例文本</span>|
|double|双实线，在`边框大小 >= 3px`时才会体现|<span style="border:double 3px #cccccc;padding:3px">示例文本</span>|
|groove|凹槽，在边框大小和颜色满足一定条件时才会体现|<span style="border:groove 3px #cccccc;padding:3px">示例文本</span>|
|ridge|山脊，在边框大小和颜色满足一定条件时才会体现|<span style="border:ridge 3px #cccccc;padding:3px">示例文本</span>|
|inset|凹陷，在边框大小和颜色满足一定条件时才会体现|<span style="border:inset 3px #cccccc;padding:3px">示例文本</span>|
|outset|凸起，在边框大小和颜色满足一定条件时才会体现|<span style="border:outset 3px #cccccc;padding:3px">示例文本</span>|
#### 边框颜色
与<gls-explain :proplist="['颜色']"></gls-explain>不同，该边框颜色支持任意类型的颜色。

---


### 圆角
将元素的外边界边缘的角变圆。

---

### 跳转类型
给元素添加一个点击动作，点击时跳转到指定页面。  

支持的跳转类型有：
1. **无跳转**：没有点击动作。
2. **商品**：提供一个*商品 ID*，跳转到 HIGO APP 中的该商品的详情页。
3. **店铺群圈ID**：提供一个*店铺群圈 ID*，跳转到 HIGO APP 中的该店铺的主页、
4. **链接**：提供一个包含协议和域名的链接，跳转到该链接。
5. **晒单**：提供一个*晒单 ID*，跳转到 HIGO APP 中的该晒单的页面。
6. **专辑**：提供一个*专辑 ID*，跳转到 HIGO APP 中的该专辑的页面。
7. **搜索**：提供一个*搜索词*，跳转到 HIGO APP 使用该搜索词搜索到的页面。
8. **品牌页**：提供*品牌ID*和*品牌英文名*，跳转到 HIGO APP 中该品牌的页面。
9. **二维码事件**：打开小着的扫一扫功能。
10. **小着商品详情**：提供 *banner 标题*、*banner 描述*和*小着商品 ID*，跳转到小着 APP 中的该商品的详情页。
11. **小着链接**：提供 *banner 标题*、*banner 描述*和*小着链接*，跳转到小着 APP 中的该链接处。
12. **小着个人页**：提供一个*小着会员的 ID*，跳转到小着 APP 中的该用户的主页。
13. **小着灵感页**：提供一个*小着灵感的 ID*， 
14. **小着IM聊天**：

---

### 图片批量上传与设置

---

