"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[130],{3130:function(e,n,r){r.r(n),r.d(n,{default:function(){return R}});var t,a,i,s,o,c,l=r(5861),u=r(9439),d=r(4687),p=r.n(d),x=r(2791),h=r(7689),f=r(7961),v=r.n(f),b=r(5264),j=r(9841),g=r(168),m=r(1087),Z=r(6444),w=(0,Z.ZP)(m.OL)(t||(t=(0,g.Z)(["\ntext-decoration: none;\ncolor: #5252d4;\n\n&.active {\n    color: #eb1736;\n}\n"]))),k=Z.ZP.div(a||(a=(0,g.Z)([""]))),_=Z.ZP.img(i||(i=(0,g.Z)(["\nborder-radius: 4px;\nbox-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n"]))),P=Z.ZP.div(s||(s=(0,g.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 4px;\n"]))),y=Z.ZP.span(o||(o=(0,g.Z)(["\n    padding: 4px;\n    border-radius: 8px;\n    border: 1px solid rgba(80, 20, 20, 0.3);\n    background: rgba(80, 20, 20, 0.8);\n"]))),C=(0,Z.ZP)(m.OL)(c||(c=(0,g.Z)(["\ntext-decoration: none;\ncolor: #5252d4;\n\n&.active {\n    color: #eb1736;\n}\n"]))),O=r(184),E=function(e){var n=e.item,r=e.link;return(0,O.jsxs)(k,{children:[(0,O.jsx)(_,{src:"https://image.tmdb.org/t/p/original/".concat(n.poster_path),alt:"Poster ".concat(n.title),width:"200px","min-height":"350px"}),(0,O.jsx)("br",{}),(0,O.jsx)(C,{to:r,children:"Back"}),(0,O.jsxs)("div",{children:[(0,O.jsxs)("h1",{children:[n.title," ",n.release_date.slice(0,4)]}),(0,O.jsxs)("h2",{children:["User Score: ",Math.round(10*n.vote_average),"%"]}),(0,O.jsx)("h3",{children:"Overview"}),(0,O.jsx)("p",{children:n.overview}),(0,O.jsx)("h3",{children:"Genres"}),(0,O.jsx)(P,{children:n.genres.map((function(e){return(0,O.jsx)(y,{children:e.name},e.id)}))})]})]})},R=function(){var e,n,r=(0,h.TH)(),t=(0,x.useRef)(null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),a=(0,x.useState)(!1),i=(0,u.Z)(a,2),s=i[0],o=i[1],c=(0,x.useState)(null),d=(0,u.Z)(c,2),f=d[0],g=d[1],m=(0,h.UO)().movieId,Z=function(){var e=(0,l.Z)(p().mark((function e(n,r){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,(0,j.Z)("/3/movie/".concat(r),n);case 4:t=e.sent,g(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&b.Notify.failure("OOps! Error loading information. Please, try again!");case 12:return e.prev=12,o(!1),e.finish(12);case 15:case 16:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,x.useEffect)((function(){var e=new AbortController;return Z(e,m),function(){return e.abort()}}),[m]),(0,O.jsxs)(O.Fragment,{children:[s&&(0,O.jsx)(v(),{color:"rgb(204, 0, 0, .7)"}),f&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(E,{item:f,link:t.current}),(0,O.jsxs)("ul",{children:[(0,O.jsx)("h3",{children:"Additional information"}),(0,O.jsx)("li",{children:(0,O.jsx)(w,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(w,{to:"reviews",children:"Reviews"})})]}),(0,O.jsx)(x.Suspense,{fallback:(0,O.jsx)(v(),{color:"#eb1736"}),children:(0,O.jsx)(h.j3,{})})]})]})}},9841:function(e,n,r){var t=r(5861),a=r(4687),i=r.n(a),s=r(4569),o=r.n(s);o().defaults.baseURL="https://api.themoviedb.org";var c=function(){var e=(0,t.Z)(i().mark((function e(n,r,t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get(n,{params:{api_key:"84bdbe2f4baecea0c1be28902afc6a5b",query:t},signal:r.signal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}();n.Z=c}}]);
//# sourceMappingURL=130.084b4204.chunk.js.map