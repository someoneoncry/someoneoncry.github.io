(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);a(103);var n=a(16),r=(a(240),a(239)),c=(a(208),a(237)),o=a(210),i=a.n(o),u=a(241),s=a(212),l=a(96),m=a(1),f=a.n(m),p=a(213),d=a.n(p);var b=a(230),v=a.n(b);a(232);function j(e){var t=e.type,a=e.text;return f.a.createElement("span",null,f.a.createElement(n.a,{type:t,style:{marginRight:8}}),a)}t.default=function(e){var t=e.id,a=void 0===t?33337113:t,n=e.type,o=void 0===n?0:n,p=e.limit,b=void 0===p?10:p,O=Object(m.useState)([]),h=Object(l.a)(O,2),E=h[0],g=h[1],y=Object(m.useState)(0),w=Object(l.a)(y,2),k=w[0],S=w[1],x=Object(m.useState)(null),I=Object(l.a)(x,2),M=I[0],C=I[1],J=Object(m.useState)(!0),L=Object(l.a)(J,2),U=L[0],z=L[1],R=Object(m.useState)(!0),q=Object(l.a)(R,2),A=q[0],B=q[1];return Object(m.useEffect)(function(){!function(){var e=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.next=3,n="/comment/hot",r={id:a,offset:k,before:M,limit:b,type:o},d.a.post(n,r).then(function(e){return e.data}).then(function(e){return console.log(e),e});case 3:t=e.sent,B(t.hasMore),g(function(e){return[].concat(Object(u.a)(e),Object(u.a)(t.hotComments))}),z(!1);case 7:case"end":return e.stop()}var n,r},e)}));return function(){return e.apply(this,arguments)}}()()},[a,k,b,o,M]),f.a.createElement(v.a,{pageStart:0,initialLoad:!1,loadMore:function(){S(E.length),C(E[E.length-1].time)},hasMore:!U&&A},f.a.createElement(r.a,{itemLayout:"vertical",size:"large",dataSource:E,loading:U,renderItem:function(e){return f.a.createElement(r.a.Item,{key:e.commentId,actions:[f.a.createElement(j,{type:"star-o",text:e.startCount}),f.a.createElement(j,{type:"like-o",text:e.likedCount})],extra:f.a.createElement("img",{width:272,alt:"logo",src:e.user.avatarUrl})},f.a.createElement(r.a.Item.Meta,{avatar:f.a.createElement(c.a,{src:e.user.avatarUrl}),title:e.user.nickname,description:e.content}),e.content)}}))}}}]);
//# sourceMappingURL=4.5a16c63a.chunk.js.map