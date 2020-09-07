(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(14),c=a.n(o),i=(a(22),a(16)),l=a(7),s=a(1);var m=function(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg transparent navbar-".concat(e.theme.background.toLowerCase()),id:"navMain"},n.a.createElement("button",{className:"btn",id:"dummy",style:{visibility:"hidden"}},e.theme.foreground," Mode"),n.a.createElement("div",{className:"navbar-nav mx-auto text-".concat(e.theme.foreground.toLowerCase())},n.a.createElement(l.b,{className:"nav-item nav-link mx-4",to:"/"},"Home"),n.a.createElement(l.b,{className:"nav-item nav-link mx-4",to:"/projects"},"Projects"),n.a.createElement(l.b,{className:"nav-item nav-link mx-4",to:"/about"},"About")),n.a.createElement("button",{type:"button",onClick:function(){return e.changeTheme()},className:"btn btn-".concat(e.theme.foreground.toLowerCase()),id:"modeSwitch"},e.theme.foreground," Mode")),n.a.createElement("hr",{className:"hr".concat(e.theme.background),id:"navDivider"}))};var u=function(e){return n.a.createElement("a",{className:"text-".concat(e.theme.foreground.toLowerCase()),href:e.link},n.a.createElement("img",{className:"linkIcon",id:e.type,title:e.type,src:"assets/".concat(e.theme.foreground).concat(e.type,".png"),alt:e.type+"Link"}),e.text)};var d=function(e){return n.a.createElement("div",{className:"text-center"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("img",{className:"portrait",src:e.images.portrait,alt:"Portrait of David"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h1",{className:"switchModes text-".concat(e.theme.foreground.toLowerCase()),id:"intro"},"Hi, my name is David and I develop web pages!"),n.a.createElement("br",null),n.a.createElement("br",null),e.icons.map((function(t){return n.a.createElement(u,{theme:e.theme,type:t.type,link:t.link,text:""})})))};var h=function(e){return n.a.createElement("div",{className:"row",style:{background:"transparent"}},n.a.createElement("img",{className:"col",src:e.project.img,alt:"Card",style:{borderRadius:"10px",border:"2px inset #888"}}),n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:e.project.link},n.a.createElement("h5",{className:"card-title text-center text-".concat(e.theme.foreground.toLowerCase())},e.project.name)),n.a.createElement("a",{href:e.project.repoLink},n.a.createElement("p",{className:"text-center text-".concat(e.theme.foreground.toLowerCase())},"Repo Link")),n.a.createElement("p",{className:"card-text text-".concat(e.theme.foreground.toLowerCase())},e.project.text)))};var p=function(e){return n.a.createElement("div",{className:"container row"},n.a.createElement("div",{className:"col-2"}),n.a.createElement("div",{className:"col-8 row"},e.projects.map((function(t){return n.a.createElement("div",{className:"col-12"},n.a.createElement(h,{project:t,theme:e.theme}),n.a.createElement("br",null))}))))};var g=function(e){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"text-".concat(e.theme.foreground.toLowerCase())},"David Stewart"),n.a.createElement("h3",{className:"text-".concat(e.theme.foreground.toLowerCase())},"Full-Stack Web Developer"),e.icons.map((function(t){return n.a.createElement("div",null,n.a.createElement(u,{theme:e.theme,type:t.type,link:t.link,text:t.text}),n.a.createElement("br",null))}))))};var b=function(){var e=Object(r.useState)({background:"Light",foreground:"Dark"}),t=Object(i.a)(e,2),a=t[0],o=t[1],c={background:"./assets/".concat(a.background,"mode.png"),github:"./assets/".concat(a.foreground,"Github.png"),email:"./assets/".concat(a.foreground,"Email.png"),linkedin:"./assets/".concat(a.foreground,"Linkedin.png"),phone:"./assets/".concat(a.foreground,"Phone.png"),resume:"./assets/".concat(a.foreground,"Resume.png"),portrait:"./assets/myface.jpg"},u={backgroundImage:"url(".concat(c.background,")"),height:"100%",minHeight:"100vh",width:"100%",fontFamily:"'Play', sans-serif"},h=[{type:"Github",link:"https://github.com/Darkorin",text:"Github: Darkorin"},{type:"Linkedin",link:"https://www.linkedin.com/in/david-s-stewart/",text:"LinkedIn: David S Stewart"},{type:"Email",link:"mailto:darkorin00@gmail.com?subject=Website Feedback",text:"Email: darkorin00@gmail.com"},{type:"Phone",link:"tel:912-617-1996",text:"Phone: 912-617-1996"},{type:"Resume",link:"./assets/resume.pdf",text:"Resume"}];return n.a.createElement(l.a,null,n.a.createElement("div",{style:u},n.a.createElement("div",{className:"container"},n.a.createElement(m,{theme:a,changeTheme:function(){"Light"===a.background?o({background:"Dark",foreground:"Light"}):o({background:"Light",foreground:"Dark"})}}),n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/"},n.a.createElement(d,{images:c,icons:h,theme:a})),n.a.createElement(s.a,{exact:!0,path:"/projects"},n.a.createElement(p,{projects:[{name:"Employee Directory",img:"./assets/employeedirectory.png",link:"https://darkorin.github.io/employee-directory/",repoLink:"https://github.com/Darkorin/employee-directory",text:"A simple employee search and sort directory built using React.js. It takes an employee list (Demo imported from Random User API) and displays it. You can use the search function to search for employees in realtime with the list updating as you type. It also allows you to sort the list by name."},{name:"SCF Arcade",img:"./assets/scfarcade.png",link:"https://darkorin.github.io/Salty-Cloud-Frogs-Project-1/",repoLink:"https://github.com/Darkorin/Salty-Cloud-Frogs-Project-1",text:"A simple website to play Tic-Tac-Toe or Sudoku. One of the earlier projects we created in coding Bootcamp, it is written with vanilla Javascript and Jquery, it makes API calls through AJAX."},{name:"Pathfinder Character Sheet(Incomplete)",img:"./assets/pfcharsheet.png",link:"https://pathfindercharactersheet.herokuapp.com/create/5",repoLink:"https://github.com/Darkorin/PathfinderCharacterSheet",text:"A character creator for the Pathfinder Tabletop RPG. I created this project with a couple of colleagues for the NEXT LEVEL contest. We only spent about 1 week working on it and we were not able to quite finish it due to the short time constraint. It is built using a Node express server and the Handlebars templating engine."},{name:"Weather Dashboard",img:"./assets/weatherdashboard.png",link:"https://darkorin.github.io/weather-dashboard/",repoLink:"https://github.com/Darkorin/weather-dashboard",text:"An app that gathers weather data using a weather API then displays it to the user."}],theme:a})),n.a.createElement(s.a,{exact:!0,path:"/about"},n.a.createElement(g,{images:c,icons:h,theme:a}))))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.eb02045b.chunk.js.map