/*!
 * jquery.counterup.js 2.1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Amended by Jeremy Paris, Ciro Mattia Gonano and others
 *
 * Date: Feb 24, 2017
 */(function(e){e.fn.counterUp=function(g){var r=e.extend({time:400,delay:10,offset:100,beginAt:0,formatter:!1,context:"window",callback:function(){}},g),u;return this.each(function(){var t=e(this),n={time:e(this).data("counterup-time")||r.time,delay:e(this).data("counterup-delay")||r.delay,offset:e(this).data("counterup-offset")||r.offset,beginAt:e(this).data("counterup-beginat")||r.beginAt,context:e(this).data("counterup-context")||r.context},b=function(){var s=[],o=n.time/n.delay,i=e(this).attr("data-num")?e(this).attr("data-num"):t.text(),m=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var x=(i.split(".")[1]||[]).length;n.beginAt>i&&(n.beginAt=i);var p=/[0-9]+:[0-9]+:[0-9]+/.test(i);if(p){var h=i.split(":"),v=1;for(u=0;h.length>0;)u+=v*parseInt(h.pop(),10),v*=60}for(var c=o;c>=n.beginAt/i*o;c--){var a=parseFloat(i/o*c).toFixed(x);if(p){a=parseInt(u/o*c);var f=parseInt(a/3600)%24,l=parseInt(a/60)%60,d=parseInt(a%60,10);a=(f<10?"0"+f:f)+":"+(l<10?"0"+l:l)+":"+(d<10?"0"+d:d)}if(m)for(;/(\d+)(\d{3})/.test(a.toString());)a=a.toString().replace(/(\d+)(\d{3})/,"$1,$2");r.formatter&&(a=r.formatter.call(this,a)),s.unshift(a)}t.data("counterup-nums",s),t.text(n.beginAt);var y=function(){if(!t.data("counterup-nums")){r.callback.call(this);return}t.html(t.data("counterup-nums").shift()),t.data("counterup-nums").length?setTimeout(t.data("counterup-func"),n.delay):(t.data("counterup-nums",null),t.data("counterup-func",null),r.callback.call(this))};t.data("counterup-func",y),setTimeout(t.data("counterup-func"),n.delay)};t.waypoint(function(s){b(),this.destroy()},{offset:n.offset+"%",context:n.context})})}})(jQuery);
