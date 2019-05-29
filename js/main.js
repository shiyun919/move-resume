//把代码写到#code和style标签里
function writeCode(prefix, code, fn){
	let docCode = document.querySelector('#code')
	//docCode.innerHTML = prefix
	let n = 0
	console.log('设置闹钟')
	let id = setInterval(()=>{
		n += 1
		console.log('开始写代码')
		docCode.innerHTML = prefix + code.substring(0, n)
		docCode.innerHTML = Prism.highlight(docCode.innerHTML, Prism.languages.css, 'css');
		styleTag.innerHTML = prefix + code.substring(0, n)
		docCode.scrollTop = docCode.scrollHeight  //等价于docCode.scrollTop = 10000
		console.log('一轮')
		if(n >= code.length){
			window.clearInterval(id)
			fn.call()
		}
	},40)
}

//写一个markdown格式自我介绍
function writeMarkdown(prefix, markdown, fn){
	let docPaper = document.querySelector('#paper>.content')
	let n = 0
	let id = setInterval(()=>{
		n += 1
		docPaper.innerHTML = prefix + markdown.substring(0, n)
		docPaper.scrollTop = docPaper.scrollHeight  
		if(n >= markdown.length){
			window.clearInterval(id)
			fn.call()
		}
	},30)
}

var result1 =  `/*
* 面试官您好，我是石云
* 我将以动画的形式来介绍我自己
* 只用文字介绍太单调了
* 我就用代码介绍吧
* 首先准备一些样式
*/

* {
   transition: all 1s; 
}

html{
   color: #fff;
}

/* 给盒子加个边框 */
#code {
   width:47.5%;  
   border: 1px solid #fff;
   padding: 20px;
   font-size: 14px;
   height:95%;
   overflow: auto;
   position: fixed;
   left: 20px;
}

/* 我需要一点代码高亮 */
.token.selector {
   color: rgb(133, 153, 0);
}
.token.property {
   color:rgb(187, 137, 0);
}
.token.punctuation {
	color: yellow;
}
.token.function {
   color: rgb(42, 161, 152);
}

/* 加点3D效果 炫酷一下 */
#code {
   transform: rotate(360deg);
}

/* 好了，现在可以正式开始 */
/* 首先准备一张白纸，请看右边 */
#paper {
   width:47.5%;
   background: #fff;
   position: fixed;
   right:10px;
   font-size:14px;
   color: #333;
   padding: 20px;
   margin: 0px 10px;
   height: 95%;
   overflow: auto;
}

/* 于是我就可以在白纸上简单介绍我自己了 */
`
var result2 = `
/*
 * 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`
var md = `
## 自我介绍
我叫石云，
1991年9月19日出生，
大专-毕业于武汉工程大学-电子信息工程技术专业，
从事前端工作1年，
希望于贵公司应聘前端开发岗位

## 技能介绍
- 熟悉HTML/CSS3
- 熟悉javaScript
- 熟悉Bootstrap框架/Vue框架/React框架
- 熟练使用图形设计软件photoshop/Axure

## 项目介绍
1. canvas画板
2. 快捷导航
3. Apple-Style轮播
4. 今塑网-小程序

## 联系方式
- 手机 18930811995
- QQ 1280752762
- Email 1280752762@qq.com
`
var result3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`
writeCode('', result1, ()=>{
	console.log('哦，你执行完了，接下来执行下一个函数')
	createPaper(()=>{
		writeMarkdown('', md, ()=>{
			writeCode(result1, result2, ()=>{
				convertMarkdownToHtml(()=>{
					writeCode(result1 + result2, result3, ()=>{
						console.log('所有代码执行完成')
					})
				})
			})
		})
	})
})


function createPaper(fn){
	var paper = document.createElement('div')
	paper.id = 'paper'
	var content = document.createElement('pre')
	content.className = 'content'
	paper.appendChild(content)
	document.body.appendChild(paper)
	fn.call()
}

function convertMarkdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn.call()
}




















