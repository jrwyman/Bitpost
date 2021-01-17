(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{181:function(e,t,c){},204:function(e,t,c){},345:function(e,t,c){},346:function(e,t,c){},347:function(e,t,c){},348:function(e,t,c){},349:function(e,t,c){},350:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),r=c.n(n),s=c(41),i=c.n(s),o=c(43),l=c(9);c(181);var j=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"row",children:[Object(a.jsx)("li",{className:"col-1 link",children:Object(a.jsx)(o.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"col-1 link",children:Object(a.jsx)(o.b,{to:"/market-data",children:"Market Data"})}),Object(a.jsx)("li",{className:"col-1 link",children:Object(a.jsx)(o.b,{to:"/coin-list",children:"Coin List"})})]})})},d=c(13),u=c.n(d),b=c(52),h=c(30),p=c(10),m=c(31),O=c.n(m),x=c(44),f=c.n(x),v=(c(204),c(116));f.a.extend(v);var N=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(null),i=Object(p.a)(s,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.coindesk.com/v1/bpi/currentprice.json");case 2:t=e.sent,r(t.data.bpi.USD.rate),l(t.data.time.updated);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(a.jsxs)("div",{className:"container-fluid current-price-page",align:"center",children:[Object(a.jsx)("h2",{className:"text-center",children:"The current price of Bitcoin as of ".concat(f()(o).format("L LT"))}),Object(a.jsx)("h1",{className:"current-price",children:c})]})},g=c(159),k=c(35);c(345);var w=function(e){var t=e.data,c=Object(g.useMediaQuery)({query:"(max-width: 576px)"});return Object(a.jsx)("div",{className:"container graph",children:Object(a.jsxs)(k.c,{width:c?200:400,height:c?200:400,data:t,margin:{top:5,right:20,left:10,bottom:5},children:[Object(a.jsx)(k.e,{dataKey:"priceDate"}),Object(a.jsx)(k.f,{dataKey:"price"}),Object(a.jsx)(k.d,{}),Object(a.jsx)(k.a,{stroke:"#f5f5f5"}),Object(a.jsx)(k.b,{type:"monotone",dataKey:"price",dot:!1})]})})},y=(c(346),c(116));f.a.extend(y);var D=function(e){var t=e.articles;return Object(a.jsx)("ol",{className:"news-article-list",children:Object.keys(t.hits).map((function(e){return Object(a.jsxs)("div",{className:"news-article",children:[Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:t.hits[e].url,target:"_blank",rel:"noreferrer",children:t.hits[e].title})}),Object(a.jsx)("p",{children:f()(t.hits[e].pubDate).format("L LT")}),Object(a.jsx)("p",{children:t.hits[e].content})]})}))})};c(347);var S=function(){var e=Object(n.useState)({numResults:0,hits:[]}),t=Object(p.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)({numResults:0,hits:[]}),i=Object(p.a)(s,2),o=i[0],l=i[1],j=Object(n.useState)({from:"2020-01-01",to:"2021-01-01"}),d=Object(p.a)(j,2),m=d[0],x=d[1];function f(e){var t={numResults:0,hits:[]};return Object.keys(e.bpi).forEach((function(c){t.hits.push({priceDate:c,price:e.bpi[c]})})),t.numResults=Object.keys(e.bpi).length,t}function v(){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(u.a.mark((function e(){var t,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({method:"get",url:"/api/articles",params:{start:m.from,to:m.to}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,t();case 3:return c=e.sent,r(c.data),e.next=7,O()({method:"get",url:"https://api.coindesk.com/v1/bpi/historical/close.json",params:{start:m.from,end:m.to}});case 7:a=e.sent,l(f(a.data));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){x(Object(b.a)(Object(b.a)({},m),{},{from:String(e.target.value)}))}function y(e){x(Object(b.a)(Object(b.a)({},m),{},{to:String(e.target.value)}))}return Object(n.useEffect)((function(){v()}),[]),Object(a.jsxs)("div",{className:"container news-feed-page",align:"center",children:[Object(a.jsx)("div",{className:"row current-price",children:Object(a.jsx)(N,{})}),Object(a.jsxs)("div",{className:"row",align:"center",children:[Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("div",{className:"container date-box",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col form-group",children:Object(a.jsxs)("label",{htmlFor:"fromDate",children:["Start Date: ",Object(a.jsx)("input",{id:"fromDate",type:"date",value:m.from,onChange:k,placeholder:"YYYY-MM-DD"})]})}),Object(a.jsx)("div",{className:"col form-group",children:Object(a.jsxs)("label",{htmlFor:"toDate",children:["End Date: ",Object(a.jsx)("input",{id:"toDate",type:"date",value:m.to,onChange:y,placeholder:"YYYY-MM-DD"})]})})]})}),Object(a.jsx)(w,{data:o.hits}),Object(a.jsx)("button",{className:"date-box-submit",type:"submit",onClick:v,children:"Get Market Data"})]}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)(D,{articles:c})})]})]})},M=c(101),_=c.n(M);c(348);var Y=function(){var e=Object(n.useState)({numResults:0,hits:[]}),t=Object(p.a)(e,2),c=t[0],r=t[1];function s(e){return{numResults:e.length,hits:e}}function i(){return(i=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({method:"get",url:" https://api.coingecko.com/api/v3/coins/markets",headers:null,params:{vs_currency:"usd",order:"market_cap_desc",per_page:100,page:1,sparkline:!1}});case 2:t=e.sent,r(s(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(a.jsxs)("div",{className:"container coin-list",children:[Object(a.jsxs)("div",{className:"row coin-headers",children:[Object(a.jsx)("div",{className:"col coin-header",children:"Coin"}),Object(a.jsx)("div",{className:"col price-header",children:"Price"}),Object(a.jsx)("div",{className:"col market-cap-header",children:"Market Cap"})]}),Object(a.jsx)("ol",{children:c.hits.map((function(e){return Object(a.jsxs)("div",{className:"row coin",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-1 coin-name",children:e.market_cap_rank}),Object(a.jsx)("img",{className:"col-1 coin-image",src:e.image,alt:"logo"}),Object(a.jsx)("div",{className:"col",children:e.name})]})}),Object(a.jsx)("div",{className:"col",children:_()(e.current_price).format("$0,0[.]00[0000]")}),Object(a.jsx)("div",{className:"col",children:_()(e.market_cap).format("$0,0[.]00")})]})}))})]})};var C=function(){return Object(a.jsx)("div",{children:"nothing"})};c(349);var E=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(j,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:C}),Object(a.jsx)(l.a,{exact:!0,path:"/market-data",component:S}),Object(a.jsx)(l.a,{exact:!0,path:"/coin-list",component:Y})]}),Object(a.jsxs)("div",{className:"text-center",children:["Powered by",Object(a.jsx)("a",{href:"https://www.coindesk.com/price/bitcoin",children:" CoinDesk"})]})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(E,{className:"App"})}),document.getElementById("root"))}},[[350,1,2]]]);
//# sourceMappingURL=main.1c6d930c.chunk.js.map