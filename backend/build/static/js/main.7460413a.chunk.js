(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{181:function(e,t,c){},204:function(e,t,c){},345:function(e,t,c){},346:function(e,t,c){},347:function(e,t,c){},348:function(e,t,c){},349:function(e,t,c){},350:function(e,t,c){},351:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c(0),n=c.n(r),s=c(44),i=c.n(s),o=c(29),l=c(10),j=c(18);c(181);var d=function(){var e=Object(j.useMediaQuery)({query:"(max-width: 576px)"});return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"row nav-links",children:[Object(a.jsx)("h1",{className:"col-4 logo",children:Object(a.jsx)("a",{href:"/",children:"Bitpost"})}),Object(a.jsx)("li",{className:e?"col-1 mobile-link":"col-1 link",children:Object(a.jsx)(o.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:e?"col-1 mobile-link":"col-1 link",children:Object(a.jsx)(o.b,{to:"/market-data",children:"Market Data"})}),Object(a.jsx)("li",{className:e?"col-1 mobile-link":"col-1 link",children:Object(a.jsx)(o.b,{to:"/coin-list",children:"Coin List"})})]})})},u=c(13),h=c.n(u),m=c(54),b=c(34),p=c(9),x=c(30),O=c.n(x),f=c(24),v=c.n(f),g=c(46),N=c.n(g),k=(c(204),c(117));v.a.extend(k);var w=function(e){var t=e.coin,c=Object(r.useState)(null),n=Object(p.a)(c,2),s=n[0],i=n[1],o=Object(r.useState)(null),l=Object(p.a)(o,2),j=l[0],d=l[1];function u(){return(u=Object(b.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.coingecko.com/api/v3/coins/".concat(t));case 2:c=e.sent,i(c.data.market_data.current_price.usd),d(c.data.last_updated);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[t]),Object(a.jsxs)("div",{className:"container-fluid current-price-page",align:"center",children:[Object(a.jsx)("h2",{className:"text-center",children:"The current price of ".concat(t.replace(/^\w/,(function(e){return e.toUpperCase()}))," as of ").concat(v()(j).format("L LT"))}),Object(a.jsx)("h1",{className:"current-price",children:N()(s).format("$0,0[.][00000000]")})]})},y=c(38);c(345);var _=function(e){var t=e.data,c=Object(j.useMediaQuery)({query:"(max-width: 576px)"});return Object(a.jsx)("div",{className:"container graph",children:Object(a.jsxs)(y.c,{width:c?250:400,height:c?200:400,data:t,margin:{top:5,right:20,left:10,bottom:5},children:[Object(a.jsx)(y.e,{dataKey:"priceDate"}),Object(a.jsx)(y.f,{dataKey:"price"}),Object(a.jsx)(y.d,{}),Object(a.jsx)(y.a,{stroke:"#f5f5f5"}),Object(a.jsx)(y.b,{type:"monotone",dataKey:"price",dot:!1})]})})},M=(c(346),c(117));v.a.extend(M);var D=function(e){var t=e.articles;return Object(a.jsx)("ol",{className:"news-article-list",children:Object.keys(t.hits).map((function(e){return Object(a.jsxs)("div",{className:"news-article",children:[Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:t.hits[e].url,target:"_blank",rel:"noreferrer",children:t.hits[e].title})}),Object(a.jsx)("p",{children:v()(t.hits[e].pubDate).format("L LT")}),Object(a.jsx)("p",{children:t.hits[e].content})]})}))})};c(347);var S=function(){var e=Object(j.useMediaQuery)({query:"(max-width: 991px)"}),t=Object(r.useState)({numResults:0,hits:[]}),c=Object(p.a)(t,2),n=c[0],s=c[1];function i(e){return{numResults:e.length,hits:e}}var o=Object(r.useState)("bitcoin"),l=Object(p.a)(o,2),d=l[0],u=l[1],x=Object(r.useState)({numResults:0,hits:[]}),f=Object(p.a)(x,2),g=f[0],N=f[1],k=Object(r.useState)({numResults:0,hits:[]}),y=Object(p.a)(k,2),M=y[0],S=y[1],C=Object(r.useState)({from:"2020-01-01",to:"2021-01-01"}),R=Object(p.a)(C,2),q=R[0],Y=R[1];function Q(e){var t={numResults:0,hits:[]};return e.prices.forEach((function(e){t.hits.push({priceDate:v()(e[0]).format("L"),price:e[1]})})),t.numResults=e.prices.length,t}function E(){return(E=Object(b.a)(h.a.mark((function e(){var t,c,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({method:"get",url:" https://api.coingecko.com/api/v3/coins/markets",headers:null,params:{vs_currency:"usd",order:"market_cap_desc",per_page:100,page:1,sparkline:!1}});case 2:return t=e.sent,s(i(t.data)),c=function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({method:"get",url:"/api/articles",params:{q:d,from:q.from,to:q.to}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=7,c();case 7:return a=e.sent,N(a.data),e.next=11,O()({method:"get",url:"https://api.coingecko.com/api/v3/coins/".concat(d,"/market_chart/range?vs_currency=usd"),params:{from:v()(q.from).unix(),to:v()(q.to).unix()}});case 11:r=e.sent,S(Q(r.data));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){Y(Object(m.a)(Object(m.a)({},q),{},{from:String(e.target.value)}))}function $(e){Y(Object(m.a)(Object(m.a)({},q),{},{to:String(e.target.value)}))}return Object(r.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[d]),Object(a.jsxs)("div",{className:"container news-feed-page",align:"center",children:[Object(a.jsx)("div",{className:"row current-price",children:Object(a.jsx)(w,{coin:d})}),Object(a.jsxs)("div",{className:"row",align:"center",children:[Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("div",{className:"container date-box",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col form-group",children:Object(a.jsxs)("label",{htmlFor:"fromDate",children:["Start ",Object(a.jsx)("input",{id:"fromDate",type:"date",value:q.from,onChange:L,placeholder:"YYYY-MM-DD"})]})}),Object(a.jsx)("div",{className:"col form-group",children:Object(a.jsxs)("label",{htmlFor:"toDate",children:["End ",Object(a.jsx)("input",{id:"toDate",type:"date",value:q.to,onChange:$,placeholder:"YYYY-MM-DD"})]})})]})}),Object(a.jsx)(_,{data:M.hits}),Object(a.jsx)("select",{className:"coin-select",onChange:function(e){u(e.target.value)},children:n.hits.map((function(e){return Object(a.jsx)("option",{value:e.id,children:"".concat(e.name," (").concat(e.symbol.toUpperCase(),")")})}))})]}),Object(a.jsx)("div",{className:e?"row articles":"col articles",children:Object(a.jsx)(D,{coin:d,articles:g})})]})]})};c(348);var C=function(){var e=Object(j.useMediaQuery)({query:"(max-width: 345px)"}),t=Object(j.useMediaQuery)({query:"(max-width: 576px)"}),c=Object(j.useMediaQuery)({query:"(max-width: 991px)"}),n=Object(r.useState)({numResults:0,hits:[]}),s=Object(p.a)(n,2),i=s[0],o=s[1];function l(e){return{numResults:e.length,hits:e}}function d(){return(d=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({method:"get",url:" https://api.coingecko.com/api/v3/coins/markets",headers:null,params:{vs_currency:"usd",order:"market_cap_desc",per_page:100,page:1,sparkline:!1}});case 2:t=e.sent,o(l(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),Object(a.jsxs)("div",{className:e?"container mobile-coin-list":"container coin-list",children:[Object(a.jsxs)("div",{className:"row coin-headers",children:[Object(a.jsx)("div",{className:"col coin-header",children:"Coin"}),Object(a.jsx)("div",{className:"col price-header",children:"Price"}),Object(a.jsx)("div",{className:"col market-cap-header",children:"Market Cap"})]}),Object(a.jsx)("ol",{children:i.hits.map((function(e){return Object(a.jsxs)("div",{className:"row coin",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"row",children:[t?Object(a.jsx)("div",{className:"mobile-coin-rank"}):Object(a.jsx)("div",{className:"col-1 coin-rank",children:e.market_cap_rank}),c?Object(a.jsx)("div",{className:"col-1"}):Object(a.jsx)("img",{className:"col-1 coin-image",src:e.image,alt:"logo"}),Object(a.jsx)("div",{className:"col-sm",children:t?e.symbol.toUpperCase():e.name})]})}),Object(a.jsx)("div",{className:"col",children:N()(e.current_price).format("$0,0[.]00[0000]")}),Object(a.jsx)("div",{className:"col",children:t?N()(e.market_cap).format("($ 0.00 a)"):N()(e.market_cap).format("$0,0[.]00")})]})}))})]})},R=c.p+"static/media/homepagelogo.40b6f214.png";c(349);var q=function(){var e=Object(j.useMediaQuery)({query:"(max-width: 576px)"});return Object(a.jsx)("div",{className:"container home-page",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col home-text",children:[Object(a.jsx)("h1",{className:"home-header",children:"Reliable Market Data"}),Object(a.jsx)("h3",{className:"home-subheader",children:"Free access to charts and news articles"}),Object(a.jsx)("p",{className:"home-paragraph",children:"Bitpost gives you the freedom to analyze bitcoin as well as dozens of other top cryptocurrencies with the click of a button."}),Object(a.jsx)(o.b,{to:"/market-data",className:"btn btn-primary home-button",children:"Start Here"})]}),Object(a.jsx)("div",{className:e?"row home-logo":"col home-logo",children:Object(a.jsx)("img",{src:R,alt:"home-logo"})})]})})};c(350);var Y=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(d,{}),Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:q}),Object(a.jsx)(l.a,{exact:!0,path:"/market-data",component:S}),Object(a.jsx)(l.a,{exact:!0,path:"/coin-list",component:C})]})}),Object(a.jsxs)("div",{className:"text-center footer",children:["Powered by ",Object(a.jsx)("a",{href:"https://www.coingecko.com/",children:"CoinGecko "}),"and ",Object(a.jsx)("a",{href:"https://datanews.io/",children:"Datanews.io"})]})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(Y,{className:"App"})}),document.getElementById("root"))}},[[351,1,2]]]);
//# sourceMappingURL=main.7460413a.chunk.js.map