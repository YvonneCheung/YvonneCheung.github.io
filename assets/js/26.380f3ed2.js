(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{626:function(a,s,t){"use strict";t.r(s);var r=t(0),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[a._v("阿里云服务器安装mongodb步骤详情")])]),a._v(" "),t("h2",{attrs:{id:"安装mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mongodb"}},[a._v("#")]),a._v(" 安装mongodb")]),a._v(" "),t("ol",[t("li",[a._v("连接云服务器")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ ssh root@xx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xx\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("下载mongodb")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("curl "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("O https:"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("fastdl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("org"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("x86_64"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("7"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tgz\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("解压")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("tar zxvf mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("x86_64"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("7"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("tgz\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("移动到指定目录")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("linux"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("x86_64"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("7"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[a._v("创建数据文件夹和日志文件等")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("mkdir "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("data")]),a._v("\ntouch "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("log\ntouch "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("conf\n")])])]),t("h2",{attrs:{id:"启动mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动mongodb"}},[a._v("#")]),a._v(" 启动mongodb")]),a._v(" "),t("p",[a._v("首先进入mongo的bin目录下")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("cd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("bin\n")])])]),t("h3",{attrs:{id:"_1-第一种方式：通过参数启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一种方式：通过参数启动"}},[a._v("#")]),a._v(" 1. 第一种方式：通过参数启动")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongod "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("dbpath="),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("data")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("logpath="),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("log "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("logappend  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("port=27017 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("fork    \n")])])]),t("p",[t("strong",[a._v("非法关闭出现错误时需执行")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lock\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongod  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("repair "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("###修复")]),a._v("\n")])])]),t("h3",{attrs:{id:"_2-第二种方式：通过配置文件启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-第二种方式：通过配置文件启动"}},[a._v("#")]),a._v(" 2. 第二种方式：通过配置文件启动")]),a._v(" "),t("ul",[t("li",[a._v("打开配置文件")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("vim "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("conf\n")])])]),t("ul",[t("li",[a._v("写入配置")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("dbpath="),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("data")]),a._v("\nlogpath="),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("log\nlogappend = true \nport = 27017 \nfork = true \nauth = true\n")])])]),t("ul",[t("li",[a._v("启动")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongod "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("config "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("conf\n")])])]),t("ul",[t("li",[a._v("停止")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongod "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("shutdown "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("dbpath="),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("data")]),a._v("\n")])])]),t("h2",{attrs:{id:"阿里云安全组配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里云安全组配置"}},[a._v("#")]),a._v(" 阿里云安全组配置")]),a._v(" "),t("ul",[t("li",[a._v("打开实例列表，点击管理，")]),a._v(" "),t("li",[a._v("添加安全组规则，如图所示")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yvonnecheung/image_blog/raw/master/img/aliyun.png",alt:"aliyun"}})]),a._v(" "),t("h2",{attrs:{id:"开放端口，访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开放端口，访问"}},[a._v("#")]),a._v(" 开放端口，访问")]),a._v(" "),t("ul",[t("li",[a._v("开放端口")])]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("sbin"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("iptables "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("I INPUT "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p tcp "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("dport 27017 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("j ACCEPT\n")])])]),t("ul",[t("li",[a._v("浏览器输入地址访问：xx.xx.xx.xx:27017")]),a._v(" "),t("li",[a._v("出现下图所示，代表启动成功")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yvonnecheung/image_blog/raw/master/img/nginx.png",alt:"nginx"}})]),a._v(" "),t("blockquote",[t("p",[a._v("如果已启动成功，但仍无法访问，可能是启动在本地，可以用命令** "),t("strong",[t("strong",[a._v("ls")])]),a._v("of**** -i:27017**** "),t("strong",[a._v("查看最后监听的地址是不是_*:27017 (LISTEN)_，如果是_localhost:27017 (LISTEN)_的话，需要在配置文件中（见第二种启动方式）加入")]),a._v("bind_ip=0.0.0.0**")])])])}),[],!1,null,null,null);s.default=e.exports}}]);