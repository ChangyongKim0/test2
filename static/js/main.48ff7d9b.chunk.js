(this.webpackJsonptest2=this.webpackJsonptest2||[]).push([[0],{22:function(e,t,a){},36:function(e,t,a){e.exports={map:"InfoBubble_map__354ay","info-bubble":"InfoBubble_info-bubble__17X4j","info-bubble-svg":"InfoBubble_info-bubble-svg__4CiJk",frame:"InfoBubble_frame__-V9WF",title:"InfoBubble_title__1V3hh"}},37:function(e,t,a){e.exports={map:"BackgroundMap_map__co3QB",wrapper:"BackgroundMap_wrapper__1lZ16"}},38:function(e,t,a){e.exports={map:"BldgInfo_map__1EyUa",wrapper:"BldgInfo_wrapper__o2BCd",block:"BldgInfo_block__1x5xC",primary:"BldgInfo_primary__2g_gj","with-info":"BldgInfo_with-info__3Y8Z5","info-frame":"BldgInfo_info-frame__1t6eV",info:"BldgInfo_info__2CY5-","info-window":"BldgInfo_info-window__1sngM",secondary:"BldgInfo_secondary__InR91",construction:"BldgInfo_construction__2yAiT","bldg-info":"BldgInfo_bldg-info__3cuzc",addr1:"BldgInfo_addr1__3sQb4",addr2:"BldgInfo_addr2__20R1k",keys:"BldgInfo_keys__P2x49",vals:"BldgInfo_vals__3DB-F",emph:"BldgInfo_emph__12HdF",subtitle:"BldgInfo_subtitle__12Ft7"}},39:function(e,t,a){e.exports={map:"InfoWindow_map__iKDCI",wrapper:"InfoWindow_wrapper__3VlsR",box:"InfoWindow_box__Aa2FH","triangle-down-svg":"InfoWindow_triangle-down-svg__R1hyk"}},40:function(e,t,a){e.exports={map:"BldgInfoModal_map__1GKr9",wrapper:"BldgInfoModal_wrapper__3RUu7",modal:"BldgInfoModal_modal__1GJ5i","btn-close":"BldgInfoModal_btn-close__wXyo_","box-btn":"BldgInfoModal_box-btn__2EOTX"}},41:function(e,t,a){e.exports={map:"AddressModal_map__2EkaS",wrapper:"AddressModal_wrapper__1Aa9q",modal:"AddressModal_modal__PtElm"}},42:function(e,t,a){e.exports={map:"Valuation_map__3ubNm",wrapper:"Valuation_wrapper__2UDGB","modal-frame":"Valuation_modal-frame__1SXjo"}},43:function(e,t,a){e.exports={map:"Header_map__31bPO",wrapper:"Header_wrapper__2Qhd8",frame:"Header_frame__2Jw2n",navigation:"Header_navigation__YWA1t",emph:"Header_emph__hJsFi"}},44:function(e,t,a){e.exports={map:"AddressSearcher_map__3sNLe",wrapper:"AddressSearcher_wrapper__xPfGH","text-field":"AddressSearcher_text-field__3OscI",icon:"AddressSearcher_icon__2oFpr"}},45:function(e,t,a){e.exports={map:"UseAutoComplete_map__2IgCP",wrapper:"UseAutoComplete_wrapper__X501N","text-field":"UseAutoComplete_text-field__3GFda","drop-down":"UseAutoComplete_drop-down__104zf"}},46:function(e,t,a){e.exports={map:"TestPage_map__5SASE",wrapper:"TestPage_wrapper__2J32V",title:"TestPage_title__2rL1J"}},47:function(e,t,a){e.exports={map:"BookMarkModal_map__W-1lG",wrapper:"BookMarkModal_wrapper__3AZtf","title-field":"BookMarkModal_title-field__urB5U",title:"BookMarkModal_title__16rvf","btn-close":"BookMarkModal_btn-close__3-N1n","input-field":"BookMarkModal_input-field__1JZTk",input:"BookMarkModal_input__3kRye","btn-field":"BookMarkModal_btn-field__1cSkN","btn-list-save":"BookMarkModal_btn-list-save__2hhTo",emph:"BookMarkModal_emph__vDF2I"}},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n,r=a(1),i=a(31),c=a.n(i),o=a(19),l=a(32),s=a(33),d=a(51),p=a(50),u=a(4),b=a(3),_=a(0),h=function(e,t){return console.log("hello"),t.type},j=function(){var e=Object(r.useReducer)(h,""),t=Object(b.a)(e,2),a=t[0],n=t[1],i=Object(r.useReducer)(h,""),c=Object(b.a)(i,2),o=c[0],l=c[1];console.log("new0"+a),Object(r.useEffect)((function(){n({type:3}),l({type:4}),console.log(a),s()}),[a]);var s=function(){console.log("new"+a)};return Object(_.jsx)("div",{children:Object(_.jsxs)("h2",{onClick:function(){console.log(o),n({type:{a:"3"}})},children:["About",o]})})},f=(a(22),a(20)),m=a.n(f),y=a(34),v=a(35),O=a.n(v),g=a(14),x=function(e,t){var a=function(e,t){return{left:Math.min.apply(Math,Object(g.a)(e)),right:Math.max.apply(Math,Object(g.a)(e)),top:Math.min.apply(Math,Object(g.a)(t)),bottom:Math.max.apply(Math,Object(g.a)(t))}}(e,t);return{x:(a.left+a.right)/2,y:(a.top+a.bottom)/2}},k="#93278f",w=function(e,t){for(var a=[],n=[],r=[],i=t.gmlPosList.split(" "),c=0;c<i.length;){var o=parseFloat(i[c]),l=parseFloat(i[c+1]);a.push(new window.kakao.maps.LatLng(l,o)),n.push(o),r.push(l),c+=2}var s=x(n,r),d=new window.kakao.maps.LatLng(s.y,s.x),p=new window.kakao.maps.Polygon({map:e,path:a,strokeWeight:0,fillColor:"#fff",fillOpacity:.001});return I({type:"create",polygon:p}),{id:t.NSDIPNU,addr:t.NSDILNM_LNDCGR_SMBOL,price:t.NSDIPBLNTF_PCLND,polygon:p,center:d}},N=function(e,t){var a=function(t){return{map:(t=function(e,t){for(var a in e=e||{},t)e[a]="undefined"!==typeof e[a]?e[a]:t[a];return e}(t,{map:e.map,getMapState:e.getMapState,show:!1,data:[],data_pushed:[],need_to_remove:!1,data_removed:[],is_clicked:!1,clicked_data:{id:-1,polygon:-1},clicked_data_before:{id:-1,polygon:-1},map_base_state:{level:2,lat:0,lng:0}})).map,getMapState:t.getMapState,show:t.show,data:t.data,data_pushed:t.data_pushed,need_to_remove:t.need_to_remove,data_removed:t.data_removed,is_clicked:t.is_clicked,clicked_data:t.clicked_data,clicked_data_before:t.clicked_data_before,map_base_state:t.map_base_state}},n={};switch(t.type){case"create":return n=a({map:t.map,getMapState:t.getMapState}),console.log("created overlays:"),console.log(n),n;case"update":var r=[],i=e.data;return 0===e.data.length&&(r=t.data,i=t.data),n=a({show:!0,data:i,data_pushed:r,is_clicked:e.is_clicked,clicked_data:e.clicked_data,clicked_data_before:e.clicked_data_before,map_base_state:e.getMapState()}),console.log("updated overlays:"),console.log(n),n;case"click":var c=void 0,o=void 0;return e.clicked_data.id!==t.clicked_data.id&&(c=t.clicked_data,o=!0),n=a({show:!0,data:e.data,is_clicked:o,clicked_data:c,clicked_data_before:e.clicked_data,map_base_state:e.map_base_state}),console.log("clicked an overlay:"),console.log(n),n;case"remove start":return!1===e.show?e:(n=a({show:!0,data:e.data,is_clicked:e.is_clicked,clicked_data:e.clicked_data,clicked_data_before:e.clicked_data_before,map_base_state:e.getMapState(),need_to_remove:!0,data_removed:e.data}),console.log("remove overlays start:"),console.log(n),n);case"remove end":return!1===e.show?e:(n=a({map_base_state:e.map_base_state,data_removed:e.data_removed}),console.log("removed overlays:"),console.log(n),n)}},M=function(){var e=Object(y.a)(m.a.mark((function e(t){var a,n,r,i,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request new overlay data."),e.next=3,O.a.get("https://raw.githubusercontent.com/ChangyongKim0/test2/master/src/data/selected_area_sample.json");case 3:for(a=e.sent,n=a.data,r=[],i=0;i<n.length;i++)c=w(t,n[i]),r.push(c);return console.log("get new overlay data."),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){switch(e.type){case"create":e.polygon.setOptions({fillColor:k});break;case"hide":e.polygon.setOptions({fillOpacity:.001});break;case"opaque":e.polygon.setOptions({fillOpacity:.1});break;case"show":e.polygon.setOptions({fillOpacity:.5})}},B=["title","titleId"];function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function T(e,t){var a=e.title,i=e.titleId,c=L(e,B);return r.createElement("svg",S({width:"current",height:"current",viewBox:"0 0 100 67",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},c),a?r.createElement("title",{id:i},a):null,n||(n=r.createElement("path",{d:"M1 44.9593V12C1 5.92487 5.92487 1 12 1H88C94.0751 1 99 5.92487 99 12V44.9593C99 51.0345 94.0751 55.9593 88 55.9593H60.4444L50 66L39.5556 55.9593H12C5.92487 55.9593 1 51.0345 1 44.9593Z",fill:"current",stroke:"current",strokeWidth:"current"})))}var A,C,E=r.forwardRef(T),P=(a.p,a(36)),R=a.n(P),F=a(2),D=a.n(F),G=D.a.bind(R.a),W=function(e){var t=e.id,a=e.data;e.handler;return Object(_.jsx)("div",{className:G("wrapper"),children:Object(_.jsxs)("div",{id:t,className:G("info-bubble"),children:[Object(_.jsx)(E,{className:G("info-bubble-svg"),width:"98px",height:"65px",fill:"#ffffff",stroke:k,strokeWidth:"1px"}),Object(_.jsxs)("div",{className:G("frame"),children:[Object(_.jsx)("div",{className:G("title"),children:a.price}),Object(_.jsx)("div",{children:a.date}),Object(_.jsx)("div",{children:a.price_per_py})]})]})})},H=a(37),U=a.n(H),V=D.a.bind(U.a),J={},K={},z=function(){return{level:A.getLevel(),lat:A.getCenter().getLat(),lng:A.getCenter().getLng()}},q=function(e){var t=e.handleBldgInfo,a=e.handleAddress,n=e.is_clicked,i=e.setIsClicked,c=Object(r.useReducer)(N,{show:!1,data:[],data_pushed:[],data_removed:[],is_clicked:!1,clicked_data:{id:-1,polygon:-1},clicked_data_before:{id:-1,polygon:-1},map_base_state:{level:2,lat:0,lng:0}}),o=Object(b.a)(c,2),l=o[0],s=o[1],d=Object(r.useState)(!1),p=Object(b.a)(d,2),u=p[0],h=p[1],j=function(e){var t=e.type,a=e.id,n=e.object,r=e.mouse_event,i=e.handler;switch(t){case"create":void 0===J[a]&&(J[a]={}),J[a][r]=function(){i()},window.kakao.maps.event.addListener(n,r,J[a][r]);break;case"remove":window.kakao.maps.event.removeListener(n,r,J[a][r]),delete J[a][r]}};Object(r.useEffect)((function(){var e=document.getElementById("map"),t={center:new window.kakao.maps.LatLng(37.5662135,126.984985),level:2};A=new window.kakao.maps.Map(e,t),s({type:"create",map:A,getMapState:z}),M().then((function(e){s({type:"update",data:e})})),window.kakao.maps.event.addListener(A,"center_changed",f),m(z(),a)}),[]),Object(r.useEffect)((function(){u&&(function(e,t,a,n){var r=e.map_base_state.lat-t.lat,i=e.map_base_state.lng-t.lng;return console.log(r,i),Math.abs(r)>a||Math.abs(i)>n}(l,z(),.002,.004)||!1===l.show)?M().then((function(e){s({type:"update",data:e})})):h(!1)}),[u]);var f=function(e){var t=A.getLevel();m(z(),a),t<=2?h(!0):s({type:"remove start"})};Object(r.useEffect)((function(){l.data_pushed.map((function(e){var t=document.getElementById(e.id),a=e.center,n=new window.kakao.maps.CustomOverlay({position:a,content:t,xAnchor:.5,yAnchor:1,clickable:!1});K[e.id]=n,e.polygon.setMap(A),K[e.id].setMap(A)}))}),[l.data_pushed]),Object(r.useEffect)((function(){l.data_pushed.map((function(e){j({type:"create",id:e.id,object:e.polygon,mouse_event:"mouseover",handler:function(){return I({type:"opaque",polygon:e.polygon})}}),j({type:"create",id:e.id,object:e.polygon,mouse_event:"mouseout",handler:function(){return I({type:"hide",polygon:e.polygon})}}),j({type:"create",id:e.id,object:e.polygon,mouse_event:"click",handler:function(){s({type:"click",clicked_data:e}),I({type:"show",polygon:e.polygon})}})})),console.log("update polygons:"),console.log(l.data_pushed),h(!1)}),[l.data_pushed]),Object(r.useEffect)((function(){n&&(I({type:"hide",polygon:l.clicked_data.polygon}),s({type:"click",clicked_data:l.clicked_data}),i(!1))}),[n]),Object(r.useEffect)((function(){console.log("time to remove?"),l.need_to_remove&&(console.log("time to remove"),l.data_removed.map((function(e){j({type:"remove",id:e.id,object:e.polygon,mouse_event:"mouseover"}),j({type:"remove",id:e.id,object:e.polygon,mouse_event:"mouseout"}),j({type:"remove",id:e.id,object:e.polygon,mouse_event:"click"}),e.polygon.setMap(null),K[e.id].setMap(null),delete K[e.id]})),s({type:"remove end"}))}),[l.need_to_remove]),Object(r.useEffect)((function(){if(-1!==l.clicked_data.id){var e=l.clicked_data.id,a=l.clicked_data.polygon;I({type:"show",polygon:a}),j({type:"remove",id:e,object:a,mouse_event:"mouseover"}),j({type:"remove",id:e,object:a,mouse_event:"mouseout"}),j({type:"remove",id:e,object:a,mouse_event:"click"}),j({type:"create",id:e,object:a,mouse_event:"click",handler:function(){s({type:"click",clicked_data:l.clicked_data}),I({type:"hide",polygon:a})}}),t({show:!0,id:l.clicked_data.id})}else t({show:!1,id:l.clicked_data.id})}),[l.clicked_data]),Object(r.useEffect)((function(){if(-1!==l.clicked_data_before.id){var e=l.clicked_data_before.id,t=l.clicked_data_before.polygon;I({type:"hide",polygon:t}),j({type:"create",id:e,object:t,mouse_event:"mouseover",handler:function(){return I({type:"opaque",polygon:t})}}),j({type:"create",id:e,object:t,mouse_event:"mouseout",handler:function(){return I({type:"hide",polygon:t})}}),j({type:"remove",id:e,object:t,mouse_event:"click"}),j({type:"create",id:e,object:t,mouse_event:"click",handler:function(){s({type:"click",clicked_data:l.clicked_data_before}),I({type:"show",polygon:t})}})}}),[l.clicked_data_before]);var m=function(e,t){var n=e.level,r=e.lat,i=e.lng;(new window.kakao.maps.services.Geocoder).coord2RegionCode(i,r,(function(e,t){a(n<=2?e[0].address_name:n<=5?e[0].region_1depth_name+" "+e[0].region_2depth_name:n<=9?e[0].region_1depth_name:"\ub300\ud55c\ubbfc\uad6d")}))};return Object(_.jsxs)("div",{className:V("wrapper"),children:[Object(_.jsx)("div",{id:"map",className:V("map")}),l.data_pushed.map((function(e){return Object(_.jsx)(W,{id:e.id,handler:I,data:{price:"2,000\uc5b5",date:"'20. 03",price_per_py:"250,000\uc6d0/\ud3c9",polygon:e.polygon}},e.id)}))]})},X=a(38),Z=a.n(X),Q=["title","titleId"];function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ee(e,t){var a=e.title,n=e.titleId,i=$(e,Q);return r.createElement("svg",Y({width:9,height:4,viewBox:"0 0 9 4",preserveAspectRatio:"none",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),a?r.createElement("title",{id:n},a):null,C||(C=r.createElement("path",{d:"M9 0H0L4.5 4L9 0Z"})))}var te,ae=r.forwardRef(ee),ne=(a.p,a(39)),re=a.n(ne),ie=D.a.bind(re.a),ce=function(e){var t=e.info;return t.active?Object(_.jsxs)("div",{className:ie("wrapper"),children:[Object(_.jsx)("div",{className:ie("box"),children:t.content}),Object(_.jsx)(ae,{className:ie("triangle-down-svg")})]}):Object(_.jsx)(_.Fragment,{})},oe=D.a.bind(Z.a),le=function(e){var t=e.keys,a=e.vals,n=Object(r.useState)(!1),i=Object(b.a)(n,2),c=i[0],o=i[1];return Object(r.useEffect)((function(){})),Object(_.jsxs)("div",{className:oe("wrapper"),children:[Object(_.jsxs)("div",{className:oe("block"),children:[Object(_.jsx)("p",{className:oe("name","emph"),children:a.name}),Object(_.jsx)("p",{className:oe("addr1"),children:a.addr1}),Object(_.jsx)("p",{className:oe("addr2"),children:a.addr2})]}),Object(_.jsxs)("div",{className:oe("block","primary"),children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.buy_price}),Object(_.jsx)("p",{className:oe("vals","emph"),children:a.buy_price}),Object(_.jsx)("p",{className:oe("vals"),children:a.buy_price_date})]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:oe("with-info"),children:[Object(_.jsx)("p",{className:oe("keys"),children:t.noc}),Object(_.jsxs)("div",{className:oe("info-frame"),children:[Object(_.jsx)("p",{className:oe("info"),onMouseOver:function(){return o(!0)},onMouseOut:function(){return o(!1)},children:"\u24d8"}),Object(_.jsx)("div",{className:oe("info-window"),children:Object(_.jsx)(ce,{info:{active:c,content:"\uc774\uac83\uc740 \uc778\ud3ec\uc708\ub3c4\uc6b0!"}})})]})]}),Object(_.jsx)("p",{className:oe("vals","emph"),children:a.noc})]})]}),Object(_.jsxs)("div",{className:oe("block","secondary"),children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.land_area}),Object(_.jsx)("p",{className:oe("vals"),children:a.land_area})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.use_area}),Object(_.jsx)("p",{className:oe("vals"),children:a.use_area})]})]}),Object(_.jsxs)("div",{className:oe("block","bldg-info"),children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.bldg_area}),Object(_.jsx)("p",{className:oe("vals"),children:a.bldg_area})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.bldg_size}),Object(_.jsx)("p",{className:oe("vals"),children:a.bldg_size})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.construction_year}),Object(_.jsx)("p",{className:oe("vals"),children:a.construction_year})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.far}),Object(_.jsx)("p",{className:oe("vals"),children:a.far})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.bcr}),Object(_.jsx)("p",{className:oe("vals"),children:a.bcr})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.par}),Object(_.jsx)("p",{className:oe("vals"),children:a.par})]})]}),Object(_.jsx)("div",{className:oe("block","previous-sales"),children:Object(_.jsx)("p",{className:oe("subtitle"),children:"\uacfc\uac70 \uac70\ub798 \uc0ac\ub840"})}),Object(_.jsxs)("div",{className:oe("block","construction"),children:[Object(_.jsx)("p",{className:oe("subtitle"),children:"\uac1c\ubc1c \uc2dc"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.construction.far}),Object(_.jsx)("p",{className:oe("vals"),children:a.construction.far})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.construction.bcr}),Object(_.jsx)("p",{className:oe("vals"),children:a.construction.bcr})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.construction.height}),Object(_.jsx)("p",{className:oe("vals"),children:a.construction.height})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:oe("keys"),children:t.construction.use_area}),a.construction.use_area.map((function(e){return Object(_.jsx)("p",{className:oe("vals"),children:e},e)}))]})]})]})},se=["title","titleId"];function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ue(e,t){var a=e.title,n=e.titleId,i=pe(e,se);return r.createElement("svg",de({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),a?r.createElement("title",{id:n},a):null,te||(te=r.createElement("path",{d:"M1 17L17 1M17 17L1 1",stroke:"current",strokeWidth:"current",strokeOpacity:"current"})))}var be=r.forwardRef(ue),_e=(a.p,a(40)),he=a.n(_e),je=D.a.bind(he.a),fe=function(e){var t=e.info,a=e.handleBldgInfo,n=e.setIsClicked;return Object(r.useEffect)((function(){})),!1===t.active?Object(_.jsx)(_.Fragment,{}):Object(_.jsx)("div",{className:je("wrapper"),children:Object(_.jsxs)("div",{className:je("modal"),children:[Object(_.jsx)(le,{keys:t.keys,vals:t.vals}),Object(_.jsx)(be,{className:je("btn-close"),onClick:function(){a({show:!1,id:-1}),n(!0)}}),Object(_.jsx)("button",{className:je("box-btn"),type:"submit",value:"\uc88c\ud45c",children:"\uac1c\ubc1c Valuation \uac80\ud1a0"})]})})},me=a(41),ye=a.n(me),ve=D.a.bind(ye.a),Oe=function(e){var t=e.address;return Object(_.jsx)("div",{className:ve("wrapper"),children:Object(_.jsx)("div",{className:ve("modal"),children:t})})},ge=a(42),xe=a.n(ge),ke=D.a.bind(xe.a),we={name:"\uac15\uc6b1 \ube4c\ub529",addr1:"\uc11c\uc6b8 \uc601\ub4f1\ud3ec\uad6c \uad6d\ud68c\ub300\ub85c 777",addr2:"\uc11c\uc6b8 \uc601\ub4f1\ud3ec\uad6c \uc5ec\uc758\ub3c4\ub3d9 7",buy_price:"200,000,000\uc6d0",buy_price_date:"(2020.03)",noc:"260,000\uc6d0/\ud3c9",land_area:"3,537\u33a1 | 1,070\ud3c9",use_area:"\uc77c\ubc18\uc0c1\uc5c5",bldg_area:"7.94\u33a1 | 2.40\ud3c9",bldg_size:"20F/B6",construction_year:"2019\ub144",far:"459%",bcr:"47%",par:"58%",construction:{far:"800%",bcr:"60%",height:"70m",use_area:["\uc77c\ubc18\uc0c1\uc5c5\uc9c0\uc5ed,","\uc9c0\uad6c\ub2e8\uc704\uacc4\ud68d\uad6c\uc5ed"]}},Ne={buy_price:"\ucd5c\uadfc \uc2e4\uac70\ub798\uac00",noc:"\uac74\ubb3c \uba85\ubaa9 NOC",land_area:"\ud1a0\uc9c0\uba74\uc801",use_area:"\uc6a9\ub3c4\uc9c0\uad6c",bldg_area:"\uac74\ubb3c\uba74\uc801",bldg_size:"\uac74\ubb3c\uaddc\ubaa8",construction_year:"\uc900\uacf5\ub144\ub3c4",far:"\uc6a9\uc801\ub960",bcr:"\uac74\ud3d0\uc728",par:"\uc804\uc6a9\ub960",construction:{far:"\uc0c1\ud55c\uc6a9\uc801\ub960",bcr:"\uc0c1\ud55c\uac74\ud3d0\uc728",height:"\ub192\uc774\uc81c\ud55c",use_area:"\ud1a0\uc9c0\uc774\uc6a9\uacc4\ud68d"}},Me=function(e,t){return{active:t.show,id:t.id,keys:Ne,vals:we}},Ie=function(e,t){return t},Be=function(){var e=Object(r.useReducer)(Me,{active:!1,id:-1,keys:Ne,vals:we}),t=Object(b.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(!1),c=Object(b.a)(i,2),o=c[0],l=c[1],s=Object(r.useReducer)(Ie,""),d=Object(b.a)(s,2),p=d[0],u=d[1];return Object(r.useEffect)((function(){})),Object(_.jsxs)("div",{className:ke("wrapper"),children:[Object(_.jsx)(q,{handleBldgInfo:n,handleAddress:u,is_clicked:o,setIsClicked:l}),Object(_.jsxs)("div",{className:ke("modal-frame"),children:[Object(_.jsx)(fe,{info:a,handleBldgInfo:n,setIsClicked:l}),Object(_.jsx)(Oe,{address:p})]})]})},Se=a(43),Le=a.n(Se),Te=a(44),Ae=a.n(Te),Ce=a(10),Ee=a(89),Pe=a(45),Re=a.n(Pe),Fe=D.a.bind(Re.a);function De(){var e=Object(Ee.a)({id:"use-autocomplete-demo",options:Ge,getOptionLabel:function(e){return e.title}}),t=e.getRootProps,a=e.getInputProps,n=e.getListboxProps,r=e.getOptionProps,i=e.groupedOptions;return Object(_.jsxs)("div",{className:Fe("wrapper"),children:[Object(_.jsx)("div",Object(Ce.a)(Object(Ce.a)({},t()),{},{children:Object(_.jsx)("input",Object(Ce.a)(Object(Ce.a)({className:Fe("text-field")},a()),{},{placeholder:"\uc8fc\uc18c \uc785\ub825"}))})),i.length>0?Object(_.jsx)("ul",Object(Ce.a)(Object(Ce.a)({className:Fe("drop-down")},n()),{},{children:i.map((function(e,t){return Object(_.jsx)("li",Object(Ce.a)(Object(Ce.a)({},r({option:e,index:t})),{},{children:e.title}))}))})):null]})}var Ge=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"L\xe9on: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL\xb7E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Am\xe9lie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],We=D.a.bind(Ae.a),He=function(){return Object(_.jsxs)("div",{className:We("wrapper"),children:[Object(_.jsx)(De,{}),Object(_.jsx)("div",{className:We("icon"),children:"O."})]})},Ue=D.a.bind(Le.a),Ve=function(e){var t=e.nav_emph,a={};return["map","navigation"].map((function(e){a[e]=t===e?"emph":""})),Object(_.jsxs)("div",{className:Ue("wrapper"),children:[Object(_.jsx)("div",{children:"LOGO"}),Object(_.jsxs)("div",{className:Ue("frame"),children:[Object(_.jsxs)("div",{className:Ue("navigation","emph"),children:[Object(_.jsx)("p",{className:Ue(a.map),children:"\uc9c0\ub3c4"}),Object(_.jsx)("p",{children:"\ubc38\ub958\uc5d0\uc774\uc158"})]}),Object(_.jsx)(He,{})]}),Object(_.jsx)("div",{className:Ue("other icon"),children:"BOOKMARK"})]})},Je=a(46),Ke=a.n(Je),ze=a(47),qe=a.n(ze),Xe=D.a.bind(qe.a),Ze=function(e){var t=e.title,a=e.placeholder;return t=t||"title",a=a||"input",console.log("1"),Object(_.jsxs)("div",{className:Xe("wrapper"),children:[Object(_.jsxs)("div",{className:Xe("title-field"),children:[Object(_.jsx)("h1",{className:Xe("title"),children:t}),Object(_.jsx)(be,{className:Xe("btn-close")})]}),Object(_.jsx)("div",{className:Xe("input-field"),children:Object(_.jsx)("input",{className:Xe("input"),type:"text",placeholder:a})}),Object(_.jsxs)("div",{className:Xe("btn-field"),children:[Object(_.jsx)("button",{children:"\ub2eb\uae30"}),Object(_.jsxs)("div",{className:Xe("btn-list-save"),children:[Object(_.jsx)("button",{children:"\uc800\uc7a5 \ud6c4 \ub2eb\uae30"}),Object(_.jsx)("button",{className:Xe("emph"),children:"\uc800\uc7a5 \ud6c4 \ube44\uad50"})]})]})]})},Qe=D.a.bind(Ke.a),Ye=function(){return Object(r.useEffect)((function(){})),Object(_.jsxs)("div",{className:Qe("wrapper"),children:[Object(_.jsx)("p",{className:Qe("title"),children:"UseAutoComplete"}),Object(_.jsx)(De,{}),Object(_.jsx)("p",{className:Qe("title"),children:"AddressSearcher"}),Object(_.jsx)(He,{}),Object(_.jsx)("p",{className:Qe("title"),children:"Header"}),Object(_.jsx)(Ve,{nav_emph:"map"}),Object(_.jsx)("p",{className:Qe("title"),children:"AddressModal"}),Object(_.jsx)(Oe,{address:"address"}),Object(_.jsx)("p",{className:Qe("title"),children:"BookMarkModal"}),Object(_.jsx)(Ze,{}),Object(_.jsx)("p",{}),Object(_.jsx)("p",{}),Object(_.jsx)("p",{className:Qe("title"),children:"END OF PAGE"})]})},$e=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(u.a,{path:"/about",component:j}),Object(_.jsx)(u.a,{path:"/valuation",component:Be}),Object(_.jsx)(u.a,{path:"/testpage",component:Ye})]})}}]),a}(r.Component),et=function(){return Object(_.jsx)(o.a,{children:Object(_.jsx)($e,{})})},tt=(a(85),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))});c.a.render(Object(_.jsx)(et,{}),document.getElementById("root")),tt()}},[[86,1,2]]]);
//# sourceMappingURL=main.48ff7d9b.chunk.js.map