(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(t,e,a){t.exports=a.p+"static/media/chrome-logo.8daafc83.png"},function(t,e,a){t.exports=a.p+"static/media/firefox-logo.8b26e869.png"},function(t,e,a){t.exports=a.p+"static/media/microsoft-edge-logo.6cf8affe.png"},function(t,e,a){t.exports=a.p+"static/media/safari-icon.ff95c31a.png"},,,,,,function(t,e,a){t.exports=a.p+"static/media/title.c19b6d94.png"},function(t,e,a){t.exports=a.p+"static/media/question.7736e08b.png"},,,function(t,e,a){t.exports=a(27)},,,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),i=(a(21),a(9)),l=a(10),s=a(14),d=a(11),f=a(15),u=a(1),g=a(2),h=(a(23),a(25),function(t){return t.hidden?o.a.createElement("img",{id:t.id,onChange:t.onChange,onClick:t.onClick,className:"Card",src:t.src,alt:t.alt,height:"256",width:"256"}):o.a.createElement("img",{id:t.id,onChange:t.onChange,onClick:t.onClick,className:"Card",src:t.blanksrc,alt:t.alt,height:"256",width:"256"})}),m=a(12),p=a.n(m),b=a(3),w=a.n(b),v=a(4),O=a.n(v),C=a(5),k=a.n(C),E=a(6),j=a.n(E),x=a(13),S=a.n(x),T=[w.a,w.a,O.a,O.a,k.a,k.a,j.a,j.a],N=function(){for(var t=0;t<8;t++)for(var e=0;e<8;e++){var a=Math.floor(Math.random()*Math.floor(8)),n=T[e];T[e]=T[a],T[a]=n}};N();var y=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={global:0,correct:0,cardOne:"",cardTwo:"",1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1},a.changeState=function(t,e){return new Promise(function(n,o){a.setState(Object(g.a)({},t,e)),n(Object(u.a)(Object(u.a)(a))),a.state[t]||o("NO KEY PRESENT")})},a.default=function(){a.setState({global:0,correct:0,cardOne:"",cardTwo:"",1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1})},a.rotateCard=function(t){var e;a.setState((e={},Object(g.a)(e,t.target.id,!0),Object(g.a)(e,"global",a.state.global+=1),e)),1===a.state.global?a.changeState("cardOne",t.target.alt).then(function(t){}):2===a.state.global&&a.changeState("cardTwo",t.target.alt).then(function(t){t.state.cardOne==t.state.cardTwo?(t.setState({global:0}),t.changeState("correct",t.state.correct+=1).then(function(t){4==t.state.correct&&(alert("WINNER"),N(),setTimeout(t.default,1500))})):setTimeout(t.default,500)})},a}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=0;return o.a.createElement("div",{className:"App"},o.a.createElement("img",{src:p.a,alt:"Title"}),o.a.createElement("div",null,T.map(function(a){e+=1;var n="";return n=a.includes("chrome")?"chrome":a.includes("firefox")?"firefox":a.includes("safari")?"safari":a.includes("microsoft")?"edge":null,o.a.createElement(h,{key:e,onClick:t.rotateCard.bind(e),alt:n,id:e.toString(),hidden:t.state[e],blanksrc:S.a,src:a})})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[16,2,1]]]);
//# sourceMappingURL=main.8ab5b4b7.chunk.js.map