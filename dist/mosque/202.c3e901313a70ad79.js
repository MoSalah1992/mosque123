"use strict";(self.webpackChunkmosque=self.webpackChunkmosque||[]).push([[202],{6758:($,A,u)=>{u.r(A),u.d(A,{MediaModule:()=>r});var e=u(6895),v=u(3057),m=u(1571);const P=[{path:"video",loadChildren:()=>Promise.all([u.e(762),u.e(887)]).then(u.bind(u,4887)).then(i=>i.VideoModule)},{path:"audio",loadChildren:()=>u.e(561).then(u.bind(u,4561)).then(i=>i.AudioModule)},{path:"articles",loadChildren:()=>u.e(990).then(u.bind(u,3587)).then(i=>i.ArticlesModule)},{path:"books",loadChildren:()=>u.e(134).then(u.bind(u,1134)).then(i=>i.BooksModule)},{path:"news",loadChildren:()=>u.e(676).then(u.bind(u,1676)).then(i=>i.NewsModule)},{path:"liveStream",loadChildren:()=>u.e(498).then(u.bind(u,498)).then(i=>i.LiveStreamModule)}];let f=(()=>{class i{static#e=this.\u0275fac=function(I){return new(I||i)};static#n=this.\u0275mod=m.oAB({type:i});static#t=this.\u0275inj=m.cJS({imports:[v.Bz.forChild(P),v.Bz]})}return i})();var B=u(990),w=u(8567),T=u(7604),U=u(529);let r=(()=>{class i{static#e=this.\u0275fac=function(I){return new(I||i)};static#n=this.\u0275mod=m.oAB({type:i});static#t=this.\u0275inj=m.cJS({providers:[T.y],imports:[e.ez,f,B.m,w.JX,U.JF]})}return i})()},7604:($,A,u)=>{u.d(A,{y:()=>w});var e=u(1261),v=u(4004),m=u(262),P=u(2843),f=u(529),B=u(1571);let w=(()=>{class T{constructor(r){this.http=r}getVideoHome(){const r=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}Video/VideoHome`,{headers:r}).pipe((0,v.U)(i=>i),(0,m.K)(i=>(0,P._)(()=>i)))}getVideoById(r){const i=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}Video/${r}`,{headers:i}).pipe((0,v.U)(l=>l),(0,m.K)(l=>(0,P._)(()=>l)))}addVideoViews(r){const i=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.post(`${e.N.api}Video/AddView?id=${r}`,null,{headers:i}).pipe((0,v.U)(l=>l),(0,m.K)(l=>(0,P._)(()=>l)))}getAudioHome(){const r=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}audio/audioHome`,{headers:r}).pipe((0,v.U)(i=>i),(0,m.K)(i=>(0,P._)(()=>i)))}getEventAudio(r){const i=(new f.WM).set("Content-Type","text/plain; charset=utf-8");let l=new f.LE;return l=l.append("EventAudio",r),this.http.get(`${e.N.api}EventAudio`,{headers:i}).pipe((0,v.U)(d=>d),(0,m.K)(d=>(0,P._)(()=>d)))}addAudioViews(r){const i=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.post(`${e.N.api}Audio/AddView?id=${r}`,null,{headers:i}).pipe((0,v.U)(l=>l),(0,m.K)(l=>(0,P._)(()=>l)))}getMediaType(){const r=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}MediaType`,{headers:r}).pipe((0,v.U)(i=>i),(0,m.K)(i=>(0,P._)(()=>i)))}getSeries(){const r=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}Series`,{headers:r}).pipe((0,v.U)(i=>i),(0,m.K)(i=>(0,P._)(()=>i)))}getThread(){const r=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}Thread`,{headers:r}).pipe((0,v.U)(i=>i),(0,m.K)(i=>(0,P._)(()=>i)))}getLecturer(){const r=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}Lecturer`,{headers:r}).pipe((0,v.U)(i=>i),(0,m.K)(i=>(0,P._)(()=>i)))}getArticles(r){let i=new f.LE;void 0!==r.pageIndex&&(i=i.set("pageIndex",r.pageIndex.toString())),void 0!==r.pageSize&&(i=i.set("pageSize",r.pageSize.toString())),void 0!==r.OrderBy&&(i=i.set("OrderBy",r.OrderBy.toString())),void 0!==r.OrderDirection&&(i=i.set("OrderDirection",r.OrderDirection.toString())),void 0!==r.Trim&&(i=i.set("Trim",r.Trim.toString())),void 0!==r.PrivateFileId&&(i=i.set("PrivateFileId",r.PrivateFileId.toString()));const l=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}article`,{headers:l,params:i}).pipe((0,v.U)(d=>d),(0,m.K)(d=>(0,P._)(()=>d)))}getBooks(r,i,l,d,I){let C=new f.LE;void 0!==r&&(C=C.set("pageIndex",r.toString())),void 0!==i&&(C=C.set("pageSize",i.toString())),void 0!==l&&(C=C.set("OrderBy",l.toString())),void 0!==d&&(C=C.set("OrderDirection",d.toString())),void 0!==I&&(C=C.set("Trim",I.toString()));const c=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}Book`,{headers:c,params:C}).pipe((0,v.U)(x=>x),(0,m.K)(x=>(0,P._)(()=>x)))}getVideos(r){let i=new f.LE;void 0!==r.pageIndex&&(i=i.set("pageIndex",r.pageIndex.toString())),void 0!==r.pageSize&&(i=i.set("pageSize",r.pageSize.toString())),void 0!==r.OrderBy&&(i=i.set("OrderBy",r.OrderBy.toString())),void 0!==r.OrderDirection&&(i=i.set("OrderDirection",r.OrderDirection.toString())),void 0!==r.Trim&&(i=i.set("Trim",r.Trim.toString())),void 0!==r.PrivateFileId&&(i=i.set("PrivateFileId",r.PrivateFileId.toString())),void 0!==r.ThreadId&&(i=i.set("ThreadId",r.ThreadId.toString())),void 0!==r.MediaTypeId&&(i=i.set("MediaTypeId",r.MediaTypeId.toString())),void 0!==r.SeriesId&&(i=i.set("SeriesId",r.SeriesId.toString())),void 0!==r.LecturerId&&(i=i.set("LecturerId",r.LecturerId.toString()));const l=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}Video`,{headers:l,params:i}).pipe((0,v.U)(d=>d),(0,m.K)(d=>(0,P._)(()=>d)))}getAudios(r){let i=new f.LE;void 0!==r.pageIndex&&(i=i.set("pageIndex",r.pageIndex.toString())),void 0!==r.pageSize&&(i=i.set("pageSize",r.pageSize.toString())),void 0!==r.OrderBy&&(i=i.set("OrderBy",r.OrderBy.toString())),void 0!==r.OrderDirection&&(i=i.set("OrderDirection",r.OrderDirection.toString())),void 0!==r.Trim&&(i=i.set("Trim",r.Trim.toString())),void 0!==r.PrivateFileId&&(i=i.set("PrivateFileId",r.PrivateFileId.toString())),void 0!==r.ThreadId&&(i=i.set("ThreadId",r.ThreadId.toString())),void 0!==r.MediaTypeId&&(i=i.set("MediaTypeId",r.MediaTypeId.toString())),void 0!==r.SeriesId&&(i=i.set("SeriesId",r.SeriesId.toString())),void 0!==r.LecturerId&&(i=i.set("LecturerId",r.LecturerId.toString()));const l=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}Audio`,{headers:l,params:i}).pipe((0,v.U)(d=>d),(0,m.K)(d=>(0,P._)(()=>d)))}getCards(r,i,l,d,I,C){let c=new f.LE;void 0!==r&&(c=c.set("pageIndex",r.toString())),void 0!==i&&(c=c.set("pageSize",i.toString())),void 0!==l&&(c=c.set("OrderBy",l.toString())),void 0!==d&&(c=c.set("OrderDirection",d.toString())),void 0!==I&&(c=c.set("Trim",I.toString())),void 0!==C&&(c=c.set("PrivateFileId",C.toString()));const x=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}card`,{headers:x,params:c}).pipe((0,v.U)(_=>_),(0,m.K)(_=>(0,P._)(()=>_)))}getLiveStream(){const r=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}LiveStream`,{headers:r}).pipe((0,v.U)(i=>i),(0,m.K)(i=>(0,P._)(()=>i)))}getNews(r,i,l,d,I,C){let c=new f.LE;void 0!==r&&(c=c.set("pageIndex",r.toString())),void 0!==i&&(c=c.set("pageSize",i.toString())),void 0!==l&&(c=c.set("OrderBy",l.toString())),void 0!==d&&(c=c.set("OrderDirection",d.toString())),void 0!==I&&(c=c.set("Trim",I.toString())),void 0!==C&&(c=c.set("NewsTypeId",C.toString()));const x=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}news`,{headers:x,params:c}).pipe((0,v.U)(_=>_),(0,m.K)(_=>(0,P._)(()=>_)))}getFatwa(r,i,l,d,I,C,c){let x=new f.LE;void 0!==r&&(x=x.set("pageIndex",r.toString())),void 0!==i&&(x=x.set("pageSize",i.toString())),void 0!==l&&(x=x.set("OrderBy",l.toString())),void 0!==d&&(x=x.set("OrderDirection",d.toString())),void 0!==I&&(x=x.set("Trim",I.toString())),void 0!==C&&(x=x.set("PrivateFileId",C.toString())),void 0!==c&&(x=x.set("ThreadId",c.toString()));const _=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.get(`${e.N.api}Fatwa`,{headers:_,params:x}).pipe((0,v.U)(E=>E),(0,m.K)(E=>(0,P._)(()=>E)))}addNewsViews(r){const i=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.post(`${e.N.api}News/AddView?id=${r}`,null,{headers:i}).pipe((0,v.U)(l=>l),(0,m.K)(l=>(0,P._)(()=>l)))}addArticleViews(r){const i=(new f.WM).set("Content-Type","text/plain; charset=utf-8");return this.http.post(`${e.N.api}Article/AddView?id=${r}`,null,{headers:i}).pipe((0,v.U)(l=>l),(0,m.K)(l=>(0,P._)(()=>l)))}static#e=this.\u0275fac=function(i){return new(i||T)(B.LFG(f.eN))};static#n=this.\u0275prov=B.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"})}return T})()},8567:($,A,u)=>{u.d(A,{JX:()=>Z,LS:()=>z,_s:()=>x});var e=u(1571),v=u(6895);function m(t,n){if(1&t){var a=e.EpF();e.TgZ(0,"a",11),e.NdJ("keyup.enter",function(){e.CHM(a),e.oxw(3);var s=e.MAs(1);return e.KtG(s.previous())})("click",function(){e.CHM(a),e.oxw(3);var s=e.MAs(1);return e.KtG(s.previous())}),e._uU(1),e.TgZ(2,"span",12),e._uU(3),e.qZA()()}if(2&t){var o=e.oxw(3);e.uIk("aria-label",o.previousLabel+" "+o.screenReaderPageLabel),e.xp6(1),e.hij(" ",o.previousLabel," "),e.xp6(2),e.Oqu(o.screenReaderPageLabel)}}function P(t,n){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.TgZ(2,"span",12),e._uU(3),e.qZA()()),2&t){var a=e.oxw(3);e.xp6(1),e.hij(" ",a.previousLabel," "),e.xp6(2),e.Oqu(a.screenReaderPageLabel)}}function f(t,n){if(1&t&&(e.TgZ(0,"li",8),e.YNc(1,m,4,3,"a",9),e.YNc(2,P,4,2,"span",10),e.qZA()),2&t){e.oxw(2);var a=e.MAs(1);e.ekj("disabled",a.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<a.getCurrent()),e.xp6(1),e.Q6J("ngIf",a.isFirstPage())}}function B(t,n){if(1&t){var a=e.EpF();e.TgZ(0,"a",11),e.NdJ("keyup.enter",function(){e.CHM(a);var g=e.oxw().$implicit;e.oxw(2);var h=e.MAs(1);return e.KtG(h.setCurrent(g.value))})("click",function(){e.CHM(a);var g=e.oxw().$implicit;e.oxw(2);var h=e.MAs(1);return e.KtG(h.setCurrent(g.value))}),e.TgZ(1,"span",12),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&t){var o=e.oxw().$implicit,p=e.oxw(2);e.xp6(2),e.hij("",p.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===o.label?o.label:e.xi3(5,2,o.label,""))}}function w(t,n){if(1&t&&(e.ynx(0),e.TgZ(1,"span",12),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA(),e.BQk()),2&t){var a=e.oxw().$implicit,o=e.oxw(2);e.xp6(2),e.hij("",o.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===a.label?a.label:e.xi3(5,2,a.label,""))}}function T(t,n){if(1&t&&(e.TgZ(0,"li"),e.YNc(1,B,6,5,"a",9),e.YNc(2,w,6,5,"ng-container",10),e.qZA()),2&t){var a=n.$implicit;e.oxw(2);var o=e.MAs(1);e.ekj("current",o.getCurrent()===a.value)("ellipsis","..."===a.label),e.xp6(1),e.Q6J("ngIf",o.getCurrent()!==a.value),e.xp6(1),e.Q6J("ngIf",o.getCurrent()===a.value)}}function U(t,n){if(1&t){var a=e.EpF();e.TgZ(0,"a",11),e.NdJ("keyup.enter",function(){e.CHM(a),e.oxw(3);var s=e.MAs(1);return e.KtG(s.next())})("click",function(){e.CHM(a),e.oxw(3);var s=e.MAs(1);return e.KtG(s.next())}),e._uU(1),e.TgZ(2,"span",12),e._uU(3),e.qZA()()}if(2&t){var o=e.oxw(3);e.uIk("aria-label",o.nextLabel+" "+o.screenReaderPageLabel),e.xp6(1),e.hij(" ",o.nextLabel," "),e.xp6(2),e.Oqu(o.screenReaderPageLabel)}}function r(t,n){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.TgZ(2,"span",12),e._uU(3),e.qZA()()),2&t){var a=e.oxw(3);e.xp6(1),e.hij(" ",a.nextLabel," "),e.xp6(2),e.Oqu(a.screenReaderPageLabel)}}function i(t,n){if(1&t&&(e.TgZ(0,"li",13),e.YNc(1,U,4,3,"a",9),e.YNc(2,r,4,2,"span",10),e.qZA()),2&t){e.oxw(2);var a=e.MAs(1);e.ekj("disabled",a.isLastPage()),e.xp6(1),e.Q6J("ngIf",!a.isLastPage()),e.xp6(1),e.Q6J("ngIf",a.isLastPage())}}function l(t,n){if(1&t&&(e.TgZ(0,"ul",3),e.YNc(1,f,3,4,"li",4),e.TgZ(2,"li",5),e._uU(3),e.qZA(),e.YNc(4,T,3,6,"li",6),e.YNc(5,i,3,4,"li",7),e.qZA()),2&t){var a=e.oxw(),o=e.MAs(1);e.ekj("responsive",a.responsive),e.uIk("aria-label",a.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",a.directionLinks),e.xp6(2),e.AsE(" ",o.getCurrent()," / ",o.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",o.pages)("ngForTrackBy",a.trackByIndex),e.xp6(1),e.Q6J("ngIf",a.directionLinks)}}var d=function(){function t(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}return t.prototype.defaultId=function(){return this.DEFAULT_ID},t.prototype.register=function(n){return null==n.id&&(n.id=this.DEFAULT_ID),this.instances[n.id]?this.updateInstance(n):(this.instances[n.id]=n,!0)},t.prototype.updateInstance=function(n){var a=!1;for(var o in this.instances[n.id])n[o]!==this.instances[n.id][o]&&(this.instances[n.id][o]=n[o],a=!0);return a},t.prototype.getCurrentPage=function(n){if(this.instances[n])return this.instances[n].currentPage},t.prototype.setCurrentPage=function(n,a){if(this.instances[n]){var o=this.instances[n];a<=Math.ceil(o.totalItems/o.itemsPerPage)&&1<=a&&(this.instances[n].currentPage=a,this.change.emit(n))}},t.prototype.setTotalItems=function(n,a){this.instances[n]&&0<=a&&(this.instances[n].totalItems=a,this.change.emit(n))},t.prototype.setItemsPerPage=function(n,a){this.instances[n]&&(this.instances[n].itemsPerPage=a,this.change.emit(n))},t.prototype.getInstance=function(n){return void 0===n&&(n=this.DEFAULT_ID),this.instances[n]?this.clone(this.instances[n]):{}},t.prototype.clone=function(n){var a={};for(var o in n)n.hasOwnProperty(o)&&(a[o]=n[o]);return a},t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=e.Yz7({token:t,factory:function(n){return t.\u0275fac(n)}}),t}(),C=function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},c=Number.MAX_SAFE_INTEGER,x=function(){function t(n){this.service=n,this.state={}}return t.prototype.transform=function(n,a){if(!(n instanceof Array)){var o=a.id||this.service.defaultId();return this.state[o]?this.state[o].slice:n}var h,L,p=a.totalItems&&a.totalItems!==n.length,s=this.createInstance(n,a),g=s.id,M=s.itemsPerPage,R=this.service.register(s);if(!p&&n instanceof Array){if(this.stateIsIdentical(g,n,h=(s.currentPage-1)*(M=+M||c),L=h+M))return this.state[g].slice;var S=n.slice(h,L);return this.saveState(g,n,S,h,L),this.service.change.emit(g),S}return R&&this.service.change.emit(g),this.saveState(g,n,n,h,L),n},t.prototype.createInstance=function(n,a){return this.checkConfig(a),{id:null!=a.id?a.id:this.service.defaultId(),itemsPerPage:+a.itemsPerPage||0,currentPage:+a.currentPage||1,totalItems:+a.totalItems||n.length}},t.prototype.checkConfig=function(n){var o=["itemsPerPage","currentPage"].filter(function(p){return!(p in n)});if(0<o.length)throw new Error("PaginatePipe: Argument is missing the following required properties: "+o.join(", "))},t.prototype.saveState=function(n,a,o,p,s){this.state[n]={collection:a,size:a.length,slice:o,start:p,end:s}},t.prototype.stateIsIdentical=function(n,a,o,p){var s=this.state[n];return!!s&&!(s.size!==a.length||s.start!==o||s.end!==p)&&s.slice.every(function(h,L){return h===a[o+L]})},t=function(t,n,a,o){var g,p=arguments.length,s=p<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,a,o);else for(var h=t.length-1;h>=0;h--)(g=t[h])&&(s=(p<3?g(s):p>3?g(n,a,s):g(n,a))||s);return p>3&&s&&Object.defineProperty(n,a,s),s}([C("design:paramtypes",[d])],t),t.\u0275fac=function(a){return new(a||t)(e.Y36(d,16))},t.\u0275pipe=e.Yjl({name:"paginate",type:t,pure:!1}),t}(),y=function(t,n,a,o){var g,p=arguments.length,s=p<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,a,o);else for(var h=t.length-1;h>=0;h--)(g=t[h])&&(s=(p<3?g(s):p>3?g(n,a,s):g(n,a))||s);return p>3&&s&&Object.defineProperty(n,a,s),s},b=function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};function N(t){return!!t&&"false"!==t}var z=function(){function t(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}return Object.defineProperty(t.prototype,"directionLinks",{get:function(){return this._directionLinks},set:function(n){this._directionLinks=N(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoHide",{get:function(){return this._autoHide},set:function(n){this._autoHide=N(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"responsive",{get:function(){return this._responsive},set:function(n){this._responsive=N(n)},enumerable:!0,configurable:!0}),t.prototype.trackByIndex=function(n){return n},y([(0,e.IIB)(),b("design:type",String)],t.prototype,"id",void 0),y([(0,e.IIB)(),b("design:type",Number)],t.prototype,"maxSize",void 0),y([(0,e.IIB)(),b("design:type",Boolean),b("design:paramtypes",[Boolean])],t.prototype,"directionLinks",null),y([(0,e.IIB)(),b("design:type",Boolean),b("design:paramtypes",[Boolean])],t.prototype,"autoHide",null),y([(0,e.IIB)(),b("design:type",Boolean),b("design:paramtypes",[Boolean])],t.prototype,"responsive",null),y([(0,e.IIB)(),b("design:type",String)],t.prototype,"previousLabel",void 0),y([(0,e.IIB)(),b("design:type",String)],t.prototype,"nextLabel",void 0),y([(0,e.IIB)(),b("design:type",String)],t.prototype,"screenReaderPaginationLabel",void 0),y([(0,e.IIB)(),b("design:type",String)],t.prototype,"screenReaderPageLabel",void 0),y([(0,e.IIB)(),b("design:type",String)],t.prototype,"screenReaderCurrentLabel",void 0),y([(0,e.r_U)(),b("design:type",e.vpe)],t.prototype,"pageChange",void 0),y([(0,e.r_U)(),b("design:type",e.vpe)],t.prototype,"pageBoundsCorrection",void 0),t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["pagination-controls"]],inputs:{maxSize:"maxSize",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",id:"id"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:3,vars:3,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],[4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],[1,"pagination-next"]],template:function(a,o){if(1&a&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(g){return o.pageChange.emit(g)})("pageBoundsCorrection",function(g){return o.pageBoundsCorrection.emit(g)}),e.YNc(2,l,6,9,"ul",2),e.qZA()),2&a){var p=e.MAs(1);e.Q6J("id",o.id)("maxSize",o.maxSize),e.xp6(2),e.Q6J("ngIf",!(o.autoHide&&p.pages.length<=1))}},dependencies:function(){return[v.sg,v.O5,j,v.JJ]},styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],encapsulation:2,changeDetection:0}),t}(),O=function(t,n,a,o){var g,p=arguments.length,s=p<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,a,o);else for(var h=t.length-1;h>=0;h--)(g=t[h])&&(s=(p<3?g(s):p>3?g(n,a,s):g(n,a))||s);return p>3&&s&&Object.defineProperty(n,a,s),s},D=function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},j=function(){function t(n,a){var o=this;this.service=n,this.changeDetectorRef=a,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(function(p){o.id===p&&(o.updatePageLinks(),o.changeDetectorRef.markForCheck(),o.changeDetectorRef.detectChanges())})}return t.prototype.ngOnInit=function(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()},t.prototype.ngOnChanges=function(n){this.updatePageLinks()},t.prototype.ngOnDestroy=function(){this.changeSub.unsubscribe()},t.prototype.previous=function(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)},t.prototype.next=function(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)},t.prototype.isFirstPage=function(){return 1===this.getCurrent()},t.prototype.isLastPage=function(){return this.getLastPage()===this.getCurrent()},t.prototype.setCurrent=function(n){this.pageChange.emit(n)},t.prototype.getCurrent=function(){return this.service.getCurrentPage(this.id)},t.prototype.getLastPage=function(){var n=this.service.getInstance(this.id);return n.totalItems<1?1:Math.ceil(n.totalItems/n.itemsPerPage)},t.prototype.getTotalItems=function(){return this.service.getInstance(this.id).totalItems},t.prototype.checkValidId=function(){null==this.service.getInstance(this.id).id&&console.warn('PaginationControlsDirective: the specified id "'+this.id+'" does not match any registered PaginationInstance')},t.prototype.updatePageLinks=function(){var n=this,a=this.service.getInstance(this.id),o=this.outOfBoundCorrection(a);o!==a.currentPage?setTimeout(function(){n.pageBoundsCorrection.emit(o),n.pages=n.createPageArray(a.currentPage,a.itemsPerPage,a.totalItems,n.maxSize)}):this.pages=this.createPageArray(a.currentPage,a.itemsPerPage,a.totalItems,this.maxSize)},t.prototype.outOfBoundCorrection=function(n){var a=Math.ceil(n.totalItems/n.itemsPerPage);return a<n.currentPage&&0<a?a:n.currentPage<1?1:n.currentPage},t.prototype.createPageArray=function(n,a,o,p){p=+p;for(var s=[],g=Math.max(Math.ceil(o/a),1),h=Math.ceil(p/2),L=n<=h,M=g-h<n,R=!L&&!M,F=p<g,S=1;S<=g&&S<=p;){var K=this.calculatePageNumber(S,n,p,g);s.push({label:F&&(2===S&&(R||M)||S===p-1&&(R||L))?"...":K,value:K}),S++}return s},t.prototype.calculatePageNumber=function(n,a,o,p){var s=Math.ceil(o/2);return n===o?p:1===n?n:o<p?p-s<a?p-o+n:s<a?a-s+n:n:n},O([(0,e.IIB)(),D("design:type",String)],t.prototype,"id",void 0),O([(0,e.IIB)(),D("design:type",Number)],t.prototype,"maxSize",void 0),O([(0,e.r_U)(),D("design:type",e.vpe)],t.prototype,"pageChange",void 0),O([(0,e.r_U)(),D("design:type",e.vpe)],t.prototype,"pageBoundsCorrection",void 0),(t=O([D("design:paramtypes",[d,e.sBO])],t)).\u0275fac=function(a){return new(a||t)(e.Y36(d),e.Y36(e.sBO))},t.\u0275dir=e.lG2({type:t,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{maxSize:"maxSize",id:"id"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),t}(),Z=function(){function t(){}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[d],imports:[v.ez]}),t}()}}]);