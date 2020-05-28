(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/rimil.548ab9b0.jpg"},function(e,t,a){e.exports=a.p+"static/media/about-section.e8efc265.png"},,function(e,t,a){e.exports=a.p+"static/media/st-anthonys-website.ce8505ed.png"},function(e,t,a){e.exports=a.p+"static/media/hackertronix-website.9b7b6f09.png"},function(e,t,a){e.exports=a.p+"static/media/tic-tac-toe.13e277fd.png"},function(e,t,a){e.exports=a.p+"static/media/todo-website.f50c222b.png"},function(e,t,a){e.exports=a.p+"static/media/admin-dash.246e39a9.png"},function(e,t,a){e.exports=a.p+"static/media/patterns.2f49a672.png"},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),c=a.n(r),o=(a(21),a(1)),s=a(2),l=a(3),m=a(4),d=(a(22),a(7)),u=a.n(d),p=(a(23),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"intro-page-container",id:"intro-page"},i.a.createElement("div",{className:"intro-div"},i.a.createElement("div",{className:"intro-picture"},i.a.createElement("img",{src:u.a,alt:"profile picture",className:"intro-img"})),i.a.createElement("div",{className:"intro-text"},i.a.createElement("h1",{className:"intro-heading"},"Rimil Dey"),i.a.createElement("h2",{className:"intro-sub-heading"},"Front-end web developer")),i.a.createElement("div",{className:"intro-background"})))}}]),a}(n.Component)),g=a(8),h=a.n(g);a(24);function b(e){return i.a.createElement("div",{className:"heading-container",style:{"background-color":e.backgroundColor}},i.a.createElement("h1",{className:"heading",style:{color:e.textColor}},e.sectionName))}a(25);var v=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"about-page-container",id:"about-page"},i.a.createElement("div",{className:"about-div"},i.a.createElement(b,{sectionName:"About",backgroundColor:"#a40e88",textColor:"white"}),i.a.createElement("div",{className:"about-content-container"},i.a.createElement("div",{className:"about-description"},i.a.createElement("p",{className:"content-paragraph"},"I work as a front-end web developer at Springboard, where I implement new features on our platform and improve existing ones. The instant visual feedback I received while making my first crude web-page made me fall in love with building user interfaces, and I have been chasing that high ever since."),i.a.createElement("p",{className:"content-paragraph"},"In my free time, I read, bake, binge-watch my favourite TV series and look after my plants. Someday, I hope to travel around the globe, attend a Charlie Puth concert and watch Federer winning a match front-row at Wimbledon.")),i.a.createElement("div",{className:"about-section-image-container"},i.a.createElement("img",{className:"about-section-image",src:h.a,alt:"about section image"})))))}}]),a}(n.Component),f=(a(26),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"gradient-bg intro-page-gradient"+("introPageGradient"===this.props.activeGradientId?" active":"")}),i.a.createElement("div",{className:"gradient-bg about-page-gradient"+("aboutPageGradient"===this.props.activeGradientId?" active":"")}),i.a.createElement("div",{className:"gradient-bg projects-page-gradient"+("projectsPageGradient"===this.props.activeGradientId?" active":"")}))}}]),a}(n.Component)),E=a(9),j=a.n(E),k=(a(27),a(28),a(10)),w=a.n(k),N=a(11),y=a.n(N),S=a(12),O=a.n(S),x=a(13),I=a.n(x),C=a(14),G=a.n(C),P=a(15),L=a.n(P),T=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).projectList=[{name:"Patterns - Swift playground app",image:L.a,techStack:"Swift",link:"https://github.com/rimildeyjsr/patterns"},{name:"St. Anthony School's Website",image:w.a,techStack:"HTML, CSS, Javascript, Jquery",link:"http://stanthonysdoranda.org/"},{name:"Prateek's Portfolio Website",image:y.a,techStack:"HTML, CSS, Javascript, Jquery",link:"https://hackertronix.com/"},{name:"To-Do App",image:I.a,techStack:"React",link:"https://rimildeyjsr.github.io/todo/"},{name:"Tic-tac-toe Game",image:O.a,techStack:"Angular",link:"https://rimildeyjsr.github.io/tic-tac-toe/"},{name:"Admin Dashboard",image:G.a,techStack:"React, Firebase",link:"https://github.com/rimildeyjsr/admin-dashboard"}],e}return Object(s.a)(a,[{key:"openLink",value:function(e){window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"projects-page-container",id:"projects-page"},i.a.createElement(b,{sectionName:"Projects",backgroundColor:"#188a62",textColor:"white"}),i.a.createElement(j.a,{arrows:!0,dots:!0,infinite:!0,keepDirectionWhenDragging:!0,animationSpeed:"1500",className:"carousel-container"},this.projectList.map((function(t){return i.a.createElement("div",{className:"project-div"},i.a.createElement("div",{className:"project-details-container"},i.a.createElement("div",{className:"project-picture"},i.a.createElement("img",{src:t.image,alt:"project picture",className:"project-img"})),i.a.createElement("div",{className:"project-text"},i.a.createElement("h1",{className:"project-heading"},t.name),i.a.createElement("h2",{className:"project-sub-heading"},t.techStack))),i.a.createElement("div",{className:"project-background"}),i.a.createElement("button",{className:"project-link-text",onClick:function(){return e.openLink(t.link)}},"See Project"))}))))}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleScroll=function(){var e=document.getElementById("about-page"),t=document.getElementById("projects-page"),a="";a=window.scrollY<e.offsetTop-400?"introPageGradient":window.scrollY<t.offsetTop-400?"aboutPageGradient":"projectsPageGradient",n.setState({activeGradientId:a})},n.state={activeGradientId:"introPageGradient"},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return i.a.createElement("div",{className:"main-wrapper-container"},i.a.createElement(f,{activeGradientId:this.state.activeGradientId}),i.a.createElement(p,null),i.a.createElement(v,null),i.a.createElement(T,null))}}]),a}(n.Component);var D=function(){return i.a.createElement(A,null)};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.2c1bfc7e.chunk.js.map