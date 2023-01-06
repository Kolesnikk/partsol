(function(){"use strict";var t={897:function(t,e,n){var i=n(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view"),e("Footer")],1)},s=[],a=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"container header-container"},[e("div",{staticClass:"header__content"},[e("div",{staticClass:"header__content-logo"},[e("router-link",{attrs:{to:{name:"home"}}},[t._v(" Partniers ")])],1),e("div",{staticClass:"header__content-nav"},[e("ul",{staticClass:"nav__menu",class:{active:t.isActive}},t._l(t.menu,(function(n){return e("li",{key:n.id,on:{click:function(e){t.isActive=!1}}},[e("router-link",{attrs:{to:{name:n.path},"active-class":"active-link"},on:{click:function(e){t.isActive=!1}}},[t._v(t._s(n.name))])],1)})),0)]),e("button",{staticClass:"hamburger",on:{click:function(e){t.isActive=!t.isActive}}},[e("span")])])])])},r=[],c={name:"header-component",data(){return{menu:[{name:"О нас",path:"about",id:0},{name:"Направления",path:"directions",id:1},{name:"Партнеры",path:"partniers",id:2},{name:"Связаться с нами",path:"contact",id:3}],isActive:!1}}},l=c,d=n(1),p=(0,d.Z)(l,a,r,!1,null,"737cb720",null),u=p.exports,m=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer__content"},[e("div",{staticClass:"footer__content-logo"},[e("router-link",{attrs:{to:{name:"home"}}},[t._v("Partniers & Solutions")])],1),e("div",{staticClass:"footer__content-info"},[e("h2",[t._v("Информация")]),e("ul",t._l(t.info,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:n.link}}},[t._v(t._s(n.name))])],1)})),0)]),e("div",{staticClass:"footer__content-contact"},[e("h2",[t._v("Контакты")]),e("a",{attrs:{href:"tel:+998998012666"}},[t._v("+998998012666")]),e("router-link",{attrs:{to:{name:"contact"}}},[t._v("ОСТАВИТЬ ЗАЯВКУ")])],1)])])])},h=[],f={name:"footer-component",data(){return{info:[{id:0,name:"О НАС",link:"about"},{id:1,name:"НАПРАВЛЕНИЯ",link:"directions"},{id:2,name:"ПАРТНЕРЫ",link:"partniers"}]}}},v=f,_=(0,d.Z)(v,m,h,!1,null,null,null),b=_.exports,g={name:"App",components:{Header:u,Footer:b}},w=g,y=(0,d.Z)(w,o,s,!1,null,null,null),C=y.exports,k=n(345),x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Home"},[e("div",{staticClass:"home__banner"},[e("div",{staticClass:"container"},[e("div",{staticClass:"home__banner-wrapper"},[e("div",{staticClass:"banner-content"},[e("h1",[t._v("Мировой лидер")]),t._m(0),e("router-link",{staticClass:"button",attrs:{to:{name:"contact"}}},[t._v("связаться с нами")])],1)])])]),e("div",{staticClass:"home__mission"},[e("div",{staticClass:"container"},[e("div",{staticClass:"home__mission-wrapper"},[e("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:{down:"toTop"},expression:"{down : 'toTop'}"}],staticClass:"mission-content"},[e("h1",[t._v("Наши цели")]),t._m(1),e("router-link",{staticClass:"button",attrs:{to:{name:"about"}}},[t._v("Подробнее")])],1)])])]),e("div",{staticClass:"home__team"},[e("div",{staticClass:"container"},[e("div",{staticClass:"home__team-wrapper"},[e("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:{down:"toTop"},expression:"{down : 'toTop'}"}],staticClass:"team-content"},[e("h1",[t._v("Наша команда")]),t._m(2),e("router-link",{staticClass:"button",attrs:{to:{name:"about"}}},[t._v("Подробнее")])],1)])])]),e("div",{staticClass:"home__directions"},[e("div",{staticClass:"container"},[e("div",{staticClass:"home__directions-wrapper"},[e("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:{down:"toTop"},expression:"{down : 'toTop'}"}],staticClass:"directions-content"},[e("h1",[t._v("Направления")]),t._m(3),e("router-link",{staticClass:"button",attrs:{to:{name:"directions"}}},[t._v("Подробнее")])],1)])])]),e("div",{staticClass:"home__partniers"},[e("div",{staticClass:"container"},[e("div",{staticClass:"home__partniers-wrapper"},[e("div",{directives:[{name:"animate-onscroll",rawName:"v-animate-onscroll",value:{down:"toTop"},expression:"{down : 'toTop'}"}],staticClass:"partniers-content"},[e("h1",[t._v("Наши партнеры")]),t._m(4),e("router-link",{staticClass:"button",attrs:{to:{name:"partniers"}}},[t._v("Подробнее")])],1)])])])])},D=[function(){var t=this,e=t._self._c;return e("p",[e("span",[t._v("Partniers & Solutions")]),t._v(" мировой лидер и еще что-то...")])},function(){var t=this,e=t._self._c;return e("p",[e("span",[t._v("Мы поможем вам")]),t._v(" стать успешными как мы!)")])},function(){var t=this,e=t._self._c;return e("p",[e("span",[t._v("Лучшие специалисты мира")]),t._v(" будут работать над вашим успехом")])},function(){var t=this,e=t._self._c;return e("p",[e("span",[t._v("Все направления")]),t._v(" которые вам нужны!")])},function(){var t=this,e=t._self._c;return e("p",[e("span",[t._v("Самые крупные компании")]),t._v(" такие как SpaceX")])}],T={name:"home-page"},O=T,E=(0,d.Z)(O,x,D,!1,null,"28943ab6",null),A=E.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("h1",[t._v("MISSION & VISION")]),t._m(0),t._m(1),e("div",{staticClass:"about__position"},[e("h2",{staticClass:"title"},[t._v("BRAND POSITION")]),t._m(2),e("ul",{staticClass:"list"},t._l(t.list,(function(n){return e("li",{key:n},[t._v(" "+t._s(n)+" ")])})),0)]),t._m(3),t._m(4)])])},B=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about__mission"},[e("h2",{staticClass:"title"},[t._v("OUR MISSION")]),e("p",{staticClass:"text"},[e("b",[t._v("Our mission is to build smarter through multifunctional construction robots based on 3D printing technology.")]),t._v(" We constantly improve printing speed, efficiency, labor need, and material cost to challenge conventional construction.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"about__vision"},[e("h2",{staticClass:"title"},[t._v("OUR VISION")]),e("p",{staticClass:"text"},[e("b",[t._v("Our vision is to automate minimum 50% of construction processes on building sites around the world")]),t._v("With our future printer systems, the printers can hardly be called just printers anymore – they will be multifunctional construction robots. Right now, we are working with the first movers. We are ahead of tomorrow’s norms and the big volume market. However, we will democratize 3D construction, making it accessible to all. Maturing technology and lowering risk – selling 3D robotics & automation solutions beyond first-movers and entrepreneurs.")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text"},[e("b",[t._v("The world leader in 3D construction printing solutions.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"image"},[e("img",{attrs:{src:n(969),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"about__strategy"},[e("h2",{staticClass:"title"},[t._v("STRATEGY")]),e("p",{staticClass:"text"},[e("b",[t._v("First! And continuously improving.")])]),e("p",{staticClass:"text"},[t._v("We conduct extensive research, development, and collaboration with the globally leading academic institutions, material suppliers, and the most demanding customers in the industry. We constantly push the limits of applications, size, speed, and automation by taking on new challenges in construction. We expand our architecture, design, engineering, and construction competencies to support our clients in executing state-of-the-art automated and printed construction projects.")]),e("p",{staticClass:"text"},[t._v("We work based on open-source both for software and materials, and we welcome any chance we can to cooperate on making better solutions.")]),e("p",{staticClass:"text"},[t._v("We deliver a high-quality modular system, which is future-proof for retrofit, expansion, innovation, and robotics.")])])}],L={name:"about-page",data(){return{list:["Leading in VOLUME with most printers sold globally. The total of COBOD printers will reach 100 next year.","Leading in APPLICATIONS from residential and commercial buildings to wind turbine towers.","Leading in TECHNOLOGY with unsurpassed hard- and software solutions facilitating the fastest and tallest construction of multi-story buildings.","Leading in COST based on the game-changing D.fab solution, reducing the cost of 3D printable materials with 90% vs. industry standards."]}}},I=L,W=(0,d.Z)(I,R,B,!1,null,null,null),N=W.exports,F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"directions"},[e("div",{staticClass:"container"},[e("h1",[t._v("Направления компании")]),e("ul",t._l(t.list,(function(i){return e("li",{key:i.id,on:{click:function(t){i.isActive=!i.isActive}}},[e("img",{class:{active:i.isActive},attrs:{src:n(90)}}),e("h2",[t._v(t._s(i.title))]),e("p",{class:{active:i.isActive}},[t._v(t._s(i.text))])])})),0)])])},G=[],S={name:"directions-page",data(){return{list:[{isActive:!1,id:0,title:"Образование",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:1,title:"Строительство",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:2,title:"Сельское хозяйство",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:3,title:"Автодорожное хозяйство",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:4,title:"Пищевые добавки",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:5,title:"Логистика",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:6,title:"Ритэил",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:7,title:"Телекоммуникация",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:8,title:"Медицинская клиника",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:9,title:"IT решения",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."},{isActive:!1,id:10,title:"Благотворительность",text:"The BOD2 3D printer is the fastest 3D construction printer on the market, with a print speed of up to 1000 mm/s. Without a safety fence, the printer can be operated at speeds of up to 250 mm/s. For faster speeds, a safety fence needs to be installed to comply with EU certification. The speed makes the technology even more competitive compared to traditional construction technology."}]}}},Z=S,P=(0,d.Z)(Z,F,G,!1,null,null,null),U=P.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"partniers"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("Наши партнеры")]),e("p",{staticClass:"subtitle"},[t._v("We are delighted to present some of the achievements and collaborations of COBOD. ")]),e("div",{staticClass:"partniers__content"},t._l(t.card,(function(n){return e("div",{key:n.id,staticClass:"partniers__content-card"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:n.img,alt:""}})]),e("div",{staticClass:"text"},[e("h2",[t._v(t._s(n.title))]),e("p",[t._v(t._s(n.text))])])])})),0)])])},z=[],H={name:"partniers-page",data(){return{card:[{id:0,img:n(430),title:"GENERAL ELECTRIC",text:"GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost."},{id:1,img:n(430),title:"GENERAL ELECTRIC",text:"GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost."},{id:2,img:n(430),title:"GENERAL ELECTRIC",text:"GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost."},{id:0,img:n(430),title:"GENERAL ELECTRIC",text:"GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost."},{id:1,img:n(430),title:"GENERAL ELECTRIC",text:"GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost."},{id:2,img:n(430),title:"GENERAL ELECTRIC",text:"GE Renewable Energy combines one of the broadest portfolios in the renewable energy industry to provide end-to-end solutions to customers demanding reliable and affordable green power. Together with COBOD they are developing and optimizing 3D printed concrete bases for wind turbines, which would be printed directly on-site and allow the towers to be taller than traditional all steel ones, enabling the capture of stronger winds generating more energy at a lower cost."}]}}},M=H,Q=(0,d.Z)(M,j,z,!1,null,"ee4acd38",null),V=Q.exports,X=function(){var t=this;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("Связаться с нами")]),e("div",{staticClass:"contact__content"},[e("div",{staticClass:"contact__content-left"},[e("div",{staticClass:"contact__content-left-wrapper"},[e("div",{staticClass:"phone"},[e("h2",{staticClass:"subtitle"},[t._v("Контактные номера")]),e("p",{staticClass:"text"},[t._v("Наш колл центр")]),e("a",{staticClass:"link",attrs:{href:"tel:+998998012666"}},[t._v("+998998012666")])]),e("div",{staticClass:"socials"},[e("h2",{staticClass:"subtitle"},[t._v("Наши соц сети")]),e("a",{staticClass:"link",attrs:{href:"https://t.me/D_ramir",target:"_blunk"}},[t._v("Telegram: @D_ramir")]),e("a",{staticClass:"link",attrs:{href:"https://t.me/D_ramir",target:"_blunk"}},[t._v("Telegram: @Success")])])]),e("div",{staticClass:"location"},[e("h2",{staticClass:"subtitle"},[t._v("Наше местоположение")]),e("iframe",{staticClass:"loc",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.8721134273706!2d69.24585928156722!3d41.336174854713924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7c31d8bde5%3A0xab8867170443354b!2zNiBTaGltb2xpeSBPbG1hem9yIFN0ci4sIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1672775310572!5m2!1sru!2s",width:"400",height:"300",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])]),e("form",{staticClass:"form",attrs:{action:""}},[e("label",{attrs:{for:"name"}},[e("span",[t._v("Имя")]),e("input",{attrs:{type:"text",id:"name",placeholder:"Рамир"}})]),e("label",{attrs:{for:"email"}},[e("span",[t._v("Email")]),e("input",{attrs:{type:"email",id:"email",placeholder:"example@gmail.com"}})]),e("label",{attrs:{for:"phone"}},[e("span",[t._v("Номер телефона")]),e("input",{attrs:{type:"text",id:"phone",placeholder:"+998998012666"}})]),e("label",{attrs:{for:"country"}},[e("span",[t._v("Страна")]),e("input",{attrs:{type:"text",id:"country",placeholder:"Узбекистан"}})]),e("label",{attrs:{for:"city"}},[e("span",[t._v("Город")]),e("input",{attrs:{type:"text",id:"city",placeholder:"Ташкент"}})]),e("label",{attrs:{for:"company-name"}},[e("span",[t._v("Название компании")]),e("input",{attrs:{type:"text",id:"company-name",placeholder:"spaceX"}})]),e("button",{staticClass:"submit",attrs:{type:"submit"}},[t._v("Оставить заявку")])])])])])}],q={name:"contact-page"},$=q,J=(0,d.Z)($,X,Y,!1,null,"720f741a",null),K=J.exports;i.ZP.use(k.ZP);const tt=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:N},{path:"/directions",name:"directions",component:U},{path:"/partniers",name:"partniers",component:V},{path:"/contact",name:"contact",component:K}],et=new k.ZP({mode:"history",base:"/partsol/",routes:tt,scrollBehavior(t,e,n){return n||{x:0,y:0}}});var nt=et,it=n(61);i.ZP.use(it.Z),i.ZP.config.productionTip=!1,new i.ZP({router:nt,render:t=>t(C)}).$mount("#app")},90:function(t,e,n){t.exports=n.p+"img/arrow.6c16d6d3.svg"},969:function(t,e,n){t.exports=n.p+"img/partniers_bg.853f3ad4.jpg"},430:function(t,e,n){t.exports=n.p+"img/spacex.c8cd7aab.jpg"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,s){if(!i){var a=1/0;for(d=0;d<t.length;d++){i=t[d][0],o=t[d][1],s=t[d][2];for(var r=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(r=!1,s<a&&(a=s));if(r){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[i,o,s]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/partsol/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,s,a=i[0],r=i[1],c=i[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(c)var d=c(n)}for(e&&e(i);l<a.length;l++)s=a[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},i=self["webpackChunkpartners_solutions"]=self["webpackChunkpartners_solutions"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(897)}));i=n.O(i)})();
//# sourceMappingURL=app.b004e1ce.js.map