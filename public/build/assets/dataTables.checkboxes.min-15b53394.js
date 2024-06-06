import{r as y}from"./jquery.dataTables-55c251d2.js";import"./jquery.dataTables-2e2172d8.js";import"./jquery-83ed6523.js";import"./_commonjsHelpers-de833af9.js";import"./jquery-ef5d6b77.js";var D={exports:{}};/*! jQuery DataTables Checkboxes v1.2.14 - www.gyrocode.com/projects/jquery-datatables-checkboxes/ - License: MIT - Author: Gyrocode LLC / www.gyrocode.com */(function(g,O){(function(a){g.exports=function(C,x){return C=C||window,x&&x.fn.dataTable||(x=y(C,x).$),a(x,0,C.document)}})(function(a,C,x){function p(e){if(!S.versionCheck||!S.versionCheck("1.10.8"))throw"DataTables Checkboxes requires DataTables 1.10.8 or newer";this.s={dt:new S.Api(e),columns:[],data:{},dataDisabled:{},ignoreSelect:!1},this.s.ctx=this.s.dt.settings()[0],this.s.ctx.checkboxes||(e.checkboxes=this)._constructor()}var S=a.fn.dataTable,k=(p.prototype={_constructor:function(){for(var e,t,c,s,o,l,i=this,d=i.s.dt,n=i.s.ctx,u=!1,b=!1,h=0;h<n.aoColumns.length;h++)n.aoColumns[h].checkboxes&&(e=a(d.column(h).header()),u=!0,a.isPlainObject(n.aoColumns[h].checkboxes)||(n.aoColumns[h].checkboxes={}),n.aoColumns[h].checkboxes=a.extend({},p.defaults,n.aoColumns[h].checkboxes),t={searchable:!1,orderable:!1},n.aoColumns[h].sClass===""?t.className="dt-checkboxes-cell":t.className=n.aoColumns[h].sClass+" dt-checkboxes-cell",n.aoColumns[h].sWidthOrig===null&&(t.width="1%"),n.aoColumns[h].mRender===null&&(t.render=function(){return'<input type="checkbox" class="dt-checkboxes" autocomplete="off">'}),S.ext.internal._fnColumnOptions(n,h,t),e.removeClass("sorting"),e.off(".dt"),n.sAjaxSource===null&&((c=d.cells("tr",h)).invalidate("data"),a(c.nodes()).addClass(t.className)),i.s.data[h]={},i.s.dataDisabled[h]={},i.s.columns.push(h),n.aoColumns[h].checkboxes.selectRow&&(n._select?b=!0:n.aoColumns[h].checkboxes.selectRow=!1),n.aoColumns[h].checkboxes.selectAll)&&(e.data("html",e.html()),n.aoColumns[h].checkboxes.selectAllRender!==null)&&(c="",a.isFunction(n.aoColumns[h].checkboxes.selectAllRender)?c=n.aoColumns[h].checkboxes.selectAllRender():typeof n.aoColumns[h].checkboxes.selectAllRender=="string"&&(c=n.aoColumns[h].checkboxes.selectAllRender),e.html(c).addClass("dt-checkboxes-select-all").attr("data-col",h));u&&(i.loadState(),s=a(d.table().node()),o=a(d.table().body()),l=a(d.table().container()),b&&(s.addClass("dt-checkboxes-select"),s.on("user-select.dt.dtCheckboxes",function(r,f,m,v,w){i.onDataTablesUserSelect(r,f,m,v,w)}),s.on("select.dt.dtCheckboxes deselect.dt.dtCheckboxes",function(r,f,m,v){i.onDataTablesSelectDeselect(r,m,v)}),n._select.info)&&(d.select.info(!1),s.on("draw.dt.dtCheckboxes select.dt.dtCheckboxes deselect.dt.dtCheckboxes",function(){i.showInfoSelected()})),s.on("draw.dt.dtCheckboxes",function(r){i.onDataTablesDraw(r)}),o.on("click.dtCheckboxes","input.dt-checkboxes",function(r){i.onClick(r,this)}),l.on("click.dtCheckboxes",'thead th.dt-checkboxes-select-all input[type="checkbox"]',function(r){i.onClickSelectAll(r,this)}),l.on("click.dtCheckboxes","thead th.dt-checkboxes-select-all",function(){a('input[type="checkbox"]',this).not(":disabled").trigger("click")}),b||l.on("click.dtCheckboxes","tbody td.dt-checkboxes-cell",function(){a('input[type="checkbox"]',this).not(":disabled").trigger("click")}),l.on("click.dtCheckboxes","thead th.dt-checkboxes-select-all label, tbody td.dt-checkboxes-cell label",function(r){r.preventDefault()}),a(x).on("click.dtCheckboxes",'.fixedHeader-floating thead th.dt-checkboxes-select-all input[type="checkbox"]',function(r){n._fixedHeader&&n._fixedHeader.dom.header.floating&&i.onClickSelectAll(r,this)}),a(x).on("click.dtCheckboxes",".fixedHeader-floating thead th.dt-checkboxes-select-all",function(){n._fixedHeader&&n._fixedHeader.dom.header.floating&&a('input[type="checkbox"]',this).trigger("click")}),s.on("init.dt.dtCheckboxes",function(){setTimeout(function(){i.onDataTablesInit()},0)}),s.on("stateSaveParams.dt.dtCheckboxes",function(r,f,m){i.onDataTablesStateSave(r,f,m)}),s.one("destroy.dt.dtCheckboxes",function(r,f){i.onDataTablesDestroy(r,f)}))},onDataTablesInit:function(){var e=this,t=e.s.dt,c=e.s.ctx;c.oFeatures.bServerSide||(c.oFeatures.bStateSave&&e.updateState(),a(t.table().node()).on("xhr.dt.dtCheckboxes",function(s,o,l,i){e.onDataTablesXhr(s.settings,l,i)}))},onDataTablesUserSelect:function(e,i,c,o){var o=o.index().row,l=this.getSelectRowColIndex(),i=i.cell({row:o,column:l}).data();this.isCellSelectable(l,i)||e.preventDefault()},onDataTablesSelectDeselect:function(e,t,c){var s=this,o=s.s.dt;s.s.ignoreSelect||t==="row"&&(t=s.getSelectRowColIndex())!==null&&(o=o.cells(c,t),s.updateData(o,t,e.type==="select"),s.updateCheckbox(o,t,e.type==="select"),s.updateSelectAll(t))},onDataTablesStateSave:function(e,t,c){var s=this,o=s.s.ctx;a.each(s.s.columns,function(l,i){o.aoColumns[i].checkboxes.stateSave&&(Object.prototype.hasOwnProperty.call(c,"checkboxes")||(c.checkboxes=[]),c.checkboxes[i]=s.s.data[i])})},onDataTablesDestroy:function(){var c=this.s.dt,e=a(c.table().node()),t=a(c.table().body()),c=a(c.table().container());a(x).off("click.dtCheckboxes"),c.off(".dtCheckboxes"),t.off(".dtCheckboxes"),e.off(".dtCheckboxes"),this.s.data={},this.s.dataDisabled={},a(".dt-checkboxes-select-all",e).each(function(s,o){a(o).html(a(o).data("html")).removeClass("dt-checkboxes-select-all")})},onDataTablesDraw:function(){var e=this,t=e.s.ctx;(t.oFeatures.bServerSide||t.oFeatures.bDeferRender)&&e.updateStateCheckboxes({page:"current",search:"none"}),a.each(e.s.columns,function(c,s){e.updateSelectAll(s)})},onDataTablesXhr:function(){var e=this,c=e.s.dt,t=e.s.ctx,c=a(c.table().node());a.each(e.s.columns,function(s,o){e.s.data[o]={},e.s.dataDisabled[o]={}}),t.oFeatures.bStateSave&&(e.loadState(),c.one("draw.dt.dtCheckboxes",function(){e.updateState()}))},updateData:function(e,t,c){var s=this.s.dt,o=this.s.ctx;o.aoColumns[t].checkboxes&&(e.data().each(function(l){c?o.checkboxes.s.data[t][l]=1:delete o.checkboxes.s.data[t][l]}),o.oFeatures.bStateSave)&&o.aoColumns[t].checkboxes.stateSave&&s.state.save()},updateSelect:function(e,t){var c=this.s.dt;this.s.ctx._select&&(this.s.ignoreSelect=!0,t?c.rows(e).select():c.rows(e).deselect(),this.s.ignoreSelect=!1)},updateCheckbox:function(o,t,c){var s=this.s.ctx,o=o.nodes();o.length&&(a("input.dt-checkboxes",o).not(":disabled").prop("checked",c),a.isFunction(s.aoColumns[t].checkboxes.selectCallback))&&s.aoColumns[t].checkboxes.selectCallback(o,c)},updateState:function(){var e=this,t=(e.s.dt,e.s.ctx);e.updateStateCheckboxes({page:"all",search:"none"}),t._oFixedColumns&&setTimeout(function(){a.each(e.s.columns,function(c,s){e.updateSelectAll(s)})},0)},updateStateCheckboxes:function(e){var t=this,c=t.s.dt,s=t.s.ctx;c.cells("tr",t.s.columns,e).every(function(o,l){var i=this.data(),d=t.isCellSelectable(l,i);Object.prototype.hasOwnProperty.call(s.checkboxes.s.data,l)&&Object.prototype.hasOwnProperty.call(s.checkboxes.s.data[l],i)&&(s.aoColumns[l].checkboxes.selectRow&&d&&t.updateSelect(o,!0),t.updateCheckbox(this,l,!0)),d||a("input.dt-checkboxes",this.node()).prop("disabled",!0)})},onClick:function(e,t){var c=this,i=c.s.dt,s=c.s.ctx,o=a(t).closest("td"),o=o.parents(".DTFC_Cloned").length?i.fixedColumns().cellIndex(o):o,l=i.cell(o),i=l.index(),d=i.column;i.row,s.aoColumns[d].checkboxes.selectRow?s._select&&(s._select.style==="os"?(e.stopPropagation(),l.checkboxes.select(t.checked)):setTimeout(function(){var n=l.data(),n=Object.prototype.hasOwnProperty.call(c.s.data,d)&&Object.prototype.hasOwnProperty.call(c.s.data[d],n);n!==t.checked&&(c.updateCheckbox(l,d,n),c.updateSelectAll(d))},0)):(l.checkboxes.select(t.checked),e.stopPropagation())},onClickSelectAll:function(e,t){var c=this.s.dt,s=this.s.ctx,o=null,l=a(t).closest("th");o=l.parents(".DTFC_Cloned").length?c.fixedColumns().cellIndex(l).column:c.column(l).index(),a(t).data("is-changed",!0),c.column(o,{page:s.aoColumns[o].checkboxes&&s.aoColumns[o].checkboxes.selectAllPages?"all":"current",search:"applied"}).checkboxes.select(t.checked),e.stopPropagation()},loadState:function(){var e,t=this,c=t.s.dt,s=t.s.ctx;s.oFeatures.bStateSave&&(e=c.state.loaded(),a.each(t.s.columns,function(o,l){e&&e.checkboxes&&e.checkboxes.hasOwnProperty(l)&&s.aoColumns[l].checkboxes.stateSave&&(t.s.data[l]=e.checkboxes[l])}))},updateSelectAll:function(e){var t,c,s,o,l,i,d,n=this,u=n.s.dt,b=n.s.ctx;b.aoColumns[e].checkboxes&&b.aoColumns[e].checkboxes.selectAll&&(o=u.cells("tr",e,{page:b.aoColumns[e].checkboxes.selectAllPages?"all":"current",search:"applied"}),u=u.table().container(),u=a('.dt-checkboxes-select-all[data-col="'+e+'"] input[type="checkbox"]',u),c=t=0,o=o.data(),a.each(o,function(h,r){n.isCellSelectable(e,r)?Object.prototype.hasOwnProperty.call(n.s.data,e)&&Object.prototype.hasOwnProperty.call(n.s.data[e],r)&&t++:c++}),b._fixedHeader&&b._fixedHeader.dom.header.floating&&(u=a('.fixedHeader-floating .dt-checkboxes-select-all[data-col="'+e+'"] input[type="checkbox"]')),o=t===0?s=!1:t+c===o.length?!(s=!0):s=!0,l=u.data("is-changed"),i=u.prop("checked"),d=u.prop("indeterminate"),l||i!==s||d!==o)&&(u.data("is-changed",!1),u.prop({checked:!o&&s,indeterminate:o}),a.isFunction(b.aoColumns[e].checkboxes.selectAllCallback))&&b.aoColumns[e].checkboxes.selectAllCallback(u.closest("th").get(0),s,o)},showInfoSelected:function(){var e=this.s.dt,t=this.s.ctx;if(t.aanFeatures.i){var c=this.getSelectRowColIndex();if(c!==null){var s,o=0;for(s in t.checkboxes.s.data[c])Object.prototype.hasOwnProperty.call(t.checkboxes.s.data,c)&&Object.prototype.hasOwnProperty.call(t.checkboxes.s.data[c],s)&&o++;a.each(t.aanFeatures.i,function(l,n){var d,n=a(n),u=a('<span class="select-info"/>'),b=(b="row",d=o,u.append(a('<span class="select-item"/>').append(e.i18n("select."+b+"s",{_:"%d "+b+"s selected",0:"",1:"1 "+b+" selected"},d))),n.children("span.select-info"));b.length&&b.remove(),u.text()!==""&&n.append(u)})}}},isCellSelectable:function(e,t){var c=this.s.ctx;return!Object.prototype.hasOwnProperty.call(c.checkboxes.s.dataDisabled,e)||!Object.prototype.hasOwnProperty.call(c.checkboxes.s.dataDisabled[e],t)},getCellIndex:function(e){var t=this.s.dt;return this.s.ctx._oFixedColumns?t.fixedColumns().cellIndex(e):t.cell(e).index()},getSelectRowColIndex:function(){for(var e=this.s.ctx,t=null,c=0;c<e.aoColumns.length;c++)if(e.aoColumns[c].checkboxes&&e.aoColumns[c].checkboxes.selectRow){t=c;break}return t},updateFixedColumn:function(e){var t,c=this,s=c.s.dt,o=c.s.ctx;o._oFixedColumns&&(t=o._oFixedColumns.s.iLeftColumns,o=o.aoColumns.length-o._oFixedColumns.s.iRightColumns-1,e<t||o<e)&&(s.fixedColumns().update(),setTimeout(function(){a.each(c.s.columns,function(l,i){c.updateSelectAll(i)})},0))}},p.defaults={stateSave:!0,selectRow:!1,selectAll:!0,selectAllPages:!0,selectCallback:null,selectAllCallback:null,selectAllRender:'<input type="checkbox" autocomplete="off">'},a.fn.dataTable.Api);return k.register("checkboxes()",function(){return this}),k.registerPlural("columns().checkboxes.select()","column().checkboxes.select()",function(e){return e===void 0&&(e=!0),this.iterator("column-rows",function(t,c,s,o,l){var i,d,n,u;t.aoColumns[c].checkboxes&&(u=[],a.each(l,function(b,h){u.push({row:h,column:c})}),d=(i=this.cells(u)).data(),n=[],u=[],a.each(d,function(b,h){t.checkboxes.isCellSelectable(c,h)&&(u.push({row:l[b],column:c}),n.push(l[b]))}),i=this.cells(u),t.checkboxes.updateData(i,c,e),t.aoColumns[c].checkboxes.selectRow&&t.checkboxes.updateSelect(n,e),t.checkboxes.updateCheckbox(i,c,e),t.checkboxes.updateSelectAll(c),t.checkboxes.updateFixedColumn(c))},1)}),k.registerPlural("cells().checkboxes.select()","cell().checkboxes.select()",function(e){return e===void 0&&(e=!0),this.iterator("cell",function(t,c,s){var o,l;t.aoColumns[s].checkboxes&&(o=this.cells([{row:c,column:s}]),l=this.cell({row:c,column:s}).data(),t.checkboxes.isCellSelectable(s,l))&&(t.checkboxes.updateData(o,s,e),t.aoColumns[s].checkboxes.selectRow&&t.checkboxes.updateSelect(c,e),t.checkboxes.updateCheckbox(o,s,e),t.checkboxes.updateSelectAll(s),t.checkboxes.updateFixedColumn(s))},1)}),k.registerPlural("cells().checkboxes.enable()","cell().checkboxes.enable()",function(e){return e===void 0&&(e=!0),this.iterator("cell",function(t,c,s){var o,l;t.aoColumns[s].checkboxes&&(o=(l=this.cell({row:c,column:s})).data(),e?delete t.checkboxes.s.dataDisabled[s][o]:t.checkboxes.s.dataDisabled[s][o]=1,(l=l.node())&&a("input.dt-checkboxes",l).prop("disabled",!e),t.aoColumns[s].checkboxes.selectRow)&&Object.prototype.hasOwnProperty.call(t.checkboxes.s.data,s)&&Object.prototype.hasOwnProperty.call(t.checkboxes.s.data[s],o)&&t.checkboxes.updateSelect(c,e)},1)}),k.registerPlural("cells().checkboxes.disable()","cell().checkboxes.disable()",function(e){return this.checkboxes.enable(!(e=e===void 0?!0:e))}),k.registerPlural("columns().checkboxes.deselect()","column().checkboxes.deselect()",function(e){return this.checkboxes.select(!(e=e===void 0?!0:e))}),k.registerPlural("cells().checkboxes.deselect()","cell().checkboxes.deselect()",function(e){return this.checkboxes.select(!(e=e===void 0?!0:e))}),k.registerPlural("columns().checkboxes.deselectAll()","column().checkboxes.deselectAll()",function(){return this.iterator("column",function(e,t){e.aoColumns[t].checkboxes&&(e.checkboxes.s.data[t]={},this.column(t).checkboxes.select(!1))},1)}),k.registerPlural("columns().checkboxes.selected()","column().checkboxes.selected()",function(){return this.iterator("column-rows",function(e,t,c,s,o){var l,i;return e.aoColumns[t].checkboxes?(l=[],e.oFeatures.bServerSide?a.each(e.checkboxes.s.data[t],function(d){e.checkboxes.isCellSelectable(t,d)&&l.push(d)}):(i=[],a.each(o,function(d,n){i.push({row:n,column:t})}),o=this.cells(i).data(),a.each(o,function(d,n){Object.prototype.hasOwnProperty.call(e.checkboxes.s.data,t)&&Object.prototype.hasOwnProperty.call(e.checkboxes.s.data[t],n)&&e.checkboxes.isCellSelectable(t,n)&&l.push(n)})),l):[]},1)}),p.version="1.2.14",a.fn.DataTable.Checkboxes=p,a.fn.dataTable.Checkboxes=p,a(x).on("preInit.dt.dtCheckboxes",function(e,t){e.namespace==="dt"&&new p(t)}),p})})(D);