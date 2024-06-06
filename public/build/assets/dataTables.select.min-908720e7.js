import{r as R}from"./jquery-ef5d6b77.js";import{r as $}from"./jquery.dataTables-55c251d2.js";import"./_commonjsHelpers-de833af9.js";import"./jquery.dataTables-2e2172d8.js";import"./jquery-83ed6523.js";var F={exports:{}};/*! Select for DataTables 1.7.0-dev
 * © SpryMedia Ltd - datatables.net/license/mit
 */(function(q,L){(function(i){var v,N;v=R(),N=function(u,r){r.fn.dataTable||$(u,r)},typeof window>"u"?q.exports=function(u,r){return u=u||window,r=r||v(u),N(u,r),i(r,u,u.document)}:(N(window,v),q.exports=i(v,window,window.document))})(function(i,v,N,u){var r=i.fn.dataTable;function I(e,t,n){function s(o,f){f<o&&(d=f,f=o,o=d);var d,_=!1;return e.columns(":visible").indexes().filter(function(m){return m===o&&(_=!0),m===f?!(_=!1):_})}function a(o,f){var d,_=e.rows({search:"applied"}).indexes(),m=(_.indexOf(o)>_.indexOf(f)&&(d=f,f=o,o=d),!1);return _.filter(function(b){return b===o&&(m=!0),b===f?!(m=!1):m})}var c,n=e.cells({selected:!0}).any()||n?(c=s(n.column,t.column),a(n.row,t.row)):(c=s(0,t.column),a(0,t.row)),n=e.cells(n,c).flatten();e.cells(t,{selected:!0}).any()?e.cells(n).deselect():e.cells(n).select()}function A(e){var t=e.settings()[0]._select.selector;i(e.table().container()).off("mousedown.dtSelect",t).off("mouseup.dtSelect",t).off("click.dtSelect",t),i("body").off("click.dtSelect"+T(e.table().node()))}function O(e){var t,l=i(e.table().container()),s=e.settings()[0],a=s._select.selector;l.on("mousedown.dtSelect",a,function(c){(c.shiftKey||c.metaKey||c.ctrlKey)&&l.css("-moz-user-select","none").one("selectstart.dtSelect",a,function(){return!1}),v.getSelection&&(t=v.getSelection())}).on("mouseup.dtSelect",a,function(){l.css("-moz-user-select","")}).on("click.dtSelect",a,function(c){var n,o=e.select.items();if(t){var d=v.getSelection();if((!d.anchorNode||i(d.anchorNode).closest("table")[0]===e.table().node())&&d!==t)return}var f,d=e.settings()[0],_=e.settings()[0].oClasses.sWrapper.trim().replace(/ +/g,".");i(c.target).closest("div."+_)[0]==e.table().container()&&(_=e.cell(i(c.target).closest("td, th"))).any()&&(f=i.Event("user-select.dt"),p(e,f,[o,_,c]),f.isDefaultPrevented()||(f=_.index(),o==="row"?(n=f.row,D(c,e,d,"row",n)):o==="column"?(n=_.index().column,D(c,e,d,"column",n)):o==="cell"&&(n=_.index(),D(c,e,d,"cell",n)),d._select_lastCell=f))}),i("body").on("click.dtSelect"+T(e.table().node()),function(c){var n;!s._select.blurable||i(c.target).parents().filter(e.table().container()).length||i(c.target).parents("html").length===0||i(c.target).parents("div.DTE").length||(n=i.Event("select-blur.dt"),p(e,n,[c.target,c]),n.isDefaultPrevented()||S(s,!0))})}function p(e,t,l,s){s&&!e.flatten().length||(typeof t=="string"&&(t+=".dt"),l.unshift(e),i(e.table().node()).trigger(t,l))}function E(e){var t=new r.Api(e);e._select_init=!0,e.aoRowCreatedCallback.push({fn:function(l,s,a){var c,n,o=e.aoData[a];for(o._select_selected&&i(l).addClass(e._select.className),c=0,n=e.aoColumns.length;c<n;c++)(e.aoColumns[c]._select_selected||o._selected_cells&&o._selected_cells[c])&&i(o.anCells[c]).addClass(e._select.className)},sName:"select-deferRender"}),t.on("preXhr.dt.dtSelect",function(l,s){var a,c;s===t.settings()[0]&&(a=t.rows({selected:!0}).ids(!0).filter(function(n){return n!==u}),c=t.cells({selected:!0}).eq(0).map(function(n){var o=t.row(n.row).id(!0);return o?{row:o,column:n.column}:u}).filter(function(n){return n!==u}),t.one("draw.dt.dtSelect",function(){t.rows(a).select(),c.any()&&c.each(function(n){t.cells(n.row,n.column).select()})}))}),t.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",function(){var l,s,a,c,n,o;(o=(l=t).settings()[0])._select.info&&o.aanFeatures.i&&l.select.style()!=="api"&&(s=l.rows({selected:!0}).flatten().length,a=l.columns({selected:!0}).flatten().length,c=l.cells({selected:!0}).flatten().length,n=function(f,d,_){f.append(i('<span class="select-item"/>').append(l.i18n("select."+d+"s",{_:"%d "+d+"s selected",0:"",1:"1 "+d+" selected"},_)))},i.each(o.aanFeatures.i,function(f,d){d=i(d);var _=i('<span class="select-info"/>'),m=(n(_,"row",s),n(_,"column",a),n(_,"cell",c),d.children("span.select-info"));m.length&&m.remove(),_.text()!==""&&d.append(_)})),t.state.save()}),t.on("destroy.dtSelect",function(){i(t.rows({selected:!0}).nodes()).removeClass(t.settings()[0]._select.className),A(t),t.off(".dtSelect"),i("body").off(".dtSelect"+T(t.table().node()))})}function z(e,t,l,n){var a,c=e[t+"s"]({search:"applied"}).indexes(),n=i.inArray(n,c),o=i.inArray(l,c);e[t+"s"]({selected:!0}).any()||n!==-1?(o<n&&(a=o,o=n,n=a),c.splice(o+1,c.length),c.splice(0,n)):c.splice(i.inArray(l,c)+1,c.length),e[t](l,{selected:!0}).any()?(c.splice(i.inArray(l,c),1),e[t+"s"](c).deselect()):e[t+"s"](c).select()}function S(e,t){!t&&e._select.style!=="single"||((t=new r.Api(e)).rows({selected:!0}).deselect(),t.columns({selected:!0}).deselect(),t.cells({selected:!0}).deselect())}function D(e,t,l,s,a){var c=t.select.style(),n=t.select.toggleable(),o=t[s](a,{selected:!0}).any();o&&!n||(c==="os"?e.ctrlKey||e.metaKey?t[s](a).select(!o):e.shiftKey?s==="cell"?I(t,a,l._select_lastCell||null):z(t,s,a,l._select_lastCell?l._select_lastCell[s]:null):(n=t[s+"s"]({selected:!0}),o&&n.flatten().length===1?t[s](a).deselect():(n.deselect(),t[s](a).select())):c=="multi+shift"&&e.shiftKey?s==="cell"?I(t,a,l._select_lastCell||null):z(t,s,a,l._select_lastCell?l._select_lastCell[s]:null):t[s](a).select(!o))}function T(e){return e.id.replace(/[^a-zA-Z0-9\-\_]/g,"-")}r.select={},r.select.version="1.7.0-dev",r.select.init=function(e){var t,l,s,a,c,n,o,f,d,_,m,b=e.settings()[0];b._select||(t=e.state.loaded(),l=function(x,P,h){if(h!==null&&h.select!==u){if(e.rows({selected:!0}).any()&&e.rows().deselect(),h.select.rows!==u&&e.rows(h.select.rows).select(),e.columns({selected:!0}).any()&&e.columns().deselect(),h.select.columns!==u&&e.columns(h.select.columns).select(),e.cells({selected:!0}).any()&&e.cells().deselect(),h.select.cells!==u)for(var g=0;g<h.select.cells.length;g++)e.cell(h.select.cells[g].row,h.select.cells[g].column).select();e.state.save()}},e.on("stateSaveParams",function(x,P,h){h.select={},h.select.rows=e.rows({selected:!0}).ids(!0).toArray(),h.select.columns=e.columns({selected:!0})[0],h.select.cells=e.cells({selected:!0})[0].map(function(g){return{row:e.row(g.row).id(!0),column:g.column}})}).on("stateLoadParams",l).one("init",function(){l(0,0,t)}),a=b.oInit.select,s=r.defaults.select,s=a===u?s:a,a="row",f=o=!(n=!(c="api")),d="td, th",m=!(_="selected"),b._select={},s===!0?(c="os",m=!0):typeof s=="string"?(c=s,m=!0):i.isPlainObject(s)&&(s.blurable!==u&&(n=s.blurable),s.toggleable!==u&&(o=s.toggleable),s.info!==u&&(f=s.info),s.items!==u&&(a=s.items),m=(c=s.style!==u?s.style:"os",!0),s.selector!==u&&(d=s.selector),s.className!==u&&(_=s.className)),e.select.selector(d),e.select.items(a),e.select.style(c),e.select.blurable(n),e.select.toggleable(o),e.select.info(f),b._select.className=_,i.fn.dataTable.ext.order["select-checkbox"]=function(x,P){return this.api().column(P,{order:"index"}).nodes().map(function(h){return x._select.items==="row"?i(h).parent().hasClass(x._select.className):x._select.items==="cell"&&i(h).hasClass(x._select.className)})},!m&&i(e.table().node()).hasClass("selectable")&&e.select.style("os"))},i.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(e,t){r.ext.selector[t.type].push(function(l,s,a){var c,n=s.selected,o=[];if(n!==!0&&n!==!1)return a;for(var f=0,d=a.length;f<d;f++)c=l[t.prop][a[f]],(n===!0&&c._select_selected===!0||n===!1&&!c._select_selected)&&o.push(a[f]);return o})}),r.ext.selector.cell.push(function(e,t,l){var s,a=t.selected,c=[];if(a===u)return l;for(var n=0,o=l.length;n<o;n++)s=e.aoData[l[n].row],(a!==!0||!s._selected_cells||s._selected_cells[l[n].column]!==!0)&&(a!==!1||s._selected_cells&&s._selected_cells[l[n].column])||c.push(l[n]);return c});var w=r.Api.register,y=r.Api.registerPlural;function C(e,t){return function(l){return l.i18n("buttons."+e,t)}}function K(e){return e=e._eventNamespace,"draw.dt.DT"+e+" select.dt.DT"+e+" deselect.dt.DT"+e}w("select()",function(){return this.iterator("table",function(e){r.select.init(new r.Api(e))})}),w("select.blurable()",function(e){return e===u?this.context[0]._select.blurable:this.iterator("table",function(t){t._select.blurable=e})}),w("select.toggleable()",function(e){return e===u?this.context[0]._select.toggleable:this.iterator("table",function(t){t._select.toggleable=e})}),w("select.info()",function(e){return e===u?this.context[0]._select.info:this.iterator("table",function(t){t._select.info=e})}),w("select.items()",function(e){return e===u?this.context[0]._select.items:this.iterator("table",function(t){t._select.items=e,p(new r.Api(t),"selectItems",[e])})}),w("select.style()",function(e){return e===u?this.context[0]._select.style:this.iterator("table",function(t){t._select||r.select.init(new r.Api(t)),t._select_init||E(t),t._select.style=e;var l=new r.Api(t);A(l),e!=="api"&&O(l),p(new r.Api(t),"selectStyle",[e])})}),w("select.selector()",function(e){return e===u?this.context[0]._select.selector:this.iterator("table",function(t){A(new r.Api(t)),t._select.selector=e,t._select.style!=="api"&&O(new r.Api(t))})}),y("rows().select()","row().select()",function(e){var t=this;return e===!1?this.deselect():(this.iterator("row",function(l,s){S(l),l.aoData[s]._select_selected=!0,i(l.aoData[s].nTr).addClass(l._select.className)}),this.iterator("table",function(l,s){p(t,"select",["row",t[s]],!0)}),this)}),w("row().selected()",function(){var e=this.context[0];return!!(e&&this.length&&e.aoData[this[0]]&&e.aoData[this[0]]._select_selected)}),y("columns().select()","column().select()",function(e){var t=this;return e===!1?this.deselect():(this.iterator("column",function(l,s){S(l),l.aoColumns[s]._select_selected=!0,s=new r.Api(l).column(s),i(s.header()).addClass(l._select.className),i(s.footer()).addClass(l._select.className),s.nodes().to$().addClass(l._select.className)}),this.iterator("table",function(l,s){p(t,"select",["column",t[s]],!0)}),this)}),w("column().selected()",function(){var e=this.context[0];return!!(e&&this.length&&e.aoColumns[this[0]]&&e.aoColumns[this[0]]._select_selected)}),y("cells().select()","cell().select()",function(e){var t=this;return e===!1?this.deselect():(this.iterator("cell",function(l,s,a){S(l),s=l.aoData[s],s._selected_cells===u&&(s._selected_cells=[]),s._selected_cells[a]=!0,s.anCells&&i(s.anCells[a]).addClass(l._select.className)}),this.iterator("table",function(l,s){p(t,"select",["cell",t.cells(t[s]).indexes().toArray()],!0)}),this)}),w("cell().selected()",function(){var e=this.context[0];return!!(e&&this.length&&(e=e.aoData[this[0][0].row],e&&e._selected_cells&&e._selected_cells[this[0][0].column]))}),y("rows().deselect()","row().deselect()",function(){var e=this;return this.iterator("row",function(t,l){t.aoData[l]._select_selected=!1,t._select_lastCell=null,i(t.aoData[l].nTr).removeClass(t._select.className)}),this.iterator("table",function(t,l){p(e,"deselect",["row",e[l]],!0)}),this}),y("columns().deselect()","column().deselect()",function(){var e=this;return this.iterator("column",function(t,l){t.aoColumns[l]._select_selected=!1;var s=new r.Api(t),a=s.column(l);i(a.header()).removeClass(t._select.className),i(a.footer()).removeClass(t._select.className),s.cells(null,l).indexes().each(function(c){var n=t.aoData[c.row],o=n._selected_cells;!n.anCells||o&&o[c.column]||i(n.anCells[c.column]).removeClass(t._select.className)})}),this.iterator("table",function(t,l){p(e,"deselect",["column",e[l]],!0)}),this}),y("cells().deselect()","cell().deselect()",function(){var e=this;return this.iterator("cell",function(t,l,s){l=t.aoData[l],l._selected_cells!==u&&(l._selected_cells[s]=!1),l.anCells&&!t.aoColumns[s]._select_selected&&i(l.anCells[s]).removeClass(t._select.className)}),this.iterator("table",function(t,l){p(e,"deselect",["cell",e[l]],!0)}),this});var k=0;return i.extend(r.ext.buttons,{selected:{text:C("selected","Selected"),className:"buttons-selected",limitTo:["rows","columns","cells"],init:function(e,t,l){var s=this;l._eventNamespace=".select"+k++,e.on(K(l),function(){var a,c;s.enable((a=e,c=l,!(i.inArray("rows",c.limitTo)===-1||!a.rows({selected:!0}).any())||!(i.inArray("columns",c.limitTo)===-1||!a.columns({selected:!0}).any())||!(i.inArray("cells",c.limitTo)===-1||!a.cells({selected:!0}).any())))}),this.disable()},destroy:function(e,t,l){e.off(l._eventNamespace)}},selectedSingle:{text:C("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(e,t,l){var s=this;l._eventNamespace=".select"+k++,e.on(K(l),function(){var a=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length;s.enable(a===1)}),this.disable()},destroy:function(e,t,l){e.off(l._eventNamespace)}},selectAll:{text:C("selectAll","Select all"),className:"buttons-select-all",action:function(e,t,l,s){var a=this.select.items(),c=s.selectorModifier;(c?(typeof c=="function"&&(c=c.call(t,e,t,l,s)),this[a+"s"](c)):this[a+"s"]()).select()}},selectNone:{text:C("selectNone","Deselect all"),className:"buttons-select-none",action:function(){S(this.settings()[0],!0)},init:function(e,t,l){var s=this;l._eventNamespace=".select"+k++,e.on(K(l),function(){var a=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length;s.enable(0<a)}),this.disable()},destroy:function(e,t,l){e.off(l._eventNamespace)}},showSelected:{text:C("showSelected","Show only selected"),className:"buttons-show-selected",action:function(e,t,l,s){var a;s._filter?((a=r.ext.search.indexOf(s._filter))!==-1&&(r.ext.search.splice(a,1),s._filter=null),this.active(!1)):(s._filter=a=function(c,n,o){return c!==t.settings()[0]||c.aoData[o]._select_selected},r.ext.search.push(a),this.active(!0)),t.draw()}}}),i.each(["Row","Column","Cell"],function(e,t){var l=t.toLowerCase();r.ext.buttons["select"+t+"s"]={text:C("select"+t+"s","Select "+l+"s"),className:"buttons-select-"+l+"s",action:function(){this.select.items(l)},init:function(s){var a=this;s.on("selectItems.dt.DT",function(c,n,o){a.active(o===l)})}}}),i.fn.DataTable.select=r.select,i(N).on("preInit.dt.dtSelect",function(e,t){e.namespace==="dt"&&r.select.init(new r.Api(t))}),r})})(F);
