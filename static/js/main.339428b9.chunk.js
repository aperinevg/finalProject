(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),i=a(55),l=a.n(i),r=(a(63),a(64),a(13)),o=a(17),d=a.n(o),j=a(3),b=a(2),u=a.n(b),m=function(e){var t=e.type,a=c.a.createRef(),n=c.a.createRef();return Object(s.jsxs)("div",{className:u.a.input,children:[Object(s.jsxs)("div",{className:u.a.inputForm,children:[Object(s.jsx)("input",{className:u.a.inputData,ref:a,type:"text",placeholder:"purchase"}),Object(s.jsx)("input",{className:u.a.inputData,ref:n,type:"text",placeholder:"cost"})]}),Object(s.jsx)("a",{className:u.a.inputButton,onClick:function(){var s=a.current.value,c=+n.current.value;s&&c&&(e.addElement(s,c,t),a.current.value="",n.current.value="")},children:"Add"}),Object(s.jsx)("a",{className:u.a.inputButton,onClick:function(){e.saveData(t)},children:"Save"})]})},p=a(56),x=function(e){var t={labels:e.lables,datasets:[{data:e.data,backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]};return Object(s.jsx)("div",{className:u.a.pieChart,children:Object(s.jsx)(p.Pie,{data:t,options:{responsive:!0,maintainAspectRatio:!0}})})},O=function(e){return Object(s.jsxs)("div",{className:u.a.item,children:[Object(s.jsxs)("div",{className:u.a.itemForm,children:[Object(s.jsx)("span",{className:u.a.itemText,children:e.text}),Object(s.jsx)("span",{className:u.a.itemValue,children:e.value+" \u0440\u0443\u0431."})]}),Object(s.jsx)("button",{onClick:function(){var t=e.text;e.deleteElement(t,e.type)},children:"Delete"})]})},h=function(e){var t,a;return e.labels&&(t=e.labels.map((function(t,a){return Object(s.jsx)(O,{index:a,type:e.type,deleteElement:e.deleteElement,text:t,value:e.data[e.labels.indexOf(t)],saved:e.saved},a)}))),e.saved&&(a=Object(s.jsx)("div",{className:u.a.itemSave,children:"Saved"})),Object(s.jsxs)("div",{className:u.a.container,children:[Object(s.jsx)("h3",{className:u.a.title,children:e.title}),Object(s.jsxs)("div",{className:u.a.piePage,children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:u.a.history,children:[t,a]}),Object(s.jsx)(m,{type:e.type,lables:e.labels,data:e.data,addElement:e.addElement,saveData:e.saveData})]}),Object(s.jsx)(x,{lables:e.labels,data:e.data})]})]})},v=function(e){var t=Math.round(10*e.dataExpenses.reduce((function(e,t){return e+t}),0))/10,a=Math.round(10*e.dataIncome.reduce((function(e,t){return e+t}),0))/10,n={lables:["Expenses","Income"],data:[t,a]};return Object(s.jsxs)("div",{className:u.a.container,children:[Object(s.jsx)("h3",{className:u.a.titleTotal,children:e.title}),Object(s.jsxs)("div",{className:u.a.piePage,children:[Object(s.jsxs)("div",{className:u.a.historyTotal,children:[Object(s.jsxs)("div",{className:u.a.historyTotalText,children:[Object(s.jsx)("p",{className:u.a.historyTotalTitle,children:"Total Income"}),a+" \u0440\u0443\u0431"]}),Object(s.jsxs)("div",{className:u.a.historyTotalText,children:[Object(s.jsx)("p",{className:u.a.historyTotalTitle,children:"Total Expenses"}),t+" \u0440\u0443\u0431"]})]}),Object(s.jsx)(x,{lables:n.lables,data:n.data})]})]})},_=function(){var e=JSON.parse(localStorage.getItem("chartLabels")),t=JSON.parse(localStorage.getItem("chartData")),a=JSON.parse(localStorage.getItem("chartLabelsIncome")),c=JSON.parse(localStorage.getItem("chartDataIncome")),i=Object(n.useState)(e||["delete, this is a test1","delete, this is a test2"]),l=Object(r.a)(i,2),o=l[0],b=l[1],u=Object(n.useState)(t||[50,60]),m=Object(r.a)(u,2),p=m[0],x=m[1],O=Object(n.useState)(a||[]),_=Object(r.a)(O,2),g=_[0],f=_[1],N=Object(n.useState)(c||[]),P=Object(r.a)(N,2),y=P[0],S=P[1],T=Object(n.useState)(!1),E=Object(r.a)(T,2),I=E[0],D=E[1],k=Object(n.useState)(!1),J=Object(r.a)(k,2),C=J[0],M=J[1],B=function(e,t,a,s,n){var c,i=e.filter((function(e,t){return e===n&&(c=t),e!==n})),l=t.filter((function(e,t){return t!==c}));a(i),s(l)},F=function(e,t,a,s,n,c,i){if(-1===e.indexOf(n))a(e.concat(n)),s(t.concat(c));else{var l=t.slice();l[e.indexOf(n)]+=c,s(l)}},L=function(e,t){return"expenses"===t?(D(!1),B(o,p,b,x,e)):"income"===t?(M(!1),B(g,y,f,S,e)):void 0},R=function(e,t,a){return"expenses"===a?(D(!1),F(o,p,b,x,e,t)):"income"===a?(M(!1),F(g,y,f,S,e,t)):void 0},V=function(e){"expenses"===e&&(D(!0),localStorage.setItem("chartLabels",JSON.stringify(o)),localStorage.setItem("chartData",JSON.stringify(p))),"income"===e&&(M(!0),localStorage.setItem("chartLabelsIncome",JSON.stringify(g)),localStorage.setItem("chartDataIncome",JSON.stringify(y)))};return Object(s.jsxs)("div",{className:d.a.container,children:[Object(s.jsx)("div",{className:d.a.page}),Object(s.jsx)("div",{className:d.a.page2}),Object(s.jsx)("div",{className:d.a.main,children:Object(s.jsxs)("div",{className:"app-content",children:[Object(s.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(s.jsx)(h,{type:"expenses",title:"Expenses",labels:o,data:p,addElement:R,deleteElement:L,saveData:V,saved:I})}}),Object(s.jsx)(j.a,{path:"/income",render:function(){return Object(s.jsx)(h,{type:"income",title:"Income",labels:g,data:y,addElement:R,deleteElement:L,saveData:V,saved:C})}}),Object(s.jsx)(j.a,{path:"/total",render:function(){return Object(s.jsx)(v,{type:"total",title:"Total",dataIncome:y,dataExpenses:p})}})]})})]})},g=a(18),f=a.n(g),N=a(11);var P=function(){return Object(s.jsxs)("div",{className:f.a.navbar,children:[Object(s.jsx)(N.b,{className:f.a.link,to:"/",children:"Expenses"}),Object(s.jsx)(N.b,{className:f.a.link,to:"/income",children:"Income"}),Object(s.jsx)(N.b,{className:f.a.link,to:"/total",children:"Total"})]})};var y=function(){return Object(s.jsx)(N.a,{children:Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(P,{}),Object(s.jsx)(_,{})]})})})};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))},17:function(e,t,a){e.exports={container:"MainPage_container__3Necg",main:"MainPage_main__e0dEs",page:"MainPage_page__3Z1Gn",page2:"MainPage_page2__3xdO8"}},18:function(e,t,a){e.exports={navbar:"Navbar_navbar__3hpij",link:"Navbar_link__ymESU"}},2:function(e,t,a){e.exports={piePage:"PiePage_piePage__2cLal",title:"PiePage_title__1YjPe",pieChart:"PiePage_pieChart__axTiI",item:"PiePage_item__16vBa",itemSave:"PiePage_itemSave__2u3Sm",itemForm:"PiePage_itemForm__2jXzy",itemText:"PiePage_itemText__p4VY4",itemValue:"PiePage_itemValue__1ntZ0",history:"PiePage_history__3puPE",input:"PiePage_input__3UNzD",inputForm:"PiePage_inputForm__fGTmk",inputData:"PiePage_inputData__1vR72",inputButton:"PiePage_inputButton__piMeX",historyTotal:"PiePage_historyTotal__Q5APU",historyTotalText:"PiePage_historyTotalText__Cy5CJ",titleTotal:"PiePage_titleTotal__2ukNp"}},63:function(e,t,a){},64:function(e,t,a){}},[[164,1,2]]]);
//# sourceMappingURL=main.339428b9.chunk.js.map