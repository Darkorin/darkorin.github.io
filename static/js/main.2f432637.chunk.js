(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=(a(22),a(16)),i=a(7),m=a(1);var s=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg transparent navbar-".concat(e.theme.background.toLowerCase()),id:"navMain"},r.a.createElement("button",{className:"btn",id:"dummy",style:{visibility:"hidden"}},e.theme.foreground," Mode"),r.a.createElement("div",{className:"navbar-nav mx-auto text-".concat(e.theme.foreground.toLowerCase())},r.a.createElement(i.b,{className:"nav-item nav-link mx-4",to:"/"},"Home"),r.a.createElement(i.b,{className:"nav-item nav-link mx-4",to:"/projects"},"Projects"),r.a.createElement(i.b,{className:"nav-item nav-link mx-4",to:"/about"},"About")),r.a.createElement("button",{type:"button",onClick:function(){return e.changeTheme()},className:"btn btn-".concat(e.theme.foreground.toLowerCase()),id:"modeSwitch"},e.theme.foreground," Mode")),r.a.createElement("hr",{className:"hr".concat(e.theme.background),id:"navDivider"}))};var u=function(e){return r.a.createElement("a",{className:"text-".concat(e.theme.foreground.toLowerCase()),href:e.link},r.a.createElement("img",{className:"linkIcon",id:e.type,title:e.type,src:"assets/".concat(e.theme.foreground).concat(e.type,".png"),alt:e.type+"Link"}),e.text)};var h=function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{className:"portrait",src:e.images.portrait,alt:"Portrait of David"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{className:"switchModes text-".concat(e.theme.foreground.toLowerCase()),id:"intro"},"Hi, my name is David Stewart, Co-Founder and Lead Engineer at Common.gg"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(u,{theme:e.theme,type:"Github",link:"https://github.com/Darkorin",text:""}),r.a.createElement(u,{theme:e.theme,type:"Linkedin",link:"https://www.linkedin.com/in/david-s-stewart/",text:""}),r.a.createElement(u,{theme:e.theme,type:"Email",link:"mailto:darkorin00@gmail.com?subject=Website Feedback",text:""}),r.a.createElement(u,{theme:e.theme,type:"Phone",link:"tel:912-617-1996",text:""}),r.a.createElement(u,{theme:e.theme,type:"Resume",link:"./assets/resume.pdf",text:""}))};var d=function(e){return r.a.createElement("div",{className:"row",style:{background:"transparent"}},r.a.createElement("img",{className:"col",src:e.project.img,alt:"Card",style:{borderRadius:"10px",border:"2px inset #888"}}),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:e.project.link},r.a.createElement("h5",{className:"card-title text-center text-".concat(e.theme.foreground.toLowerCase())},e.project.name)),r.a.createElement("a",{href:e.project.repoLink},r.a.createElement("p",{className:"text-center text-".concat(e.theme.foreground.toLowerCase())},"Repo Link")),r.a.createElement("p",{className:"card-text text-".concat(e.theme.foreground.toLowerCase())},e.project.text)))};var p=function(e){return r.a.createElement("div",{className:"container row"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-8 row"},e.projects.map((function(t){return r.a.createElement("div",{className:"col-12"},r.a.createElement(d,{project:t,theme:e.theme}),r.a.createElement("br",null))}))))};var g=function(e){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"text-".concat(e.theme.foreground.toLowerCase())},"David Stewart"),r.a.createElement("h3",{className:"text-".concat(e.theme.foreground.toLowerCase())},"Full-Stack Web Developer"),r.a.createElement(u,{theme:e.theme,type:"Github",link:"https://github.com/Darkorin",text:"Github: Darkorin"}),r.a.createElement("br",null),r.a.createElement(u,{theme:e.theme,type:"Linkedin",link:"https://www.linkedin.com/in/david-s-stewart/",text:"LinkedIn: David S Stewart"}),r.a.createElement("br",null),r.a.createElement(u,{theme:e.theme,type:"Email",link:"mailto:darkorin00@gmail.com?subject=Website Feedback",text:"Email: darkorin00@gmail.com"}),r.a.createElement("br",null),r.a.createElement(u,{theme:e.theme,type:"Phone",link:"tel:912-617-1996",text:"Phone: 912-617-1996"}),r.a.createElement("br",null),r.a.createElement(u,{theme:e.theme,type:"Resume",link:"./assets/resume.pdf",text:"Resume"})))};var E=function(){var e=Object(n.useState)({background:"Light",foreground:"Dark"}),t=Object(l.a)(e,2),a=t[0],o=t[1],c={background:"./assets/".concat(a.background,"mode.png"),github:"./assets/".concat(a.foreground,"Github.png"),email:"./assets/".concat(a.foreground,"Email.png"),linkedin:"./assets/".concat(a.foreground,"Linkedin.png"),phone:"./assets/".concat(a.foreground,"Phone.png"),resume:"./assets/".concat(a.foreground,"Resume.png"),portrait:"./assets/myface.jpg"},u={backgroundImage:"url(".concat(c.background,")"),height:"100%",width:"100%",fontFamily:"'Play', sans-serif"};return r.a.createElement(i.a,null,r.a.createElement("div",{style:u},r.a.createElement("div",{className:"container"},r.a.createElement(s,{theme:a,changeTheme:function(){"Light"===a.background?o({background:"Dark",foreground:"Light"}):o({background:"Light",foreground:"Dark"})}}),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(h,{images:c,theme:a})),r.a.createElement(m.a,{exact:!0,path:"/projects"},r.a.createElement(p,{projects:[{name:"Common.gg",img:"./assets/commongg.png",link:"https://common.gg/",repoLink:"",text:"A social media website tailored specifically for gamers. We're starting off catering specifically to Riot Game's Teamfight Tactics, but we hope to one day expand to all of gaming."},{name:"Employee Directory",img:"./assets/employeedirectory.png",link:"https://darkorin.github.io/employee-directory/",repoLink:"https://github.com/Darkorin/employee-directory",text:"A simple employee search and sort directory built using React.js. It takes an employee list (Demo imported from Random User API) and displays it. You can use the search function to search for employees in realtime with the list updating as you type. It also allows you to sort the list by name."},{name:"SCF Arcade",img:"./assets/scfarcade.png",link:"https://darkorin.github.io/Salty-Cloud-Frogs-Project-1/",repoLink:"https://github.com/Darkorin/Salty-Cloud-Frogs-Project-1",text:"A simple website to play Tic-Tac-Toe or Sudoku. One of the earlier projects we created in coding Bootcamp, it is written with vanilla Javascript and Jquery, it makes API calls through AJAX."},{name:"Pathfinder Character Sheet(Incomplete)",img:"./assets/pfcharsheet.png",link:"https://pathfindercharactersheet.herokuapp.com/create/5",repoLink:"https://github.com/Darkorin/PathfinderCharacterSheet",text:"A character creator for the Pathfinder Tabletop RPG. I created this project with a couple of colleagues for the NEXT LEVEL contest. We only spent about 1 week working on it and we were not able to quite finish it due to the short time constraint. It is built using a Node express server and the Handlebars templating engine."}],theme:a})),r.a.createElement(m.a,{exact:!0,path:"/about"},r.a.createElement(g,{images:c,theme:a}))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2f432637.chunk.js.map