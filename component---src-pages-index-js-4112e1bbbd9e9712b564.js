(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);a(78),a(28),a(81),a(41),a(79),a(80);var n=a(8),r=a.n(n),o=a(0),c=a.n(o),i=a(184),l=a.n(i),s=a(155),u=(a(53),a(186),a(146)),m=a.n(u),d=function(e){var t=e.post;return c.a.createElement(m.a,{to:t.node.frontmatter.path},c.a.createElement("div",{className:"post-item",key:t.node.frontmatter.path},c.a.createElement("div",null,c.a.createElement("span",{className:"badge badge-"+t.node.frontmatter.category},t.node.frontmatter.category),c.a.createElement("small",null,t.node.frontmatter.date)),c.a.createElement("div",{className:"title"},t.node.frontmatter.title),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.node.excerpt}})))},f=(a(228),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.list;return c.a.createElement(c.a.Fragment,null,e.map(function(e,t){if("/404/"!==e.node.path)return c.a.createElement(d,{post:e,key:t})}))},t}(o.Component)),p=(a(230),function(e){var t=e.list,a=e.active;return c.a.createElement("div",{className:"categories"},c.a.createElement("h3",null,"카테고리"),c.a.createElement("ul",null,c.a.createElement("li",{key:""},c.a.createElement(m.a,{to:"/"},"all")),t.map(function(e){return c.a.createElement("li",{key:e},c.a.createElement(m.a,{to:"?category="+e},e===a&&c.a.createElement("i",{className:"fa fa-arrow-right mr-2","aria-hidden":"true"}),e))})))});a(232);a.d(t,"IndexPage",function(){return g}),a.d(t,"blogQuery",function(){return h});var g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={posts:[],categories:[],category:""},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props.data.allMarkdownRemark.edges,t=[];l.a.forEach(e,function(e){t.push(e.node.frontmatter.category)});var a={posts:e,categories:t=l.a.uniq(t),category:""},n=this.props.location.search;n.indexOf("category")>-1?a.category=n.replace("?category=",""):a.category="",this.setState(a)},a.componentWillReceiveProps=function(e){var t=e.location.search,a="";t.indexOf("category")>-1&&(a=t.replace("?category=","")),this.setState({category:a})},a.render=function(){var e=this.state,t=e.posts,a=e.categories,n=e.category;return c.a.createElement(s.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 order-md-12 text-right"},c.a.createElement(p,{list:a,active:n})),c.a.createElement("div",{className:"col-md-9 order-md-1 posts"},c.a.createElement(f,{list:""===n?t:t.filter(function(e){return e.node.frontmatter.category===n})})))))},t}(o.Component),h=(t.default=g,"3990422814")},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(146),l=a.n(i);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(27);a.d(t,"waitForRouteChange",function(){return s.c});var u=a(147),m=a.n(u);a.d(t,"PageRenderer",function(){return m.a});var d=a(38);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e){e.exports={data:{site:{siteMetadata:{title:"MAJAC Blog"}}}}},150:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(52),l=a(1),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(149),r=a(0),o=a.n(r),c=a(4),i=a.n(c),l=a(156),s=a.n(l),u=a(148),m=a(146),d=a.n(m),f=(a(151),function(){return o.a.createElement("nav",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-auto mr-auto logo"},o.a.createElement(d.a,{to:"/"},"마작 기술 블로그")),o.a.createElement("div",{className:"col-auto"},o.a.createElement(d.a,{className:"nav-link profile",to:"/resume"},o.a.createElement("img",{width:"40px",id:"navProfilePic",src:"https://s.gravatar.com/avatar/ac88fef73fb20037feaf38ff349b129c?s=500&r=pg"}),o.a.createElement("span",null,"HungSun LIM"))))))}),p=(a(153),function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"86343720",render:function(e){return o.a.createElement("div",{className:"layout"},o.a.createElement(s.a,{title:e.site.siteMetadata.title},o.a.createElement("html",{lang:"ko"})),o.a.createElement(f,null),o.a.createElement("div",{className:"main"},t),o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"title"},"마작 기술 블로그"),o.a.createElement("div",{className:"links"},o.a.createElement("a",{href:"https://github.com/majac6",target:"_blank",rel:"noopener noreferrer"},"GitHub"),o.a.createElement("a",{href:"https://www.facebook.com/majac6",target:"_blank",rel:"noopener noreferrer"},"Facebook"),o.a.createElement("a",{href:"https://www.linkedin.com/in/hungsun-lim-a37824106/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))))))},data:n})});p.propTypes={children:i.a.node.isRequired};t.a=p},228:function(e,t,a){},230:function(e,t,a){},232:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-4112e1bbbd9e9712b564.js.map