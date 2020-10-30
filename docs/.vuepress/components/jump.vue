<template>
  <span @click="jumpTo">{{$props.text}}</span>
</template>

<script>
export default {
  name: "jump",
  props: {
    project: String,   // 项目名
    text: String,   // 文本名
    url: String   // 如果传递了一个url，可直接跳转到该url处
  },
  methods: {
    jumpTo: function (){
      const { text, url, project } = this
      console.log(window.location.href)
      if (url){
        window.location.href = url
      }
      else {
        import('../utils/jumpJson').then(module=>{
          const projectJson = module.default[project]
          let type, name
          for (let currentType in projectJson){
            if (projectJson[currentType][text]){
              type = currentType
              name = projectJson[currentType][text]
              break
            }
          }

          // 暂时先这样跳转，后续加入其他项目之后再修改
          window.location.pathname = `/pages/${project}/components/${type}/${name}.html`
        })
      }
    }
  }
}
</script>

<style scoped>
span{
  color: #db1e4b;
  cursor: pointer;
  font-weight: 500;
  margin: 0 2px;
}
</style>
