(this["webpackJsonpcorona-times"]=this["webpackJsonpcorona-times"]||[]).push([[0],{25:function(e,t,a){e.exports=a(60)},31:function(e,t,a){},32:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n,l=a(1),r=a.n(l),c=a(8),o=a.n(c),m=(a(30),a(31),a(9)),u=a(62),i=a(63),s=a(64),E=a(77),p=a(65),h=a(66),d=a(67),f=(a(32),function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),n=a[0],c=a[1];return r.a.createElement(u.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(i.a,{href:"/"},"Corona Times"),r.a.createElement(s.a,{onClick:function(){return c(!n)}}),r.a.createElement(E.a,{isOpen:n,navbar:!0},r.a.createElement(p.a,{className:"mr-auto",navbar:!0},r.a.createElement(h.a,null,r.a.createElement(d.a,{href:"/stats"},"Statistics")),r.a.createElement(h.a,null,r.a.createElement(d.a,{href:"/info/"},"Information")),r.a.createElement(h.a,null,r.a.createElement(d.a,{href:"/form/"},"Survey")),r.a.createElement(h.a,null,r.a.createElement(d.a,{href:"https://github.com/julian-hecker/corona-times"},"Code")))))}),b=(a(42),a(73)),g=a(68),v=a(69),O=a(70),w=a(71),j=a(72),y=function(){var e=Object(l.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(l.useState)(""),o=Object(m.a)(c,2),u=o[0],i=o[1];Object(l.useEffect)((function(){console.log("".concat(a," - ").concat(u))}),[a,u]);var s=Object(l.useState)(!1),E=Object(m.a)(s,2);E[0],E[1];return r.a.createElement(g.a,{className:"subscribe-wrap"},r.a.createElement("h2",null,"Subscribe for Updates!"),r.a.createElement(v.a,null,r.a.createElement(O.a,null,r.a.createElement(w.a,{xs:"12",sm:"6"},r.a.createElement(j.a,{className:"input",type:"text",placeholder:"Email Address",email:"email",onChange:function(e){return n(e.target.value)},value:a})),r.a.createElement(w.a,{xs:"12",sm:"6"},r.a.createElement(j.a,{className:"input",type:"select",bsSize:"md",onClick:function(e){return i(e.target.value)}},r.a.createElement("option",null,"North America"),r.a.createElement("option",null,"South America"),r.a.createElement("option",null,"Europe"),r.a.createElement("option",null,"Africa"),r.a.createElement("option",null,"Asia"),r.a.createElement("option",null,"Australia/Oceania")))),r.a.createElement(O.a,null,r.a.createElement(w.a,{xs:"12"},r.a.createElement(b.a,{type:"button",className:"btn btn-warning"},"Get Notified!")))))},C=a(74),N=(a(43),new XMLHttpRequest);N.open("GET","http://www.ianmatlak.com:8443/corona/api/table.php"),N.onload=function(){n=N.responseText,console.log(n)},N.send();var x,S=function(e){return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(C.a,{dark:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Infected"),r.a.createElement("th",null,"Deaded"),r.a.createElement("th",null,"Continent"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"China"),r.a.createElement("td",null,"123456"),r.a.createElement("td",null,"6543"),r.a.createElement("td",null,"Asia")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Japan"),r.a.createElement("td",null,"33"),r.a.createElement("td",null,"0"),r.a.createElement("td",null,"Asia")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"US"),r.a.createElement("td",null,"13"),r.a.createElement("td",null,"0"),r.a.createElement("td",null,"North America")))))},k=a(20),A=a(21),T=a(23),G=a(22),I=a(24),q=a(13),z=[{lat:39,lng:74},{lat:49,lng:87},{lat:45,lng:90},{lat:43,lng:96},{lat:42,lng:105},{lat:44,lng:112},{lat:46,lng:120},{lat:53,lng:122},{lat:48,lng:134},{lat:37,lng:122},{lat:25,lng:120},{lat:20,lng:109},{lat:22,lng:101},{lat:28,lng:97},{lat:28,lng:86},{lat:32,lng:78},{lat:35,lng:76}],J={width:"100%",height:"400px"},M=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(T.a)(this,Object(G.a)(t).call(this,e))).state={path:z},a}return Object(I.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(q.Map,{google:this.props.google,zoom:2,style:J,initialCenter:{lat:35,lng:120}},r.a.createElement(q.Polygon,{path:this.state.path,strokeColor:"#ff0000",fillColor:"#ff0000"}))}}]),t}(r.a.Component),X=Object(q.GoogleApiWrapper)({apiKey:"AIzaSyClXTYb5GEEE_9qnO62s1fO6Gyh-BWTSpY"})(M),B=(a(57),new XMLHttpRequest);B.open("GET","http://www.ianmatlak.com:8443/corona/api/stat.php"),B.onload=function(){x=B.responseText,console.log(x)},B.send();var D=function(e){return r.a.createElement("div",{className:"Stats-wrapper"},r.a.createElement("div",{className:"box"},r.a.createElement("h1",null,"67,901"),r.a.createElement("h5",null,"Total Infected")),r.a.createElement("div",{className:"box"},r.a.createElement("h1",null,"1308"),r.a.createElement("h5",null,"Total Dead")),r.a.createElement("div",{className:"box"},r.a.createElement("h1",null,"4182"),r.a.createElement("h5",null,"Total Cured")))};a(75),a(76),a(58),a(59);var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("div",{style:{height:"400px"}},r.a.createElement(X,null)),r.a.createElement(D,null),r.a.createElement(S,null),r.a.createElement(y,null))};o.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.10be23fc.chunk.js.map