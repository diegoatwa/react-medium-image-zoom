/*! For license information please see Introduction-stories-mdx.79188fa8.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/base.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,'html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nhtml,\nbody {\n  min-height: 100%;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n*:focus:not(:focus-visible) {\n  outline: none;\n}\nbody {\n  margin: 2em;\n  font-size: 1.6rem;\n  font-family: monospace;\n  line-height: 1.5;\n  color: #333;\n}\nbody,\ninput,\nbutton {\n  -webkit-font-smoothing: antialiased;\n}\nfigure {\n  margin: 0;\n}\nh1 {\n  line-height: initial;\n}\nh2 {\n  margin-top: 4rem;\n}\nimg {\n  display: block;\n  max-width: 100%;\n}\n.mw-600 {\n  max-width: 60rem;\n}\n.jk [data-rmiz-btn-zoom],\n.jk [data-rmiz-btn-unzoom],\n.jk [data-rmiz-content] img,\n.jk [data-rmiz-modal-img] {\n  cursor: default;\n}\n.change-icons [data-rmiz-btn-zoom] {\n  bottom: 10px;\n  top: initial;\n}\n.change-icons [data-rmiz-btn-zoom],\n.change-icons [data-rmiz-btn-unzoom] {\n  background-color: #fff;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);\n  color: #000;\n}\n.custom-zoom [data-rmiz-modal-overlay],\n.custom-zoom [data-rmiz-modal-img] {\n  transition-duration: 0.8s;\n  transition-timing-function: linear;\n}\n.custom-zoom [data-rmiz-modal-overlay="hidden"] {\n  background-color: rgb(56, 58, 89, 0);\n}\n.custom-zoom [data-rmiz-modal-overlay="visible"] {\n  background-color: rgb(56, 58, 89, 1);\n}\n.custom-zoom [data-rmiz-btn-unzoom] {\n  background-color: #bd93f9;\n  color: #000;\n}\n.custom-zoom [data-rmiz-btn-unzoom]:focus-visible {\n  outline-offset: 0.4rem;\n  outline: 0.2rem solid #bd93f9;\n}\n.data-uri-img [data-rmiz-btn-zoom] {\n  height: 15px;\n  padding: 3px;\n  right: -15px;\n  top: -10px;\n  width: 15px;\n  line-height: 0;\n}\n',""]),module.exports=exports},"./node_modules/css-loader/dist/runtime/api.js":function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];return list.toString=function toString(){return this.map((function(item){var content=function cssWithMappingToString(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=function toComment(sourceMap){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);return"/*# ".concat(data," */")}(cssMapping),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}(item,useSourceMap);return item[2]?"@media ".concat(item[2]," {").concat(content,"}"):content})).join("")},list.i=function(modules,mediaQuery,dedupe){"string"==typeof modules&&(modules=[[null,modules,""]]);var alreadyImportedModules={};if(dedupe)for(var i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);dedupe&&alreadyImportedModules[item[0]]||(mediaQuery&&(item[2]?item[2]="".concat(mediaQuery," and ").concat(item[2]):item[2]=mediaQuery),list.push(item))}},list}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":function(module,exports,__webpack_require__){"use strict";var isOldIE=function isOldIE(){var memo;return function memorize(){return void 0===memo&&(memo=Boolean(window&&document&&document.all&&!window.atob)),memo}}(),getTarget=function getTarget(){var memo={};return function memorize(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}}(),stylesInDom=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDom.length;i++)if(stylesInDom[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var index=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3]};-1!==index?(stylesInDom[index].references++,stylesInDom[index].updater(obj)):stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1}),identifiers.push(identifier)}return identifiers}function insertStyleElement(options){var style=document.createElement("style"),attributes=options.attributes||{};if(void 0===attributes.nonce){var nonce=__webpack_require__.nc;nonce&&(attributes.nonce=nonce)}if(Object.keys(attributes).forEach((function(key){style.setAttribute(key,attributes[key])})),"function"==typeof options.insert)options.insert(style);else{var target=getTarget(options.insert||"head");if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}return style}var replaceText=function replaceText(){var textStore=[];return function replace(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.media?"@media ".concat(obj.media," {").concat(obj.css,"}"):obj.css;if(style.styleSheet)style.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=style.childNodes;childNodes[index]&&style.removeChild(childNodes[index]),childNodes.length?style.insertBefore(cssNode,childNodes[index]):style.appendChild(cssNode)}}function applyToTag(style,options,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media?style.setAttribute("media",media):style.removeAttribute("media"),sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),style.styleSheet)style.styleSheet.cssText=css;else{for(;style.firstChild;)style.removeChild(style.firstChild);style.appendChild(document.createTextNode(css))}}var singleton=null,singletonCounter=0;function addStyle(obj,options){var style,update,remove;if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options)),update=applyToSingletonTag.bind(null,style,styleIndex,!1),remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else style=insertStyleElement(options),update=applyToTag.bind(null,style,options),remove=function remove(){!function removeStyleElement(style){if(null===style.parentNode)return!1;style.parentNode.removeChild(style)}(style)};return update(obj),function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}module.exports=function(list,options){(options=options||{}).singleton||"boolean"==typeof options.singleton||(options.singleton=isOldIE());var lastIdentifiers=modulesToDom(list=list||[],options);return function update(newList){if(newList=newList||[],"[object Array]"===Object.prototype.toString.call(newList)){for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDom[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDom[_index].references&&(stylesInDom[_index].updater(),stylesInDom.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}}},"./stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),blocks=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MDXContext=react_default.a.createContext({});function useMDXComponents(components){const contextComponents=react_default.a.useContext(MDXContext);return react_default.a.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}__webpack_require__("./stories/base.css");function _createMdxContent(props){var _components=Object.assign({h1:"h1",p:"p",a:"a",code:"code"},useMDXComponents(),props.components);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(blocks.Meta,{title:"Introduction"}),"\n",Object(jsx_runtime.jsx)(_components.h1,{children:"Introduction"}),"\n",Object(jsx_runtime.jsxs)(_components.p,{children:["This site showcases different usages of\n",Object(jsx_runtime.jsx)(_components.a,{href:"https://github.com/rpearce/react-medium-image-zoom",children:Object(jsx_runtime.jsx)(_components.code,{children:"react-medium-image-zoom"})}),",\nthe original medium.com-inspired image zooming library for React."]}),"\n",Object(jsx_runtime.jsx)(_components.p,{children:"Use the links in the sidebar to try out different features that the library\nsupports."}),"\n",Object(jsx_runtime.jsxs)(_components.p,{children:["For more info, please consult the ",Object(jsx_runtime.jsxs)(_components.a,{href:"https://github.com/rpearce/react-medium-image-zoom#readme",children:[Object(jsx_runtime.jsx)(_components.code,{children:"react-medium-image-zoom"}),"\nREADME"]}),"."]})]})}function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_Object$assign=Object.assign({},useMDXComponents(),props.components),MDXLayout=_Object$assign.wrapper;return MDXLayout?Object(jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:Object(jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return react_default.a.createElement(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react_default.a.createElement(MDXContent,null))}});__webpack_exports__.default=componentMeta},"./stories/base.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/base.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}}}]);
//# sourceMappingURL=Introduction-stories-mdx.79188fa8.iframe.bundle.js.map