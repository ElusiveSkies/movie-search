(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{118:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(71),r=n.n(i),o=n(11),c=n(6),s=n(151),l=n(72),d=n.n(l),h=Object({NODE_ENV:"production",PUBLIC_URL:"/movie-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_APIKEY:"api_key=35bedaf996a0d463f1f8fa5911ed61f8",REACT_APP_BASEURL:"https://api.themoviedb.org/3/search/movie?"}),p=h.REACT_APP_BASEURL,j=h.REACT_APP_APIKEY,b=function(e){return d.a.get("".concat(p).concat(j,"&language=en-US&query=").concat(e))},u=n(166),m=n(169),x=n(168),f=n(167),g=n(165),O=n(2),v=Object(s.a)((function(e){return{cardContainer:{width:"100%"},movieCard:{color:"white",fill:"white",borderRadius:"10px !important",margin:"40px !important",height:"fit-content"},cardTitle:{fontSize:"2rem !important",textAlign:"center",backgroundColor:"black",color:"white"},cardRelease:{fontSize:"1.5rem !important",textAlign:"center","@media (max-width: 900px)":{fontSize:"1rem !important"}},cardDesc:{fontSize:"0.75rem",color:"black"},cardScore:{fontSize:"1.75rem",alignContent:"center !important",textAlign:"center",alignSelf:"center",paddingBottom:"10px"}}}));var S=function(e){var t=v(),n=t.cardContainer,a=t.movieCard,i=t.cardTitle,r=t.cardRelease,o=t.cardDesc,c=t.cardScore;return Object(O.jsx)(g.a,{container:!0,className:n,boxShadow:4,children:e.result.map((function(e){return Object(O.jsx)(g.a,{xs:12,md:4,lg:2,className:a,boxShadow:10,children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(f.a,{className:i,gutterBottom:!0,variant:"h5",component:"div",children:e.title}),Object(O.jsx)(x.a,{component:"img",image:"https://image.tmdb.org/t/p/original/"+e.poster_path,alt:e.title}),Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(f.a,{className:r,gutterBottom:!0,variant:"h5",component:"div",children:["Release Date: (",e.release_date,")"]}),Object(O.jsx)(f.a,{className:o,children:e.overview})]}),Object(O.jsxs)(u.a,{className:c,children:["Score: ",e.vote_average]})]})},e.id)}))})},w=n(9),C=n(156),k=n(171),y=n(170),_=n(172),A=n(162),E=n(79),N=n.n(E),R=Object(w.a)("div")((function(e){var t=e.theme;return Object(c.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(C.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),T=Object(w.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),P=Object(w.a)(A.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(c.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{"&:focus":{width:"20ch"}})}})),z=Object(s.a)((function(e){return{navStyle:{backgroundColor:"black !important",color:"white",fill:"white",padding:"20px 0px",width:"100%","@media (max-width: 900px)":{display:"block !important"}},header:{fontSize:"5rem",display:"flex",padding:"0px 50px",textShadow:"3px 2px 5px gray","@media (max-width: 900px)":{fontSize:"2.5rem",paddingBottom:"15px"}}}}));function B(e){var t=z(),n=t.navStyle,a=t.header;return Object(O.jsx)(y.a,{sx:{flexGrow:1},children:Object(O.jsx)(k.a,{elevation:0,position:"static",className:n,children:Object(O.jsxs)(_.a,{children:[Object(O.jsx)("div",{className:a,boxShadow:!0,children:"What to Watch"}),Object(O.jsxs)(R,{children:[Object(O.jsx)(T,{children:Object(O.jsx)(N.a,{})}),Object(O.jsx)(P,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onClick:e.handleFormSubmit,onChange:e.handleInputChange,onKeyDown:e.handleKeypress})]})]})})})}var D=n(163),L=n(173),I=n(80),K=n.n(I),H=n(81),F=n.n(H),U=(n(118),Object(s.a)((function(e){return{footer:Object(c.a)({backgroundColor:"black",fontSize:"large",color:"white",fill:"white",padding:"20px 0px",marginTop:"36px",width:"100%",position:"absolute"},e.breakpoints.down("sm"),{paddingTop:"10px"}),lowerLinks:{display:"flex",justifyContent:"space-evenly"},footerButtons:{fontSize:"42px",color:"white","&:hover":{color:"#b6b6b6"}},footerCopyright:Object(c.a)({fontSize:"24px",textAlign:"center",paddingTop:"15px"},e.breakpoints.down("sm"),{paddingBottom:"10px"})}})));function W(){var e=U(),t=e.footer,n=e.lowerLinks,a=e.footerButtons,i=e.footerCopyright;return Object(O.jsx)("footer",{className:t,children:Object(O.jsx)(D.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:n,children:[Object(O.jsx)(L.a,{href:"https://github.com/ElusiveSkies",target:"_blank",children:Object(O.jsx)(K.a,{fontSize:"42px",className:a})}),Object(O.jsx)(L.a,{href:"mailto: elusiveskies@gmail.com",target:"_blank",children:Object(O.jsx)(F.a,{fontSize:"42px",className:a})})]}),Object(O.jsx)("div",{className:i,children:Object(O.jsx)("div",{children:"\xa9 2021 Copyright Casey Twine"})})]})})})}var J=Object(s.a)((function(e){return{content:Object(c.a)({display:"flex",justifyContent:"center",paddingTop:"45px",minHeight:"calc(100vh - 288px)",width:"100%"},e.breakpoints.down("sm"),{minHeight:"calc(100vh - 250px)"}),noResults:{fontSize:"3rem",textAlign:"center"}}}));function Y(){var e=J(),t=e.content,n=e.noResults,i=Object(a.useState)({}),r=Object(o.a)(i,2),c=r[0],s=r[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),h=d[0],p=d[1],j=function(e){return b(e).then((function(e){return s(e.data.results)})).catch((function(e){return console.log(e)}))};Object(a.useEffect)((function(){j("Holiday")}),[]);var u=function(e){e.preventDefault(),j(h)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(B,{handleFormSubmit:u,handleInputChange:function(e){return p(e.target.value)},handleKeypress:function(e){13===e.keyCode&&u(e)}}),Object(O.jsx)("div",{className:t,children:c.length?Object(O.jsx)(S,{result:c}):Object(O.jsxs)("h2",{className:n,children:["No results were found.",Object(O.jsx)("br",{})," Please try searching for something else to watch!"]})}),Object(O.jsx)(W,{})]})}function q(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsx)(Y,{})})})}var G=n(83);n(119).config(),r.a.render(Object(O.jsx)(G.a,{children:Object(O.jsx)(q,{})}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.8b1ce4b1.chunk.js.map