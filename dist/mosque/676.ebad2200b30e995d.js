"use strict";(self.webpackChunkmosque=self.webpackChunkmosque||[]).push([[676],{1676:(u,d,r)=>{r.r(d),r.d(d,{NewsModule:()=>f});var n=r(6895),g=r(3057),e=r(1571),h=r(7604),p=r(2235);function s(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"div",20),e._UZ(1,"img",21),e.TgZ(2,"div",22),e._UZ(3,"div",23)(4,"div",23),e.TgZ(5,"div",24)(6,"button",25),e.NdJ("click",function(){const l=e.CHM(t).$implicit,b=e.oxw();return e.KtG(b.fullDescription(l))}),e._uU(7,"See More "),e.O4$(),e.TgZ(8,"svg",26),e._UZ(9,"path",27),e.qZA()(),e.kcU(),e.TgZ(10,"button",28),e._uU(11),e.qZA()()()()}if(2&o){const t=m.$implicit,i=e.oxw();e.xp6(1),e.Q6J("src",t.bannerUrl,e.LSH),e.xp6(2),e.Q6J("innerHTML",t.title_En,e.oJD),e.xp6(1),e.Q6J("innerHTML",i.getTruncatedDescription(t.contents_En),e.oJD),e.xp6(7),e.Oqu(t.author)}}function c(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"li",8)(1,"a",11),e.NdJ("click",function(){const l=e.CHM(t).$implicit,b=e.oxw();return e.KtG(b.setPage(l))}),e._uU(2),e.qZA()()}if(2&o){const t=m.$implicit,i=e.oxw();e.ekj("active",t===i.currentPage),e.xp6(2),e.Oqu(t)}}const v=[{path:"",component:(()=>{class o{constructor(t){this.mediaService=t,this.pageSize=9,this.totalItems=0,this.currentPage=1,this.pageSizeOptions=[6,12,24],this.fullDescriptionSelected={},this.pagedNewsList=[],this.newsList=[]}ngOnInit(){this.getNews()}getNews(){this.mediaService.getNews().subscribe({next:t=>{t.length>0&&(this.newsList=[...t],this.totalItems=this.newsList.length,this.setPage(1))},error:t=>{console.error("There was an error!",t)}})}addNewsViews(t){this.mediaService.addNewsViews(t).subscribe({next:i=>{},error:i=>{console.error("There was an error!",i)}})}getTruncatedDescription(t){return t.substring(0,100)+"..."}fullDescription(t){this.addNewsViews(t.id),this.fullDescriptionSelected=t}handleCloseFatwa(t){this.getNews()}openBookLink(t){window.open(t,"_blank")}setPage(t){this.currentPage=t;const i=(t-1)*this.pageSize;this.pagedNewsList=this.newsList.slice(i,i+this.pageSize)}prevPage(){this.currentPage>1&&this.setPage(this.currentPage-1)}nextPage(){this.totalPages=Math.ceil(this.totalItems/this.pageSize),this.currentPage<this.totalPages&&this.setPage(this.currentPage+1)}get pages(){return this.totalPages=Math.ceil(this.totalItems/this.pageSize),Array.from({length:this.totalPages},(t,i)=>i+1)}changePageSize(t){this.pageSize=t,this.setPage(1)}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(h.y))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-news"]],decls:25,vars:10,consts:[[3,"imageURL","imageName"],[1,"container-fluid","mb-4","p-5"],[1,"row"],["class","col-md-3 col-sm-12",4,"ngFor","ngForOf"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[1,"d-flex","justify-content-center","align-items-center","mb-3"],["aria-label","Page navigation example"],[1,"pagination"],[1,"page-item"],["tabindex","-1","aria-disabled","true",1,"page-link",3,"click"],["class","page-item",3,"active",4,"ngFor","ngForOf"],[1,"page-link",3,"click"],["id","descriptionModal","tabindex","-1","role","dialog","aria-labelledby","descriptionModalTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLongTitle",1,"modal-title",3,"innerHTML"],[1,"modal-body",3,"innerHTML"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],[1,"col-md-3","col-sm-12"],[1,"card-img-top","img-fluid",2,"max-height","200px","border-radius","60px 15px","box-shadow","0px 4px 10px 0px rgba(21, 120, 212, 0.10)",3,"src"],[1,"p-3"],[3,"innerHTML"],[1,"d-flex","flex-wrap","justify-content-between"],["type","button","data-bs-toggle","modal","data-bs-target","#descriptionModal",1,"btn","btn-seemore","btn-primary",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 16 16","fill","none"],["d","M15.7912 5.818L11.7911 9.59536C11.3694 9.99356 10.6667 9.69834 10.6667 9.1107V7.11173C6.65069 7.13867 4.9565 8.08709 6.08958 11.8715C6.21411 12.2874 5.73275 12.6095 5.39497 12.3529C4.31256 11.5307 3.33333 9.958 3.33333 8.37053C3.33333 4.37228 6.59997 3.57886 10.6667 3.55631V1.55589C10.6667 0.967725 11.3699 0.673447 11.7911 1.07123L15.7912 4.84867C16.0695 5.11153 16.0697 5.55492 15.7912 5.818ZM10.6667 11.4202V13.3333H1.77778V4.44445H3.19211C3.237 4.44442 3.28142 4.43532 3.3227 4.41769C3.36398 4.40006 3.40127 4.37427 3.43233 4.34186C3.84769 3.90942 4.32781 3.56714 4.84939 3.29531C5.15856 3.13417 5.044 2.66667 4.69536 2.66667H1.33333C0.596944 2.66667 0 3.26361 0 4V13.7778C0 14.5142 0.596944 15.1111 1.33333 15.1111H11.1111C11.8475 15.1111 12.4444 14.5142 12.4444 13.7778V11.3109C12.4444 11.0807 12.2168 10.9202 11.9997 10.997C11.6954 11.1046 11.3695 11.1368 11.05 11.0908C10.8481 11.0618 10.6667 11.2162 10.6667 11.4202Z","fill","#F1F8FF"],[1,"Second-btn"]],template:function(i,a){1&i&&(e._UZ(0,"app-main-banner",0),e.TgZ(1,"div",1)(2,"div")(3,"div",2),e.YNc(4,s,12,4,"div",3),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"nav",6)(8,"ul",7)(9,"li",8)(10,"a",9),e.NdJ("click",function(){return a.prevPage()}),e._uU(11,"Previous"),e.qZA()(),e.YNc(12,c,3,3,"li",10),e.TgZ(13,"li",8)(14,"a",11),e.NdJ("click",function(){return a.nextPage()}),e._uU(15,"Next"),e.qZA()()()()()()()(),e.TgZ(16,"div",12)(17,"div",13)(18,"div",14)(19,"div",15),e._UZ(20,"h5",16),e.qZA(),e._UZ(21,"div",17),e.TgZ(22,"div",18)(23,"button",19),e.NdJ("click",function(){return a.handleCloseFatwa(a.fullDescriptionSelected)}),e._uU(24,"Close"),e.qZA()()()()()),2&i&&(e.Q6J("imageURL","/assets/image/slider/articles.png")("imageName","News"),e.xp6(4),e.Q6J("ngForOf",a.pagedNewsList),e.xp6(5),e.ekj("disabled",1===a.currentPage),e.xp6(3),e.Q6J("ngForOf",a.pages),e.xp6(1),e.ekj("disabled",a.currentPage===a.totalPages),e.xp6(7),e.Q6J("innerHTML",a.fullDescriptionSelected.title_En,e.oJD),e.xp6(1),e.Q6J("innerHTML",a.fullDescriptionSelected.contents_En,e.oJD))},dependencies:[n.sg,p.e],styles:[".w-40[_ngcontent-%COMP%]{width:40%}.w-90[_ngcontent-%COMP%]{width:90%}.Gray-btn[_ngcontent-%COMP%]:hover{background:var(--Nature-6, #0345d3)}.HandColor[_ngcontent-%COMP%]{font-size:20px;font-style:normal;font-weight:400;line-height:28px;padding:5px 20px;background-color:#3b4459;gap:10px}.btn-seemore[_ngcontent-%COMP%]{display:flex;padding:0 20px;justify-content:center;align-items:center;gap:10px;border-radius:5px;background:linear-gradient(83deg,#4A9CE9 0%,#1578D4 100%)}.Second-btn[_ngcontent-%COMP%]{border-radius:0%;border-color:transparent;background-color:transparent}"]})}return o})()}];let x=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(v),g.Bz]})}return o})();var w=r(990);let f=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[n.ez,x,w.m]})}return o})()},2235:(u,d,r)=>{r.d(d,{e:()=>g});var n=r(1571);let g=(()=>{class e{ngOnInit(){}static#e=this.\u0275fac=function(s){return new(s||e)};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-main-banner"]],inputs:{imageURL:"imageURL",imageName:"imageName"},decls:15,vars:3,consts:[["id","carouselBasicExample","data-mdb-ride","carousel","data-mdb-carousel-init","",1,"carousel","slide","carousel-fade"],[1,"carousel-inner"],[1,"carousel-item","active"],[1,"d-block","w-100",3,"src","alt"],[1,"carousel-caption","d-none","d-md-block"],[1,""],["type","button","data-mdb-target","#carouselBasicExample","data-mdb-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-mdb-target","#carouselBasicExample","data-mdb-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"]],template:function(s,c){1&s&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.TgZ(4,"div",4)(5,"h1",5),n._uU(6),n.qZA()()(),n.TgZ(7,"button",6),n._UZ(8,"span",7),n.TgZ(9,"span",8),n._uU(10,"Previous"),n.qZA()(),n.TgZ(11,"button",9),n._UZ(12,"span",10),n.TgZ(13,"span",8),n._uU(14,"Next"),n.qZA()()()()),2&s&&(n.xp6(3),n.Q6J("src",c.imageURL,n.LSH)("alt",c.imageName),n.xp6(3),n.Oqu(c.imageName))},styles:[".container[_ngcontent-%COMP%]{margin:0;padding:0}.bd-placeholder-img[_ngcontent-%COMP%]{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;user-select:none}@media (min-width: 768px){.bd-placeholder-img-lg[_ngcontent-%COMP%]{font-size:3.5rem}}.b-example-divider[_ngcontent-%COMP%]{width:100%;height:3rem;background-color:#0000001a;border:solid rgba(0,0,0,.15);border-width:1px 0;box-shadow:inset 0 .5em 1.5em #0000001a,inset 0 .125em .5em #00000026}.b-example-vr[_ngcontent-%COMP%]{flex-shrink:0;width:1.5rem;height:100vh}.bi[_ngcontent-%COMP%]{vertical-align:-.125em;fill:currentColor}.nav-scroller[_ngcontent-%COMP%]{position:relative;z-index:2;height:2.75rem;overflow-y:hidden}.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;padding-bottom:1rem;margin-top:-1px;overflow-x:auto;text-align:center;white-space:nowrap;-webkit-overflow-scrolling:touch}.btn-bd-primary[_ngcontent-%COMP%]{--bd-violet-bg: #712cf9;--bd-violet-rgb: 112.520718, 44.062154, 249.437846;--bs-btn-font-weight: 600;--bs-btn-color: var(--bs-white);--bs-btn-bg: var(--bd-violet-bg);--bs-btn-border-color: var(--bd-violet-bg);--bs-btn-hover-color: var(--bs-white);--bs-btn-hover-bg: #6528e0;--bs-btn-hover-border-color: #6528e0;--bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);--bs-btn-active-color: var(--bs-btn-hover-color);--bs-btn-active-bg: #5a23c8;--bs-btn-active-border-color: #5a23c8}.bd-mode-toggle[_ngcontent-%COMP%]{z-index:1500}.bd-mode-toggle[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{display:block!important}.carousel-caption[_ngcontent-%COMP%]{width:max-content;padding:10px;border-radius:15px;border:1px solid var(--blue-blue-1, #83BDF2);background:var(--header-lable, rgba(19, 24, 43, .8));box-shadow:0 0 10px #1578d4;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);position:absolute;bottom:30%;left:45%;color:#fff;text-align:center}.sliderContainer[_ngcontent-%COMP%]{width:max-content;padding:10px;border-radius:15px;border:1px solid var(--blue-blue-1, #83BDF2);background:var(--header-lable, rgba(19, 24, 43, .8));box-shadow:0 0 10px #1578d4;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.sliderTitle[_ngcontent-%COMP%]{color:var(--Nature-10, #F6F8FC);font-family:Poppins;font-size:36px;font-style:normal;font-weight:600;line-height:44px;margin:0 20px;position:absolute}"]})}return e})()}}]);