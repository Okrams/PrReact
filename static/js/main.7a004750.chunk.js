(this.webpackJsonpmonitoreo=this.webpackJsonpmonitoreo||[]).push([[0],{30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),s=n(12),a=n.n(s),c=n(2),i=n(3),d=n(6),l=n(5),u=(n(20),n(23),n.p,n(4)),j=n.n(u),b=n(1),O=[{name:"ID",selector:"id",sortable:!0},{name:"NOMBRE",selector:"Nombre",sortable:!0},{name:"CORREO",selector:"Correo",sortable:!0},{name:"CONTRASE\xd1A",selector:"Contra",sortable:!0},{name:"TITULAR",selector:"titular",sortable:!0},{name:"FECHA REGISTRO",selector:"FechaRegistro",sortable:!0},{name:"ESTADO",selector:"Estado",sortable:!0}],h=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={error:null,isLoaded:!1,items:[],dat:[]},r}return Object(i.a)(n,[{key:"datos",value:function(e){var t=[];return e.forEach((function(e){console.log(e),t.push(e)})),t}},{key:"componentDidMount",value:function(){var e=this;fetch("http://apppemsa.ddns.net:3200/Usuarios").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:e.datos(t)})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,r=e.items;return t?Object(b.jsxs)("div",{children:["Error: ",t.message]}):n?Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{columns:O,data:r,title:"personas"})})}):Object(b.jsx)("div",{children:"Loading..."})}}]),n}(r.Component);var m=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("section",{children:Object(b.jsx)(h,{})})})}}]),n}(r.Component);a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7a004750.chunk.js.map