import{c as J}from"./_commonjsHelpers-de833af9.js";import{r as Z}from"./jquery-ef5d6b77.js";var K={exports:{}};/*! Tablesaw - v3.1.2 - 2019-03-19
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2019 Filament Group; Licensed MIT */(function(X,j){(function(e,k){"document"in e?X.exports=k(Z(),e):X.exports=k(Z()(e),e)})(typeof window<"u"?window:J,function(e,k){var _=k.document,Y=/complete|loaded/.test(_.readyState);_.addEventListener("DOMContentLoaded",function(){Y=!0});var b={i18n:{modeStack:"Stack",modeSwipe:"Swipe",modeToggle:"Toggle",modeSwitchColumnsAbbreviated:"Cols",modeSwitchColumns:"Columns",columnToggleButton:"Columns",columnToggleError:"No eligible columns.",sort:"Sort",swipePreviousColumn:"Previous column",swipeNextColumn:"Next column"},mustard:"head"in _&&(!k.blackberry||k.WebKitPoint)&&!k.operamini,$:e,_init:function(s){b.$(s||_).trigger("enhance.tablesaw")},init:function(s){Y=Y||/complete|loaded/.test(_.readyState),Y?b._init(s):"addEventListener"in _&&_.addEventListener("DOMContentLoaded",function(){b._init(s)})}};return e(_).on("enhance.tablesaw",function(){typeof TablesawConfig<"u"&&TablesawConfig.i18n&&(b.i18n=e.extend(b.i18n,TablesawConfig.i18n||{})),b.i18n.modes=[b.i18n.modeStack,b.i18n.modeSwipe,b.i18n.modeToggle]}),b.mustard&&e(_.documentElement).addClass("tablesaw-enhanced"),function(){var s="tablesaw",c={toolbar:"tablesaw-bar"},t={create:"tablesawcreate",destroy:"tablesawdestroy",refresh:"tablesawrefresh",resize:"tablesawresize"},l="stack",i="table",r="[data-tablesaw],[data-tablesaw-mode],[data-tablesaw-sortable]",C={};b.events=t;var a=function(n){if(!n)throw new Error("Tablesaw requires an element.");this.table=n,this.$table=e(n),this.$thead=this.$table.children().filter("thead").eq(0),this.$tbody=this.$table.children().filter("tbody"),this.mode=this.$table.attr("data-tablesaw-mode")||l,this.$toolbar=null,this.attributes={subrow:"data-tablesaw-subrow",ignorerow:"data-tablesaw-ignorerow"},this.init()};a.prototype.init=function(){if(!this.$thead.length)throw new Error("tablesaw: a <thead> is required, but none was found.");if(!this.$thead.find("th").length)throw new Error("tablesaw: no header cells found. Are you using <th> inside of <thead>?");this.$table.attr("id")||this.$table.attr("id",s+"-"+Math.round(Math.random()*1e4)),this.createToolbar(),this._initCells(),this.$table.data(s,this),this.$table.trigger(t.create,[this])},a.prototype.getConfig=function(n){var o=e.extend(C,n||{});return e.extend(o,typeof TablesawConfig<"u"?TablesawConfig:{})},a.prototype._getPrimaryHeaderRow=function(){return this._getHeaderRows().eq(0)},a.prototype._getHeaderRows=function(){return this.$thead.children().filter("tr").filter(function(){return!e(this).is("[data-tablesaw-ignorerow]")})},a.prototype._getRowIndex=function(n){return n.prevAll().length},a.prototype._getHeaderRowIndeces=function(){var n=this,o=[];return this._getHeaderRows().each(function(){o.push(n._getRowIndex(e(this)))}),o},a.prototype._getPrimaryHeaderCells=function(n){return(n||this._getPrimaryHeaderRow()).find("th")},a.prototype._$getCells=function(n){var o=this;return e(n).add(n.cells).filter(function(){var y=e(this),T=y.parent(),x=y.is("[colspan]");return!T.is("["+o.attributes.subrow+"]")&&(!T.is("["+o.attributes.ignorerow+"]")||!x)})},a.prototype._getVisibleColspan=function(){var n=0;return this._getPrimaryHeaderCells().each(function(){var o=e(this);o.css("display")!=="none"&&(n+=parseInt(o.attr("colspan"),10)||1)}),n},a.prototype.getColspanForCell=function(n){var o=this._getVisibleColspan(),y=0;return n.closest("tr").data("tablesaw-rowspanned")&&y++,n.siblings().each(function(){var T=e(this),x=parseInt(T.attr("colspan"),10)||1;T.css("display")!=="none"&&(y+=x)}),o-y},a.prototype.isCellInColumn=function(n,o){return e(n).add(n.cells).filter(function(){return this===o}).length},a.prototype.updateColspanCells=function(n,o,y){var T=this,x=T._getPrimaryHeaderRow();this.$table.find("[rowspan][data-tablesaw-priority]").each(function(){var u=e(this);if(u.attr("data-tablesaw-priority")==="persist"){var h=u.closest("tr"),g=parseInt(u.attr("rowspan"),10);g>1&&(h=h.next(),h.data("tablesaw-rowspanned",!0),g--)}}),this.$table.find("[colspan],[data-tablesaw-maxcolspan]").filter(function(){return e(this).closest("tr")[0]!==x[0]}).each(function(){var u=e(this);if(y===void 0||T.isCellInColumn(o,this)){var h=T.getColspanForCell(u);n&&y!==void 0&&u[h===0?"addClass":"removeClass"](n);var g=parseInt(u.attr("data-tablesaw-maxcolspan"),10);g?h>g&&(h=g):u.attr("data-tablesaw-maxcolspan",u.attr("colspan")),u.attr("colspan",h)}})},a.prototype._findPrimaryHeadersForCell=function(n){for(var o=this._getPrimaryHeaderRow(),y=this._getRowIndex(o),T=[],x=0;x<this.headerMapping.length;x++)if(x!==y)for(var u=0;u<this.headerMapping[x].length;u++)this.headerMapping[x][u]===n&&T.push(this.headerMapping[y][u]);return T},a.prototype.getRows=function(){var n=this;return this.$table.find("tr").filter(function(){return e(this).closest("table").is(n.$table)})},a.prototype.getBodyRows=function(n){return(n?e(n):this.$tbody).children().filter("tr")},a.prototype.getHeaderCellIndex=function(n){for(var o=this.headerMapping[0],y=0;y<o.length;y++)if(o[y]===n)return y;return-1},a.prototype._initCells=function(){this.$table.find("[data-tablesaw-maxcolspan]").each(function(){var m=e(this);m.attr("colspan",m.attr("data-tablesaw-maxcolspan"))});var n=this.getRows(),o=[];n.each(function(m){o[m]=[]}),n.each(function(m){var P=0,B=e(this),H=B.children();H.each(function(){for(var D=parseInt(this.getAttribute("data-tablesaw-maxcolspan")||this.getAttribute("colspan"),10),L=parseInt(this.getAttribute("rowspan"),10);o[m][P];)P++;if(o[m][P]=this,D)for(var E=0;E<D-1;E++)P++,o[m][P]=this;if(L)for(var V=1;V<L;V++)o[m+V][P]=this;P++})});for(var y=this._getHeaderRowIndeces(),T=0;T<o[0].length;T++)for(var x=0,u=y.length;x<u;x++){var h=o[y[x]][T],g=y[x],v;for(h.cells||(h.cells=[]);g<o.length;)v=o[g][T],h!==v&&h.cells.push(v),g++}this.headerMapping=o},a.prototype.refresh=function(){this._initCells(),this.$table.trigger(t.refresh,[this])},a.prototype._getToolbarAnchor=function(){var n=this.$table.parent();return n.is(".tablesaw-overflow")?n:this.$table},a.prototype._getToolbar=function(n){return n||(n=this._getToolbarAnchor()),n.prev().filter("."+c.toolbar)},a.prototype.createToolbar=function(){var n=this._getToolbarAnchor(),o=this._getToolbar(n);o.length||(o=e("<div>").addClass(c.toolbar).insertBefore(n)),this.$toolbar=o,this.mode&&this.$toolbar.addClass("tablesaw-mode-"+this.mode)},a.prototype.destroy=function(){this._getToolbar().each(function(){this.className=this.className.replace(/\btablesaw-mode\-\w*\b/gi,"")});var n=this.$table.attr("id");e(_).off("."+n),e(k).off("."+n),this.$table.trigger(t.destroy,[this]),this.$table.removeData(s)},e.fn[s]=function(){return this.each(function(){var n=e(this);n.data(s)||new a(this)})};var f=e(_);f.on("enhance.tablesaw",function(n){if(b.mustard){var o=e(n.target);o.parent().length&&(o=o.parent()),o.find(i).filter(r)[s]()}});var d=!1,w;f.on("scroll.tablesaw",function(){d=!0,k.clearTimeout(w),w=k.setTimeout(function(){d=!1},300)});var S;e(k).on("resize",function(){d||(k.clearTimeout(S),S=k.setTimeout(function(){f.trigger(t.resize)},150))}),b.Table=a}(),function(){var s={stackTable:"tablesaw-stack",cellLabels:"tablesaw-cell-label",cellContentLabels:"tablesaw-cell-content"},c={key:"tablesaw-stack"},t={labelless:"data-tablesaw-no-labels",hideempty:"data-tablesaw-hide-empty"},l=function(i,r){this.tablesaw=r,this.$table=e(i),this.labelless=this.$table.is("["+t.labelless+"]"),this.hideempty=this.$table.is("["+t.hideempty+"]"),this.$table.data(c.key,this)};l.prototype.init=function(){if(this.$table.addClass(s.stackTable),!this.labelless){var i=this;this.$table.find("th, td").filter(function(){return!e(this).closest("thead").length}).filter(function(){return!e(this).is("["+t.labelless+"]")&&!e(this).closest("tr").is("["+t.labelless+"]")&&(!i.hideempty||!!e(this).html())}).each(function(){var r=e(_.createElement("b")).addClass(s.cellLabels),C=e(this);e(i.tablesaw._findPrimaryHeadersForCell(this)).each(function(f){var d=e(this.cloneNode(!0)),w=d.find(".tablesaw-sortable-btn");d.find(".tablesaw-sortable-arrow").remove();var S=d.find("[data-tablesaw-checkall]");if(S.closest("label").remove(),S.length){r=e([]);return}f>0&&r.append(_.createTextNode(", "));for(var n=w.length?w[0]:d[0],o;o=n.firstChild;)r[0].appendChild(o)}),r.length&&!C.find("."+s.cellContentLabels).length&&C.wrapInner("<span class='"+s.cellContentLabels+"'></span>");var a=C.find("."+s.cellLabels);a.length?a.replaceWith(r):(C.prepend(_.createTextNode(" ")),C.prepend(r))})}},l.prototype.destroy=function(){this.$table.removeClass(s.stackTable),this.$table.find("."+s.cellLabels).remove(),this.$table.find("."+s.cellContentLabels).each(function(){e(this).replaceWith(e(this.childNodes))})},e(_).on(b.events.create,function(i,r){if(r.mode==="stack"){var C=new l(r.table,r);C.init()}}).on(b.events.refresh,function(i,r){r.mode==="stack"&&e(r.table).data(c.key).init()}).on(b.events.destroy,function(i,r){r.mode==="stack"&&e(r.table).data(c.key).destroy()}),b.Stack=l}(),function(){var s="tablesawbtn",c={_create:function(){return e(this).each(function(){e(this).trigger("beforecreate."+s)[s]("_init").trigger("create."+s)})},_init:function(){var t=e(this),l=this.getElementsByTagName("select")[0];return l&&e(this).addClass("btn-select tablesaw-btn-select")[s]("_select",l),t},_select:function(t){var l=function(i,r){var C=e(r).find("option"),a=_.createElement("span"),f,d,w=!1;if(a.setAttribute("aria-hidden","true"),a.innerHTML="&#160;",C.each(function(){var o=this;o.selected&&(a.innerHTML=o.text)}),d=i.childNodes,C.length>0){for(var S=0,n=d.length;S<n;S++)f=d[S],f&&f.nodeName.toUpperCase()==="SPAN"&&(i.replaceChild(a,f),w=!0);w||i.insertBefore(a,i.firstChild)}};l(this,t),e(this).on("change refresh",function(){l(this,t)})}};e.fn[s]=function(t,l,i,r){return this.each(function(){if(t&&typeof t=="string")return e.fn[s].prototype[t].call(this,l,i,r);if(e(this).data(s+"active"))return e(this);e(this).data(s+"active",!0),e.fn[s].prototype._create.call(this)})},e.extend(e.fn[s].prototype,c)}(),function(){var s={key:"tablesaw-coltoggle"},c=function(t){this.$table=e(t),this.$table.length&&(this.tablesaw=this.$table.data("tablesaw"),this.attributes={btnTarget:"data-tablesaw-columntoggle-btn-target",set:"data-tablesaw-columntoggle-set"},this.classes={columnToggleTable:"tablesaw-columntoggle",columnBtnContain:"tablesaw-columntoggle-btnwrap tablesaw-advance",columnBtn:"tablesaw-columntoggle-btn tablesaw-nav-btn down",popup:"tablesaw-columntoggle-popup",priorityPrefix:"tablesaw-priority-"},this.set=[],this.$headers=this.tablesaw._getPrimaryHeaderCells(),this.$table.data(s.key,this))};c.prototype.initSet=function(){var t=this.$table.attr(this.attributes.set);if(t){var l=this.$table[0];this.set=e("table["+this.attributes.set+"='"+t+"']").filter(function(){return this!==l}).get()}},c.prototype.init=function(){if(!this.$table.length)return;var t,l,i,r,C,a,f=this,d=this.tablesaw.getConfig({getColumnToggleLabelTemplate:function(h){return"<label><input type='checkbox' checked>"+h+"</label>"}});this.$table.addClass(this.classes.columnToggleTable),t=this.$table.attr("id"),l=t+"-popup",a=e("<div class='"+this.classes.columnBtnContain+"'></div>"),i=e("<a href='#"+l+"' class='btn tablesaw-btn btn-micro "+this.classes.columnBtn+"' data-popup-link><span>"+b.i18n.columnToggleButton+"</span></a>"),r=e("<div class='"+this.classes.popup+"' id='"+l+"'></div>"),C=e("<div class='tablesaw-btn-group'></div>"),this.$popup=r;var w=!1;this.$headers.each(function(){var h=e(this),g=h.attr("data-tablesaw-priority"),v=f.tablesaw._$getCells(this);g&&g!=="persist"&&(v.addClass(f.classes.priorityPrefix+g),e(d.getColumnToggleLabelTemplate(h.text())).appendTo(C).find('input[type="checkbox"]').data("tablesaw-header",this),w=!0)}),w||C.append("<label>"+b.i18n.columnToggleError+"</label>"),C.appendTo(r);function S(h){var g=h.checked,v=f.getHeaderFromCheckbox(h),m=f.tablesaw._$getCells(v);m[g?"removeClass":"addClass"]("tablesaw-toggle-cellhidden"),m[g?"addClass":"removeClass"]("tablesaw-toggle-cellvisible"),f.updateColspanCells(v,g),f.$table.trigger("tablesawcolumns")}C.find('input[type="checkbox"]').on("change",function(h){if(S(h.target),f.set.length){var g;e(f.$popup).find("input[type='checkbox']").each(function(v){if(this===h.target)return g=v,!1}),e(f.set).each(function(){var v=e(this).data(s.key).$popup.find("input[type='checkbox']").get(g);v&&(v.checked=h.target.checked,S(v))})}}),i.appendTo(a);var n=e(this.$table.attr(this.attributes.btnTarget));a.appendTo(n.length?n:this.tablesaw.$toolbar);function o(h){h&&e(h.target).closest("."+f.classes.popup).length||(e(_).off("click."+t),i.removeClass("up").addClass("down"),a.removeClass("visible"))}var y;function T(){a.addClass("visible"),i.removeClass("down").addClass("up"),e(_).off("click."+t,o),k.clearTimeout(y),y=k.setTimeout(function(){e(_).on("click."+t,o)},15)}i.on("click.tablesaw",function(h){h.preventDefault(),a.is(".visible")?o():T()}),r.appendTo(a),this.$menu=C;var x=this.$table.closest(".tablesaw-overflow");if(x.css("-webkit-overflow-scrolling")){var u;x.on("scroll",function(){var h=e(this);k.clearTimeout(u),u=k.setTimeout(function(){h.css("-webkit-overflow-scrolling","auto"),k.setTimeout(function(){h.css("-webkit-overflow-scrolling","touch")},0)},100)})}e(k).on(b.events.resize+"."+t,function(){f.refreshToggle()}),this.initSet(),this.refreshToggle()},c.prototype.getHeaderFromCheckbox=function(t){return e(t).data("tablesaw-header")},c.prototype.refreshToggle=function(){var t=this;this.$menu.find("input").each(function(){var l=t.getHeaderFromCheckbox(this);this.checked=t.tablesaw._$getCells(l).eq(0).css("display")==="table-cell"}),this.updateColspanCells()},c.prototype.updateColspanCells=function(t,l){this.tablesaw.updateColspanCells("tablesaw-toggle-cellhidden",t,l)},c.prototype.destroy=function(){this.$table.removeClass(this.classes.columnToggleTable),this.$table.find("th, td").each(function(){var t=e(this);t.removeClass("tablesaw-toggle-cellhidden").removeClass("tablesaw-toggle-cellvisible"),this.className=this.className.replace(/\bui\-table\-priority\-\d\b/g,"")})},e(_).on(b.events.create,function(t,l){if(l.mode==="columntoggle"){var i=new c(l.table);i.init()}}),e(_).on(b.events.destroy,function(t,l){l.mode==="columntoggle"&&e(l.table).data(s.key).destroy()}),e(_).on(b.events.refresh,function(t,l){l.mode==="columntoggle"&&e(l.table).data(s.key).refreshToggle()}),b.ColumnToggle=c}(),function(){function s(a){var f=[];return e(a.childNodes).each(function(){var d=e(this);d.is("input, select")?f.push(d.val()):d.is(".tablesaw-cell-label")||f.push((d.text()||"").replace(/^\s+|\s+$/g,""))}),f.join("")}var c="tablesaw-sortable",t="table[data-"+c+"]",l="[data-"+c+"-switch]",i={sortCol:"data-tablesaw-sortable-col",defaultCol:"data-tablesaw-sortable-default-col",numericCol:"data-tablesaw-sortable-numeric",subRow:"data-tablesaw-subrow",ignoreRow:"data-tablesaw-ignorerow"},r={head:c+"-head",ascend:c+"-ascending",descend:c+"-descending",switcher:c+"-switch",tableToolbar:"tablesaw-bar-section",sortButton:c+"-btn"},C={_create:function(a){return e(this).each(function(){var f=e(this).data(c+"-init");if(f)return!1;e(this).data(c+"-init",!0).trigger("beforecreate."+c)[c]("_init",a).trigger("create."+c)})},_init:function(){var a=e(this),f=a.data("tablesaw"),d,w;function S(u){e.each(u,function(h,g){e(g).addClass(r.head)})}function n(u,h){e.each(u,function(g,v){var m=e("<button class='"+r.sortButton+"'/>");m.on("click",{col:v},h),e(v).wrapInner(m).find("button").append("<span class='tablesaw-sortable-arrow'>")})}function o(u){e.each(u,function(h,g){var v=e(g);v.removeAttr(i.defaultCol),v.removeClass(r.ascend),v.removeClass(r.descend)})}function y(u){if(!e(u.target).is("a[href]")){u.stopPropagation();var h=e(u.target).closest("["+i.sortCol+"]"),g=u.data.col,v=d.index(h[0]);o(h.closest("thead").find("th").filter(function(){return this!==h[0]})),h.is("."+r.descend)||!h.is("."+r.ascend)?(a[c]("sortBy",g,!0),v+="_asc"):(a[c]("sortBy",g),v+="_desc"),w&&w.find("select").val(v).trigger("refresh"),u.preventDefault()}}function T(u){e.each(u,function(h,g){var v=e(g);v.is("["+i.defaultCol+"]")&&(v.is("."+r.descend)||v.addClass(r.ascend))})}function x(u){w=e("<div>").addClass(r.switcher).addClass(r.tableToolbar);var h=["<label>"+b.i18n.sort+":"];h.push('<span class="btn tablesaw-btn"><select>'),u.each(function(v){var m=e(this),P=m.is("["+i.defaultCol+"]"),B=m.is("."+r.descend),H=m.is("["+i.numericCol+"]"),D=0,L=5;e(this.cells.slice(0,L)).each(function(){isNaN(parseInt(s(this),10))||D++});var E=D===L;H||m.attr(i.numericCol,E?"":"false"),h.push("<option"+(P&&!B?" selected":"")+' value="'+v+'_asc">'+m.text()+" "+(E?"&#x2191;":"(A-Z)")+"</option>"),h.push("<option"+(P&&B?" selected":"")+' value="'+v+'_desc">'+m.text()+" "+(E?"&#x2193;":"(Z-A)")+"</option>")}),h.push("</select></span></label>"),w.html(h.join(""));var g=f.$toolbar.children().eq(0);g.length?w.insertBefore(g):w.appendTo(f.$toolbar),w.find(".tablesaw-btn").tablesawbtn(),w.find("select").on("change",function(){var v=e(this).val().split("_"),m=u.eq(v[0]);o(m.siblings()),a[c]("sortBy",m.get(0),v[1]==="asc")})}a.addClass(c),d=a.children().filter("thead").find("th["+i.sortCol+"]"),S(d),n(d,y),T(d),a.is(l)&&x(d)},sortRows:function(a,f,d,w,S){function n(g,v){var m=[];return e.each(g,function(P,B){for(var H=B.parentNode,D=e(H),L=[],E=D.next();E.is("["+i.subRow+"]");)L.push(E[0]),E=E.next();var V=H.parentNode;D.is("["+i.subRow+"]")||V===v&&m.push({element:B,cell:s(B),row:H,subrows:L.length?L:null,ignored:D.is("["+i.ignoreRow+"]")})}),m}function o(g,v){var m,P=/[^\-\+\d\.]/g;return g?m=function(B,H){return B.ignored||H.ignored?0:v?parseFloat(B.cell.replace(P,""))-parseFloat(H.cell.replace(P,"")):B.cell.toLowerCase()>H.cell.toLowerCase()?1:-1}:m=function(B,H){return B.ignored||H.ignored?0:v?parseFloat(H.cell.replace(P,""))-parseFloat(B.cell.replace(P,"")):B.cell.toLowerCase()<H.cell.toLowerCase()?1:-1},m}function y(g){var v=[],m,P;for(m=0,P=g.length;m<P;m++)v.push(g[m].row),g[m].subrows&&v.push(g[m].subrows);return v}var T,x,u=n(w.cells,S),h=e(w).data("tablesaw-sort");return T=(h&&typeof h=="function"?h(d):!1)||o(d,e(w).is("["+i.numericCol+"]")&&!e(w).is("["+i.numericCol+'="false"]')),x=u.sort(T),a=y(x),a},makeColDefault:function(a,f){var d=e(a);d.attr(i.defaultCol,"true"),f?(d.removeClass(r.descend),d.addClass(r.ascend)):(d.removeClass(r.ascend),d.addClass(r.descend))},sortBy:function(a,f){var d=e(this),w,S=d.data("tablesaw");S.$tbody.each(function(){var n=this,o=e(this),y=S.getBodyRows(n),T,x=S.headerMapping[0],u,h;for(u=0,h=x.length;u<h;u++)if(x[u]===a){w=u;break}for(T=d[c]("sortRows",y,w,f,a,n),u=0,h=T.length;u<h;u++)o.append(T[u])}),d[c]("makeColDefault",a,f),d.trigger("tablesaw-sorted")}};e.fn[c]=function(a){var f=Array.prototype.slice.call(arguments,1),d;return a&&typeof a=="string"?(d=e.fn[c].prototype[a].apply(this[0],f),typeof d<"u"?d:e(this)):(e(this).data(c+"-active")||(e(this).data(c+"-active",!0),e.fn[c].prototype._create.call(this,a)),e(this))},e.extend(e.fn[c].prototype,C),e(_).on(b.events.create,function(a,f){f.$table.is(t)&&f.$table[c]()})}(),function(){var s={hideBtn:"disabled",persistWidths:"tablesaw-fix-persist",hiddenCol:"tablesaw-swipe-cellhidden",persistCol:"tablesaw-swipe-cellpersist",allColumnsVisible:"tablesaw-all-cols-visible"},c={disableTouchEvents:"data-tablesaw-no-touch",ignorerow:"data-tablesaw-ignorerow",subrow:"data-tablesaw-subrow"};function t(l,i){var r=i.data("tablesaw"),C=e("<div class='tablesaw-advance'></div>"),a=e("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro left'>"+b.i18n.swipePreviousColumn+"</a>").appendTo(C),f=e("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro right'>"+b.i18n.swipeNextColumn+"</a>").appendTo(C),d=l._getPrimaryHeaderCells(),w=d.not('[data-tablesaw-priority="persist"]'),S=[],n=[],o=e(_.head||"head"),y=i.attr("id");if(!d.length)throw new Error("tablesaw swipe: no header cells found.");i.addClass("tablesaw-swipe");function T(){i.css({width:"1px"}),i.find("."+s.hiddenCol).removeClass(s.hiddenCol),S=[],n=[],d.each(function(){var p=this.offsetWidth;S.push(p),g(this)||n.push(p)}),i.css({width:""})}T(),C.appendTo(r.$toolbar),y||(y="tableswipe-"+Math.round(Math.random()*1e4),i.attr("id",y));function x(p){r._$getCells(p).removeClass(s.hiddenCol)}function u(p){r._$getCells(p).addClass(s.hiddenCol)}function h(p){r._$getCells(p).addClass(s.persistCol)}function g(p){return e(p).is('[data-tablesaw-priority="persist"]')}function v(){i.removeClass(s.persistWidths),e("#"+y+"-persist").remove()}function m(){var p="#"+y+".tablesaw-swipe ",M=[],F=i.width(),A=F,q=[],z;if(d.each(function(N){var W;g(this)&&(W=this.offsetWidth,A-=W,W<F*.75&&(q.push(N+"-"+W),M.push(p+" ."+s.persistCol+":nth-child("+(N+1)+") { width: "+W+"px; }")))}),z=q.join("_"),M.length){i.addClass(s.persistWidths);var R=e("#"+y+"-persist");(!R.length||R.data("tablesaw-hash")!==z)&&(R.remove(),e("<style>"+M.join(`
`)+"</style>").attr("id",y+"-persist").data("tablesaw-hash",z).appendTo(o))}return A}function P(){var p=[],M;return w.each(function(F){var A=e(this),q=A.css("display")==="none"||A.is("."+s.hiddenCol);if(!q&&!M)M=!0,p[0]=F;else if(q&&M)return p[1]=F,!1}),p}function B(){var p=P();return[p[1]-1,p[0]-1]}function H(p){return p[1]>-1&&p[1]<w.length}function D(){var p=i.attr("data-tablesaw-swipe-media");return!p||"matchMedia"in k&&k.matchMedia(p).matches}function L(){if(D()){var p=i.parent().width(),M=[],F=0,A=[],q=d.length;d.each(function(N){var W=e(this),I=W.is('[data-tablesaw-priority="persist"]');M.push(I),F+=S[N],A.push(F),(I||F>p)&&q--});var z=q===0;d.each(function(N){A[N]>p&&u(this)});var R=!0;d.each(function(N){if(M[N]){h(this),R&&(r._$getCells(this).css("width",A[N]+"px"),R=!1);return}(A[N]<=p||z)&&(z=!1,x(this),r.updateColspanCells(s.hiddenCol,this,!0))}),v(),i.trigger("tablesawcolumns")}}function E(){U(!0)}function V(){U(!1)}function U(p){var M;if(p?M=P():M=B(),H(M)){isNaN(M[0])&&(p?M[0]=0:M[0]=w.length-1);var F=m(),A=M[0],q=M[1],z,R=w.get(A),N=!1,W=!1;u(R),r.updateColspanCells(s.hiddenCol,R,!0);for(var I=A+(p?1:-1);I>=0&&I<n.length;){F-=n[I];var G=w.eq(I);G.is(".tablesaw-swipe-cellhidden")?F>0&&(z=G.get(0),N=!0,W=!0,x(z),r.updateColspanCells(s.hiddenCol,z,!1)):W=!0,p?I++:I--}W?!N&&H(p?P():B())&&U(p):(z=w.get(q),x(z),r.updateColspanCells(s.hiddenCol,z,!1)),i.trigger("tablesawcolumns")}}a.add(f).on("click",function(p){e(p.target).closest(f).length?E():V(),p.preventDefault()});function O(p,M){return(p.touches||p.originalEvent.touches)[0][M]}i.is("["+c.disableTouchEvents+"]")||i.on("touchstart.swipetoggle",function(p){var M=O(p,"pageX"),F=O(p,"pageY"),A,q,z=k.pageYOffset;e(k).off(b.events.resize,L),e(this).on("touchmove.swipetoggle",function(R){A=O(R,"pageX"),q=O(R,"pageY")}).on("touchend.swipetoggle",function(){var R=l.getConfig({swipeHorizontalThreshold:30,swipeVerticalThreshold:30}),N=R.swipe?R.swipe.verticalThreshold:R.swipeVerticalThreshold,W=R.swipe?R.swipe.horizontalThreshold:R.swipeHorizontalThreshold,I=Math.abs(k.pageYOffset-z)>=N,G=Math.abs(q-F)>=N;!G&&!I&&(A-M<-1*W&&E(),A-M>W&&V()),k.setTimeout(function(){e(k).on(b.events.resize,L)},300),e(this).off("touchmove.swipetoggle touchend.swipetoggle")})}),i.on("tablesawcolumns.swipetoggle",function(){var p=H(B()),M=H(P());a[p?"removeClass":"addClass"](s.hideBtn),f[M?"removeClass":"addClass"](s.hideBtn),r.$toolbar[!p&&!M?"addClass":"removeClass"](s.allColumnsVisible)}).on("tablesawnext.swipetoggle",function(){E()}).on("tablesawprev.swipetoggle",function(){V()}).on(b.events.destroy+".swipetoggle",function(){var p=e(this);p.removeClass("tablesaw-swipe"),r.$toolbar.find(".tablesaw-advance").remove(),e(k).off(b.events.resize,L),p.off(".swipetoggle")}).on(b.events.refresh,function(){v(),T(),L()}),L(),e(k).on(b.events.resize,L)}e(_).on(b.events.create,function(l,i){i.mode==="swipe"&&t(i,i.$table)})}(),function(){var s={attr:{init:"data-tablesaw-minimap"},show:function(t){var l=t.getAttribute(s.attr.init);return l===""?!0:l&&"matchMedia"in k?k.matchMedia(l).matches:!1}};function c(t){var l=t.data("tablesaw"),i=e('<div class="tablesaw-advance minimap">'),r=e('<ul class="tablesaw-advance-dots">').appendTo(i),C="tablesaw-advance-dots-hide",a=t.data("tablesaw")._getPrimaryHeaderCells();a.each(function(){r.append("<li><i></i></li>")}),i.appendTo(l.$toolbar);function f(){if(!s.show(t[0])){i.css("display","none");return}i.css("display","block");var d=r.find("li").removeClass(C);t.find("thead th").each(function(w){e(this).css("display")==="none"&&d.eq(w).addClass(C)})}f(),e(k).on(b.events.resize,f),t.on("tablesawcolumns.minimap",function(){f()}).on(b.events.destroy+".minimap",function(){var d=e(this);l.$toolbar.find(".tablesaw-advance").remove(),e(k).off(b.events.resize,f),d.off(".minimap")})}e(_).on(b.events.create,function(t,l){(l.mode==="swipe"||l.mode==="columntoggle")&&l.$table.is("[ "+s.attr.init+"]")&&c(l.$table)}),b.MiniMap=s}(),function(){var s={selectors:{init:"table[data-tablesaw-mode-switch]"},attributes:{excludeMode:"data-tablesaw-mode-exclude"},classes:{main:"tablesaw-modeswitch",toolbar:"tablesaw-bar-section"},modes:["stack","swipe","columntoggle"],init:function(c){var t=e(c),l=t.data("tablesaw"),i=t.attr(s.attributes.excludeMode),r=l.$toolbar,C=e("<div>").addClass(s.classes.main+" "+s.classes.toolbar),a=['<label><span class="abbreviated">'+b.i18n.modeSwitchColumnsAbbreviated+'</span><span class="longform">'+b.i18n.modeSwitchColumns+"</span>:"],f=t.attr("data-tablesaw-mode"),d;a.push('<span class="btn tablesaw-btn"><select>');for(var w=0,S=s.modes.length;w<S;w++)i&&i.toLowerCase()===s.modes[w]||(d=f===s.modes[w],a.push("<option"+(d?" selected":"")+' value="'+s.modes[w]+'">'+b.i18n.modes[w]+"</option>"));a.push("</select></span></label>"),C.html(a.join(""));var n=r.find(".tablesaw-advance").eq(0);n.length?C.insertBefore(n):C.appendTo(r),C.find(".tablesaw-btn").tablesawbtn(),C.find("select").on("change",function(o){return s.onModeChange.call(c,o,e(this).val())})},onModeChange:function(c,t){var l=e(this),i=l.data("tablesaw"),r=i.$toolbar.find("."+s.classes.main);r.remove(),i.destroy(),l.attr("data-tablesaw-mode",t),l.tablesaw()}};e(_).on(b.events.create,function(c,t){t.$table.is(s.selectors.init)&&s.init(t.table)})}(),function(){var s="tablesawCheckAll";function c(t){this.tablesaw=t,this.$table=t.$table,this.attr="data-tablesaw-checkall",this.checkAllSelector="["+this.attr+"]",this.forceCheckedSelector="["+this.attr+"-checked]",this.forceUncheckedSelector="["+this.attr+"-unchecked]",this.checkboxSelector='input[type="checkbox"]',this.$triggers=null,this.$checkboxes=null,!this.$table.data(s)&&(this.$table.data(s,this),this.init())}c.prototype._filterCells=function(t){return t.filter(function(){return!e(this).closest("tr").is("[data-tablesaw-subrow],[data-tablesaw-ignorerow]")}).find(this.checkboxSelector).not(this.checkAllSelector)},c.prototype.getCheckboxesForButton=function(t){return this._filterCells(e(e(t).attr(this.attr)))},c.prototype.getCheckboxesForCheckbox=function(t){return this._filterCells(e(e(t).closest("th")[0].cells))},c.prototype.init=function(){var t=this;this.$table.find(this.checkAllSelector).each(function(){var l=e(this);l.is(t.checkboxSelector)?t.addCheckboxEvents(this):t.addButtonEvents(this)})},c.prototype.addButtonEvents=function(t){var l=this;e(t).on("click",function(i){i.preventDefault();var r=l.getCheckboxesForButton(this),C=!0;r.each(function(){this.checked||(C=!1)});var a;e(this).is(l.forceCheckedSelector)?a=!0:e(this).is(l.forceUncheckedSelector)?a=!1:a=!C,r.each(function(){this.checked=a,e(this).trigger("change."+s)})})},c.prototype.addCheckboxEvents=function(t){var l=this;e(t).on("change",function(){var r=this.checked;l.getCheckboxesForCheckbox(this).each(function(){this.checked=r})});var i=l.getCheckboxesForCheckbox(t);i.on("change."+s,function(){var r=0;i.each(function(){this.checked&&r++});var C=r===i.length;t.checked=C,t.indeterminate=r!==0&&!C})},e(_).on(b.events.create,function(t,l){new c(l)}),b.CheckAll=c}(),b})})(K);window.addEventListener("DOMContentLoaded",function(){$(document).trigger("enhance.tablesaw")});
