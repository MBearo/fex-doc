# fex-doc
## Project setup
```
npm install
```

## Project run
```
npm run dev
```

## 注意点
1. `docs/pages` 下的直接子目录是一个 `project`，目录下的其他都可以自定义，但是一定要有一个 `explain/index.md`，用于该项目下的一些重要的名词解释。  
 这个 `explain/index.md` 的规范是：
    ```
       ### 标题
       内容
       ---
   ```
2. 不要手动修改 `docs/explainContent.json`。
3. 如果要使用 `YAML front matter` ，应在文件的开头使用，否则会将其编译为普通 markdown。
4. config.js 里如果有路径为`.../xxx/index.md`，应该写成`.../xxx/`，否则 vuePress 识别不了。

