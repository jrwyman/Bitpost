(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{188:function(e,t,c){},212:function(e,t,c){},353:function(e,t,c){},354:function(e,t,c){},355:function(e,t,c){},356:function(e,t,c){},357:function(e,t,c){},358:function(e,t,c){},359:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),r=c.n(s),n=c(29),i=c.n(n),o=c(31),l=c(12),j=c(19),d=c(364);c(188);var u=function(){return Object(j.useMediaQuery)({query:"(max-width: 576px)"})?Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"row mobile-nav-links",children:[Object(a.jsx)("h1",{className:"col-4 logo",children:Object(a.jsx)("a",{href:"/",children:"Bitpost"})}),Object(a.jsxs)(d.a,{className:"col-8 drop-down",align:"center",children:[Object(a.jsxs)(d.a.Toggle,{bsPrefix:"hamburger-button btn",children:[Object(a.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(a.jsx)("i",{className:"fa fa-bars hamburger-icon"})]}),Object(a.jsxs)(d.a.Menu,{children:[Object(a.jsx)(d.a.Item,{href:"/",children:"Home"}),Object(a.jsx)(d.a.Item,{href:"/market-data",children:"Market Data"}),Object(a.jsx)(d.a.Item,{href:"/coin-list",children:"Coin List"})]})]})]})}):Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"row nav-links",children:[Object(a.jsx)("h1",{className:"col-4 logo",children:Object(a.jsx)("a",{href:"/",children:"Bitpost"})}),Object(a.jsx)("li",{className:"col-1 link",children:Object(a.jsx)(o.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"col-1 link",children:Object(a.jsx)(o.b,{to:"/market-data",children:"Market Data"})}),Object(a.jsx)("li",{className:"col-1 link",children:Object(a.jsx)(o.b,{to:"/coin-list",children:"Coin List"})})]})})},h=c(15),b=c.n(h),m=c(56),p=c(36),x=c(11),O=c(32),f=c.n(O),v=c(25),g=c.n(v),N=c(46),k=c.n(N),w=(c(212),c(122));g.a.extend(w);var y=function(e){var t=e.coin,c=Object(s.useState)(null),r=Object(x.a)(c,2),n=r[0],i=r[1],o=Object(s.useState)(null),l=Object(x.a)(o,2),j=l[0],d=l[1];function u(){return(u=Object(p.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.coingecko.com/api/v3/coins/".concat(t));case 2:c=e.sent,i(c.data.market_data.current_price.usd),d(c.data.last_updated);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[t]),Object(a.jsxs)("div",{className:"container-fluid current-price-page",align:"center",children:[Object(a.jsx)("h2",{className:"text-center",children:"The current price of ".concat(t.replace(/^\w/,(function(e){return e.toUpperCase()}))," as of ").concat(g()(j).format("L LT"))}),Object(a.jsx)("h1",{className:"current-price",children:k()(n).format("$0,0[.][00000000]")})]})},_=c(39);c(353);var M=function(e){var t=e.data,c=Object(j.useMediaQuery)({query:"(max-width: 576px)"});return Object(a.jsx)("div",{className:"container graph",children:Object(a.jsxs)(_.c,{width:c?250:400,height:c?200:400,data:t,margin:{top:5,right:20,left:10,bottom:5},children:[Object(a.jsx)(_.e,{dataKey:"priceDate"}),Object(a.jsx)(_.f,{dataKey:"price"}),Object(a.jsx)(_.d,{}),Object(a.jsx)(_.a,{stroke:"#f5f5f5"}),Object(a.jsx)(_.b,{type:"monotone",dataKey:"price",dot:!1})]})})},D=(c(354),c(122));g.a.extend(D);var S=function(e){var t=e.articles;return Object(a.jsx)("ol",{className:"news-article-list",children:Object.keys(t.hits).map((function(e){return Object(a.jsxs)("div",{className:"news-article",children:[Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:t.hits[e].url,target:"_blank",rel:"noreferrer",children:t.hits[e].title})}),Object(a.jsx)("p",{children:g()(t.hits[e].pubDate).format("L LT")}),Object(a.jsx)("p",{children:t.hits[e].content})]},e)}))})};c(355);var C=function(){var e=Object(j.useMediaQuery)({query:"(max-width: 991px)"}),t=Object(s.useState)({numResults:0,hits:[]}),c=Object(x.a)(t,2),r=c[0],n=c[1];function i(e){return{numResults:e.length,hits:e}}var o=Object(s.useState)("bitcoin"),l=Object(x.a)(o,2),d=l[0],u=l[1],h=Object(s.useState)({numResults:0,hits:[]}),O=Object(x.a)(h,2),v=O[0],N=O[1],k=Object(s.useState)({numResults:0,hits:[]}),w=Object(x.a)(k,2),_=w[0],D=w[1],C=Object(s.useState)({from:"2020-01-01",to:"2021-01-01"}),R=Object(x.a)(C,2),q=R[0],Y=R[1];function L(e){var t={numResults:0,hits:[]};return e.prices.forEach((function(e){t.hits.push({priceDate:g()(e[0]).format("L"),price:e[1]})})),t.numResults=e.prices.length,t}function Q(){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(b.a.mark((function e(){var t,c,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"get",url:" https://api.coingecko.com/api/v3/coins/markets",headers:null,params:{vs_currency:"usd",order:"market_cap_desc",per_page:100,page:1,sparkline:!1}});case 2:return t=e.sent,n(i(t.data)),c=function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"get",url:"/api/articles",params:{q:d,from:q.from,to:q.to}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=7,c();case 7:return a=e.sent,N(a.data),e.next=11,f()({method:"get",url:"https://api.coingecko.com/api/v3/coins/".concat(d,"/market_chart/range?vs_currency=usd"),params:{from:g()(q.from).unix(),to:g()(q.to).unix()}});case 11:s=e.sent,D(L(s.data));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){Y(Object(m.a)(Object(m.a)({},q),{},{from:String(e.target.value)}))}function I(e){Y(Object(m.a)(Object(m.a)({},q),{},{to:String(e.target.value)}))}return Object(s.useEffect)((function(){Q()}),[d]),Object(a.jsxs)("div",{className:"container news-feed-page",align:"center",children:[Object(a.jsx)("div",{className:"row current-price",children:Object(a.jsx)(y,{coin:d})}),Object(a.jsxs)("div",{className:"row",align:"center",children:[Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("div",{className:"container date-box",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col form-group",children:Object(a.jsxs)("label",{htmlFor:"fromDate",children:["Start ",Object(a.jsx)("input",{id:"fromDate",type:"date",value:q.from,onChange:B,placeholder:"YYYY-MM-DD"})]})}),Object(a.jsx)("div",{className:"col form-group",children:Object(a.jsxs)("label",{htmlFor:"toDate",children:["End ",Object(a.jsx)("input",{id:"toDate",type:"date",value:q.to,onChange:I,placeholder:"YYYY-MM-DD"})]})})]})}),Object(a.jsx)(M,{data:_.hits}),Object(a.jsx)("select",{className:"coin-select",onChange:function(e){u(e.target.value)},children:r.hits.map((function(e){return Object(a.jsx)("option",{value:e.id,children:"".concat(e.name," (").concat(e.symbol.toUpperCase(),")")},e.id)}))}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:Q,children:"Get Market Data"})]}),Object(a.jsx)("div",{className:e?"row articles":"col articles",children:Object(a.jsx)(S,{coin:d,articles:v})})]})]})};c(356);var R=function(){var e=Object(j.useMediaQuery)({query:"(max-width: 345px)"}),t=Object(j.useMediaQuery)({query:"(max-width: 576px)"}),c=Object(j.useMediaQuery)({query:"(max-width: 991px)"}),r=Object(s.useState)({numResults:0,hits:[]}),n=Object(x.a)(r,2),i=n[0],o=n[1];function l(e){return{numResults:e.length,hits:e}}function d(){return(d=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"get",url:" https://api.coingecko.com/api/v3/coins/markets",headers:null,params:{vs_currency:"usd",order:"market_cap_desc",per_page:100,page:1,sparkline:!1}});case 2:t=e.sent,o(l(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),Object(a.jsxs)("div",{className:e?"container mobile-coin-list":"container coin-list",children:[Object(a.jsxs)("div",{className:"row coin-headers",children:[Object(a.jsx)("div",{className:"col coin-header",children:"Coin"}),Object(a.jsx)("div",{className:"col price-header",children:"Price"}),Object(a.jsx)("div",{className:"col market-cap-header",children:"Market Cap"})]}),Object(a.jsx)("ol",{children:i.hits.map((function(e){return Object(a.jsxs)("div",{className:"row coin",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"row",children:[t?Object(a.jsx)("div",{className:"mobile-coin-rank"}):Object(a.jsx)("div",{className:"col-1 coin-rank",children:e.market_cap_rank}),c?Object(a.jsx)("div",{className:"col-1"}):Object(a.jsx)("img",{className:"col-1 coin-image",src:e.image,alt:"logo"}),Object(a.jsx)("div",{className:"col-sm",children:t?e.symbol.toUpperCase():e.name})]})}),Object(a.jsx)("div",{className:"col",children:k()(e.current_price).format("$0,0[.]00[0000]")}),Object(a.jsx)("div",{className:"col",children:t?k()(e.market_cap).format("($ 0.00 a)"):k()(e.market_cap).format("$0,0[.]00")})]})}))})]})},q=c.p+"static/media/homepagelogo.40b6f214.png";c(357);var Y=function(){var e=Object(j.useMediaQuery)({query:"(max-width: 576px)"});return Object(a.jsx)("div",{className:"container home-page",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col home-text",children:[Object(a.jsx)("h1",{className:"home-header",children:"Reliable Market Data"}),Object(a.jsx)("h3",{className:"home-subheader",children:"Free access to charts and news articles"}),Object(a.jsx)("p",{className:"home-paragraph",children:"Bitpost gives you the freedom to analyze bitcoin as well as dozens of other top cryptocurrencies with the click of a button."}),Object(a.jsx)(o.b,{to:"/market-data",className:"btn btn-primary home-button",children:"Start Here"})]}),Object(a.jsx)("div",{className:e?"row home-logo":"col home-logo",children:Object(a.jsx)("img",{src:q,alt:"home-logo"})})]})})};c(358);var L=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(u,{}),Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:Y}),Object(a.jsx)(l.a,{exact:!0,path:"/market-data",component:C}),Object(a.jsx)(l.a,{exact:!0,path:"/coin-list",component:R})]})}),Object(a.jsxs)("div",{className:"text-center footer",children:["Powered by ",Object(a.jsx)("a",{href:"https://www.coingecko.com/",children:"CoinGecko "}),"and ",Object(a.jsx)("a",{href:"https://datanews.io/",children:"Datanews.io"})]})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L,{className:"App"})}),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.844bb642.chunk.js.map