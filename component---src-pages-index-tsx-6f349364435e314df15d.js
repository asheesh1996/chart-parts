(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(195),r=a(204),o=a(339),l=a(197),c=a(198),d=i.a.div.withConfig({displayName:"hero-banner__Container"})(["width:100%;background:",";font-size:42px;padding:30px;display:flex;flex-direction:column;justify-content:center;align-items:center;"],c.a.backgrounds.header),u=i.a.h1.withConfig({displayName:"hero-banner__Title"})(["color:",";"],c.a.palette.highlight),s=i.a.h3.withConfig({displayName:"hero-banner__Description"})(["color:",";font-weight:300;"],c.a.palette.highlight),f=function(e){var t=e.style;return n.createElement(l.StaticQuery,{query:"3978990474",render:function(e){var a=e.site.siteMetadata,i=a.title,r=a.description;return n.createElement(d,{style:t},n.createElement(u,null,i),n.createElement(s,null,r))},data:o})},h=a(340),m=i.a.div.withConfig({displayName:"below-the-fold__BoxRow"})(["display:flex;flex:1;"]),p=i.a.div.withConfig({displayName:"below-the-fold__Box"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;height:300px;"]),g=Object(i.a)(l.Link).withConfig({displayName:"below-the-fold__StyledLink"})(["font-family:",";font-weight:bold;font-size:16px;color:",";"],c.a.text.fontFamily,c.a.palette.highlight),y=function(e){var t=e.style;return n.createElement(l.StaticQuery,{query:"945863975",render:function(e){var a=e.site.siteMetadata.githubUrl;return n.createElement(m,{style:t},n.createElement(p,{style:{backgroundColor:c.a.palette.alt}},n.createElement(g,{to:"/documentation"},"Read the docs")),n.createElement(p,{style:{backgroundColor:c.a.palette.alt2}},n.createElement(g,{to:"/blog"},"What's new?")),n.createElement(p,{style:{backgroundColor:c.a.palette.alt3}},n.createElement(g,{to:a},"Browse the source")))},data:h})};a(341),a.d(t,"Container",function(){return w}),a.d(t,"BoxRow",function(){return x}),a.d(t,"Box",function(){return b}),t.default=function(){return n.createElement(w,null,n.createElement(r.a,null),n.createElement(f,{style:{flex:4}}),n.createElement(y,{style:{flex:1}}))};var w=i.a.div.withConfig({displayName:"pages__Container"})(["display:flex;flex-direction:column;flex:1;height:110%;"]),x=i.a.div.withConfig({displayName:"pages__BoxRow"})(["display:flex;"]),b=i.a.div.withConfig({displayName:"pages__Box"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;"])},197:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return h});var n=a(0),i=a.n(n),r=a(8),o=a.n(r),l=a(193),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(200),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var s=a(35);a.d(t,"parsePath",function(){return s.a});var f=i.a.createContext({}),h=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},198:function(e,t,a){"use strict";var n=a(216),i=a.n(n),r=a(217),o=a.n(r),l=new i.a(o.a).options;t.a={text:{fontFamily:l.bodyFontFamily.join(", "),lineHeight:l.baseLineHeight,highlight:"#2D882D"},palette:{primary:"#AA3939",highlight:"#FFF3B0",alt:"#335C67",alt2:"#E09F3E",alt3:"#540B0E"},backgrounds:{sidebar:"#F6F6F6",header:"#AA3939"}}},200:function(e,t,a){var n;e.exports=(n=a(203))&&n.default||n},203:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),l=a(39),c=a(1),d=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:a})};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},204:function(e,t,a){"use strict";var n=a(205),i=a(0),r=a(197),o=a(195),l=a(198),c=o.a.div.withConfig({displayName:"header__Container"})(["background:",";"],l.a.backgrounds.header),d=o.a.div.withConfig({displayName:"header__InnerContainer"})(["margin:0 auto;max-width:960;padding:1.45rem 1.0875rem;display:flex;flex-direction:row;justify-content:space-between;"]),u=o.a.div.withConfig({displayName:"header__Links"})(["display:flex;flex-direction:row;align-items:center;"]),s=o.a.h1.withConfig({displayName:"header__Title"})(["margin:0;"]),f=Object(o.a)(r.Link).withConfig({displayName:"header__TitleLink"})(["color:white;text-decoration:none;font-family:",";font-weight:100;"],l.a.text.fontFamily),h=Object(o.a)(r.Link).withConfig({displayName:"header__OuterLink"})(["color:white;margin-left:8px;margin-right:8px;font-family:",";font-weight:100;"],l.a.text.fontFamily);t.a=function(e){var t=e.logoTo,a=void 0===t?"/":t;return i.createElement(r.StaticQuery,{query:"613551944",render:function(e){var t=e.site.siteMetadata,n=t.title,r=t.githubUrl;return i.createElement(c,null,i.createElement(d,null,i.createElement(s,null,i.createElement(f,{to:a},n)),i.createElement(u,null,i.createElement(h,{to:"/"},"Home"),i.createElement(h,{to:"/documentation"},"Docs"),i.createElement(h,{to:"/blog"},"Updates"),i.createElement(h,{to:r},"Github"))))},data:n})}},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Markable",githubUrl:"https://github.com/Microsoft/Markable"}}}}},339:function(e){e.exports={data:{site:{siteMetadata:{title:"Markable",description:"A flexible, React-friendly, Grammar of Graphics for data visualization"}}}}},340:function(e){e.exports={data:{site:{siteMetadata:{githubUrl:"https://github.com/Microsoft/Markable"}}}}},341:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6f349364435e314df15d.js.map