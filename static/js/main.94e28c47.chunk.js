(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),l=(n(20),n(5)),i=n(6),u=n(8),m=n(7),s=n(9),p=n(30),h=n(29),b=n(31),d=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Homepage"),r.a.createElement("p",null,"Welcome to my travel website"))}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"I'm a 23 year old senior at University of Washington!"))}}]),t}(a.Component),f=n(14),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a("data/tripData.csv").then(function(t){return e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data.map(function(e){return r.a.createElement("div",{key:e.index},e.location)});return r.a.createElement("div",null,r.a.createElement("h1",null,"Places I've Been"),e)}}]),t}(a.Component),j=(n(22),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{to:"/"},"Home"),r.a.createElement(h.a,{to:"/About"},"About Me"),r.a.createElement(h.a,{to:"/Travel"},"Travel"),r.a.createElement(b.a,{exact:!0,path:"/",component:d}),r.a.createElement(b.a,{path:"/About",component:v}),r.a.createElement(b.a,{path:"/Travel",component:E})))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.94e28c47.chunk.js.map