(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),l=r(3),a=r.n(l),o=(r(9),r(10),r(11),r(4)),c=r(0),s=function(e){var t=e.tlNumber,r=e.leitnerDay;return Object(c.jsx)("div",{style:{backgroundColor:r?"white":null,width:"96%",height:"96%",alignSelf:"center",display:"grid",border:r?"solid black 1px":null,borderRadius:"40%",boxSizing:"border-box"},children:Object(c.jsx)("h1",{style:{fontSize:"11px",justifySelf:"center",alignSelf:"center"},children:t})})},d=function(e){var t=e.bgColor;return Object(c.jsx)("div",{style:{backgroundColor:t,width:"40%",height:"40%",borderRadius:"50%",alignSelf:"center",justifySelf:"center"}})},u=function(e){var t=e.bulletColor,r=e.interval;return Object(c.jsx)("div",{style:{display:"grid"},children:Object(c.jsx)(d,{bgColor:r?t:null})})},b=function(e){var t=e.leitnerDay,r=["pink","blue","green","black","yellow","purple","orange"],n={1:1,2:2,3:4,4:8,5:16,6:32,7:64};return Object(c.jsxs)("div",{style:{backgroundColor:"grey",width:"96%",height:"140px",display:"grid",margin:"0 auto",borderRadius:"5px",gridTemplateColumns:"repeat(64, 1fr)",gridTemplateRows:"repeat(8, 1fr)"},children:[function(){for(var e=[],r=0;r<64;r++)e.push(Object(c.jsx)(s,{tlNumber:r+1,leitnerDay:t===r+1},r));return e}(),function(){for(var e=[],t=1;t<8;t++){for(var i=[],l=1;l<65;l++)i.push(Object(c.jsx)(u,{bulletColor:r[t-1],interval:l%n[t]===0},l));e.push(i)}return e}()]})},g=function(e){var t=e.selected;return Object(c.jsx)("div",{style:{width:"90%",height:"90%",alignSelf:"center",justifySelf:"center",display:"grid"},children:t?Object(c.jsx)("div",{style:{width:"0",height:"0",borderLeft:"8px solid transparent",borderRight:"8px solid transparent",borderBottom:"16px solid red",alignSelf:"center",justifySelf:"center"}}):null})},h=function(e){var t=e.leitnerDay;return Object(c.jsx)("div",{style:{backgroundColor:"lightGray",width:"96%",height:"40px",display:"grid",margin:"0 auto",gridTemplateColumns:"repeat(64, 1fr)",gridTemplateRows:"repeat(1, 1fr)"},children:function(){for(var e=[],r=0;r<64;r++)e.push(Object(c.jsx)(g,{selected:t===r+1},r));return e}()})},j=function(e){var t=e.pressedMe,r=e.buttonTxt,n=e.isDisabled;return Object(c.jsx)("div",{onClick:n?null:t,style:{width:"120px",height:"50px",backgroundColor:n?"lightGrey":"beige",display:"grid",margin:"20px",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none",unselectable:"on"},children:Object(c.jsx)("h1",{style:{alignSelf:"center",justifySelf:"center",color:n?"grey":"black"},children:r})})},f=function(){var e=new Date,t=e.getDate(),r=e.getMonth(),i=JSON.parse(localStorage.getItem("mdat"));i&&r===i.currentMonth?i.currentDay:localStorage.setItem("mdat",JSON.stringify({name:"mig",leitnerDay:1,currentDay:t,currentMonth:r,studyStarted:!1}));var l=Object(n.useState)(i.leitnerDay),a=Object(o.a)(l,2),s=a[0],d=a[1];return Object(c.jsxs)("div",{style:{marginTop:"40px"},children:[Object(c.jsx)(b,{leitnerDay:s}),Object(c.jsx)(h,{leitnerDay:s}),Object(c.jsx)(j,{pressedMe:function(){d(s>63?1:s+1),localStorage.setItem("mdat",JSON.stringify({name:"mig",leitnerDay:s+1,currentDay:t,currentMonth:r,studyStarted:!1}))},isDisabled:!1,buttonTxt:"StudyNow"})]})};var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(f,{})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,a=t.getTTFB;r(e),n(e),i(e),l(e),a(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),y()}],[[13,1,2]]]);
//# sourceMappingURL=main.148e92c7.chunk.js.map