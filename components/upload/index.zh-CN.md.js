webpackJsonp([123],{1906:function(t,e){t.exports={content:["section",["p","\u6587\u4ef6\u9009\u62e9\u4e0a\u4f20\u548c\u62d6\u62fd\u4e0a\u4f20\u63a7\u4ef6\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u4e0a\u4f20\u662f\u5c06\u4fe1\u606f\uff08\u7f51\u9875\u3001\u6587\u5b57\u3001\u56fe\u7247\u3001\u89c6\u9891\u7b49\uff09\u901a\u8fc7\u7f51\u9875\u6216\u8005\u4e0a\u4f20\u5de5\u5177\u53d1\u5e03\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684\u8fc7\u7a0b\u3002"],["ul",["li",["p","\u5f53\u9700\u8981\u4e0a\u4f20\u4e00\u4e2a\u6216\u4e00\u4e9b\u6587\u4ef6\u65f6\u3002"]],["li",["p","\u5f53\u9700\u8981\u5c55\u73b0\u4e0a\u4f20\u7684\u8fdb\u5ea6\u65f6\u3002"]],["li",["p","\u5f53\u9700\u8981\u4f7f\u7528\u62d6\u62fd\u4ea4\u4e92\u65f6\u3002"]]]],meta:{category:"Components",subtitle:"\u4e0a\u4f20",type:"Data Entry",title:"Upload",filename:"components/upload/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u663e\u793a\u4e0b\u8f7d\u94fe\u63a5",title:"\u663e\u793a\u4e0b\u8f7d\u94fe\u63a5"},"\u663e\u793a\u4e0b\u8f7d\u94fe\u63a5"]],["li",["a",{className:"bisheng-toc-h2",href:"#customRequest",title:"customRequest"},"customRequest"]],["li",["a",{className:"bisheng-toc-h2",href:"#IE-note",title:"IE note"},"IE note"]]],api:["section",["h2","API"],["blockquote",["p","\u670d\u52a1\u7aef\u4e0a\u4f20\u63a5\u53e3\u5b9e\u73b0\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"https://github.com/blueimp/jQuery-File-Upload/wiki"},"jQuery-File-Upload"],"\u3002"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","accept"],["td","\u63a5\u53d7\u4e0a\u4f20\u7684\u6587\u4ef6\u7c7b\u578b, \u8be6\u89c1 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"},"input accept Attribute"]],["td","string"],["td","\u65e0"]],["tr",["td","action"],["td","\u5fc5\u9009\u53c2\u6570, \u4e0a\u4f20\u7684\u5730\u5740"],["td","string","|","(file) => ",["code","Promise"]],["td","\u65e0"]],["tr",["td","directory"],["td","\u652f\u6301\u4e0a\u4f20\u6587\u4ef6\u5939\uff08",["a",{title:null,href:"https://caniuse.com/#feat=input-file-directory"},"caniuse"],"\uff09"],["td","boolean"],["td","false"]],["tr",["td","beforeUpload"],["td","\u4e0a\u4f20\u6587\u4ef6\u4e4b\u524d\u7684\u94a9\u5b50\uff0c\u53c2\u6570\u4e3a\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u82e5\u8fd4\u56de ",["code","false"]," \u5219\u505c\u6b62\u4e0a\u4f20\u3002\u652f\u6301\u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\uff0cPromise \u5bf9\u8c61 reject \u65f6\u5219\u505c\u6b62\u4e0a\u4f20\uff0cresolve \u65f6\u5f00\u59cb\u4e0a\u4f20\u3002",["strong","\u6ce8\u610f\uff1aIE9 \u4e0d\u652f\u6301\u8be5\u65b9\u6cd5"],"\u3002"],["td","(file, fileList) => ",["code","boolean | Promise"]],["td","\u65e0"]],["tr",["td","customRequest"],["td","\u901a\u8fc7\u8986\u76d6\u9ed8\u8ba4\u7684\u4e0a\u4f20\u884c\u4e3a\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u4e0a\u4f20\u5b9e\u73b0"],["td","Function"],["td","\u65e0"]],["tr",["td","data"],["td","\u4e0a\u4f20\u6240\u9700\u53c2\u6570\u6216\u8fd4\u56de\u4e0a\u4f20\u53c2\u6570\u7684\u65b9\u6cd5"],["td","object","|","(file) => object"],["td","\u65e0"]],["tr",["td","defaultFileList"],["td","\u9ed8\u8ba4\u5df2\u7ecf\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868"],["td","object","[","]"],["td","\u65e0"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","boolean"],["td","false"]],["tr",["td","fileList"],["td","\u5df2\u7ecf\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868\uff08\u53d7\u63a7\uff09\uff0c\u4f7f\u7528\u6b64\u53c2\u6570\u65f6\uff0c\u5982\u679c\u9047\u5230 ",["code","onChange"]," \u53ea\u8c03\u7528\u4e00\u6b21\u7684\u95ee\u9898\uff0c\u8bf7\u53c2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2423"},"#2423"]],["td","object","[","]"],["td","\u65e0"]],["tr",["td","headers"],["td","\u8bbe\u7f6e\u4e0a\u4f20\u7684\u8bf7\u6c42\u5934\u90e8\uff0cIE10 \u4ee5\u4e0a\u6709\u6548"],["td","object"],["td","\u65e0"]],["tr",["td","listType"],["td","\u4e0a\u4f20\u5217\u8868\u7684\u5185\u5efa\u6837\u5f0f\uff0c\u652f\u6301\u4e09\u79cd\u57fa\u672c\u6837\u5f0f ",["code","text"],", ",["code","picture"]," \u548c ",["code","picture-card"]],["td","string"],["td","'text'"]],["tr",["td","multiple"],["td","\u662f\u5426\u652f\u6301\u591a\u9009\u6587\u4ef6\uff0c",["code","ie10+"]," \u652f\u6301\u3002\u5f00\u542f\u540e\u6309\u4f4f ctrl \u53ef\u9009\u62e9\u591a\u4e2a\u6587\u4ef6\u3002"],["td","boolean"],["td","false"]],["tr",["td","name"],["td","\u53d1\u5230\u540e\u53f0\u7684\u6587\u4ef6\u53c2\u6570\u540d"],["td","string"],["td","'file'"]],["tr",["td","showUploadList"],["td","\u662f\u5426\u5c55\u793a uploadList, \u53ef\u8bbe\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u4e8e\u5355\u72ec\u8bbe\u5b9a showPreviewIcon \u548c showRemoveIcon"],["td","Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }"],["td","true"]],["tr",["td","supportServerRender"],["td","\u670d\u52a1\u7aef\u6e32\u67d3\u65f6\u9700\u8981\u6253\u5f00\u8fd9\u4e2a"],["td","boolean"],["td","false"]],["tr",["td","withCredentials"],["td","\u4e0a\u4f20\u8bf7\u6c42\u65f6\u662f\u5426\u643a\u5e26 cookie"],["td","boolean"],["td","false"]],["tr",["td","onChange"],["td","\u4e0a\u4f20\u6587\u4ef6\u6539\u53d8\u65f6\u7684\u72b6\u6001\uff0c\u8be6\u89c1 ",["a",{title:null,href:"#onChange"},"onChange"]],["td","Function"],["td","\u65e0"]],["tr",["td","onPreview"],["td","\u70b9\u51fb\u6587\u4ef6\u94fe\u63a5\u6216\u9884\u89c8\u56fe\u6807\u65f6\u7684\u56de\u8c03"],["td","Function(file)"],["td","\u65e0"]],["tr",["td","onRemove \xa0"],["td","\u70b9\u51fb\u79fb\u9664\u6587\u4ef6\u65f6\u7684\u56de\u8c03\uff0c\u8fd4\u56de\u503c\u4e3a false \u65f6\u4e0d\u79fb\u9664\u3002\u652f\u6301\u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\uff0cPromise \u5bf9\u8c61 resolve(false) \u6216 reject \u65f6\u4e0d\u79fb\u9664\u3002 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"],["td","Function(file): ",["code","boolean | Promise"]],["td","\u65e0 \xa0"]]]],["h3","onChange"],["blockquote",["p","\u4e0a\u4f20\u4e2d\u3001\u5b8c\u6210\u3001\u5931\u8d25\u90fd\u4f1a\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u3002"]],["p","\u6587\u4ef6\u72b6\u6001\u6539\u53d8\u7684\u56de\u8c03\uff0c\u8fd4\u56de\u4e3a\uff1a"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  file<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  fileList<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  event<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code","{\n  file: { /* ... */ },\n  fileList: [ /* ... */ ],\n  event: { /* ... */ },\n}"]],["ol",["li",["p",["code","file"]," \u5f53\u524d\u64cd\u4f5c\u7684\u6587\u4ef6\u5bf9\u8c61\u3002"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n   uid<span class="token punctuation">:</span> <span class="token string">\'uid\'</span><span class="token punctuation">,</span>      <span class="token comment" spellcheck="true">// \u6587\u4ef6\u552f\u4e00\u6807\u8bc6\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u8d1f\u6570\uff0c\u9632\u6b62\u548c\u5185\u90e8\u4ea7\u751f\u7684 id \u51b2\u7a81</span>\n   name<span class="token punctuation">:</span> <span class="token string">\'xx.png\'</span>   <span class="token comment" spellcheck="true">// \u6587\u4ef6\u540d</span>\n   status<span class="token punctuation">:</span> <span class="token string">\'done\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u72b6\u6001\u6709\uff1auploading done error removed</span>\n   response<span class="token punctuation">:</span> <span class="token string">\'{"status": "success"}\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u670d\u52a1\u7aef\u54cd\u5e94\u5185\u5bb9</span>\n   linkProps<span class="token punctuation">:</span> <span class="token string">\'{"download": "image"}\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u4e0b\u8f7d\u94fe\u63a5\u989d\u5916\u7684 HTML \u5c5e\u6027</span>\n<span class="token punctuation">}</span>'},["code","{\n   uid: 'uid',      // \u6587\u4ef6\u552f\u4e00\u6807\u8bc6\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u8d1f\u6570\uff0c\u9632\u6b62\u548c\u5185\u90e8\u4ea7\u751f\u7684 id \u51b2\u7a81\n   name: 'xx.png'   // \u6587\u4ef6\u540d\n   status: 'done', // \u72b6\u6001\u6709\uff1auploading done error removed\n   response: '{\"status\": \"success\"}', // \u670d\u52a1\u7aef\u54cd\u5e94\u5185\u5bb9\n   linkProps: '{\"download\": \"image\"}', // \u4e0b\u8f7d\u94fe\u63a5\u989d\u5916\u7684 HTML \u5c5e\u6027\n}"]]],["li",["p",["code","fileList"]," \u5f53\u524d\u7684\u6587\u4ef6\u5217\u8868\u3002"]],["li",["p",["code","event"]," \u4e0a\u4f20\u4e2d\u7684\u670d\u52a1\u7aef\u54cd\u5e94\u5185\u5bb9\uff0c\u5305\u542b\u4e86\u4e0a\u4f20\u8fdb\u5ea6\u7b49\u4fe1\u606f\uff0c\u9ad8\u7ea7\u6d4f\u89c8\u5668\u652f\u6301\u3002"]]],["h2","\u663e\u793a\u4e0b\u8f7d\u94fe\u63a5"],["p","\u8bf7\u4f7f\u7528 fileList \u5c5e\u6027\u8bbe\u7f6e\u6570\u7ec4\u9879\u7684 url \u5c5e\u6027\u8fdb\u884c\u5c55\u793a\u63a7\u5236\u3002"],["h2","customRequest"],["ul",["li",["p",["a",{title:null,href:"https://github.com/react-component/upload#customrequest"},"https://github.com/react-component/upload#customrequest"]]]],["h2","IE note"],["ul",["li",["p",["a",{title:null,href:"https://github.com/react-component/upload#ie89-note"},"https://github.com/react-component/upload#ie89-note"]]]]]}}});