const fs = require('fs')
const path = require('path')

const json = getFile()
fs.writeFileSync(path.join(__dirname, 'explainContent.json'), JSON.stringify(json))

// 文件转json
function getFile() {
    const res = {} // 最终生成的文件
    const projects = fs.readdirSync(path.join(__dirname, 'pages')) // 获取所有的项目
    // 遍历项目列表，转化md文件
    for(let i=0; i<projects.length; i++){
        let file
        try {
            file =  fs.readFileSync(path.join(__dirname, 'pages', projects[i], 'explain', 'index.md'),{ encoding: "utf-8"} )     // 读取文件
        } catch (e) {
            continue    // 如果没有md文件，就跳过
        }
        res[projects[i]] = []
        // 正则似乎不支持【成组取反，即（不出现xxx这个单词）】，而且(?=)这个东西还是从字符串的后面往前执行，所以不能一个个拿，只能先拿到整体的数据，再裁切
        const pattern = /(?<=###)[\d\D]*(?=---)/g
        const totalStr = pattern.exec(file)[0] // 匹配到的数据
        const arr = totalStr.split('---')   // 用---分开的一个个标题
        arr.forEach(item=>{
            const str = item.trim().replace(/^(\n)+|(\n)+$/,'') // 先去掉开头和结尾的多余的换行符
            const titleIndex = str.indexOf('\n') // 标题和内容是用第一个换行符分开的
            res[projects[i]].push({
                title: str.slice(0,titleIndex).replace(/^#*/g,'').trim(),   // 还有多余的#没有去掉
                content: str.slice(titleIndex,str.length).trim()    // 记得trim
            })
        })
        return res
    }
}
