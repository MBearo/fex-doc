# 流程图

我们使用了[vuepress-plugin-flowchart](https://github.com/ulivz/vuepress-plugin-flowchart)插件来绘制流程图，虽然有些图形画不出来，但是已经能满足大部分需求。  
在阅读文档时，请以本文档为准，因为官方的文档说明有一些坑，这是踩坑后的结果。  
有些官网的说明我也没有引用，是认为没有必要或者我也不清楚，如果需要自定义或者更强大的功能，可以去他们的 github 看看。

这是所有的可能出现的元素。
@flowstart
st=>start: 开始
e=>end: 结束
process1=>operation: 操作1
process2=>operation: 操作2
io=>inputoutput: 输入输出
child=>subroutine: 子程序
cond=>condition: 选择?
para=>parallel: 平行任务

st(right)->process1->io->cond
cond(yes)->para
para(path1,bottom)->process2->e
para(path2)->e
cond(no)->child
@flowend

## 用法
```
@flowstart

//流程图代码

@flowend
```
如果发现你的流程图少了很多图形，多半是图形逻辑出现错误，被自动忽视掉了，应好好检查一下逻辑。

## 语法
### 声明
`[Variable]=>[type]: [Text]`  

`Variable`是变量名  
`Text`是自定义文本  
`type`是图形的类型，有以下几种：
|type|图形|解释|
|-|-|-|
|start|开始按钮|一个流程的开始，唯一|
|end|结束按钮|一个流程的开始，唯一|
|operation|操作|执行某些操作|
|inputoutput|输入输出|在此处执行一些输入输出的操作|
|subroutine|子程序|一些和本流程关系不大的，或者是需要额外解释的流程|
|condition|选择|执行 yes/no 的选择语句|
|parallel|平行任务|执行一些可以同时发生的任务|

### 关系
普通：
```
[变量1](方向)->[变量2]

// 方向包括：left、right、top、bottom，可选项
```  

选择语句：
```
[选择语句变量](yes[,方向])->[变量1]
[选择语句变量](no[,方向])->[变量2]

// 官网上说这里的 yes 和 no 可以自定义文本，实测并不可以，只能是 yes/no
// 方向是可选项
```

平行语句：
```
[平行语句变量](path1[,方向])->[变量1]
[平行语句变量](path2[,方向])->[变量2]

// 方向是可选项
```
