import"./Chart.bundle.min-2956e9f2.js";import"./jquery.todo-26694644.js";import"./_commonjsHelpers-de833af9.js";(function(e){var n=function(){this.$body=e("body"),this.charts=[]};n.prototype.respChart=function(t,i,a,r){var o=t.get(0).getContext("2d");Chart.defaults.global.defaultFontColor="#8391a2",Chart.defaults.scale.gridLines.color="#8391a2";var l=e(t).parent();function c(){t.attr("width",e(l).width());var s;switch(i){case"Line":s=new Chart(o,{type:"line",data:a,options:r});break;case"Doughnut":s=new Chart(o,{type:"doughnut",data:a,options:r});break;case"Pie":s=new Chart(o,{type:"pie",data:a,options:r});break;case"Bar":s=new Chart(o,{type:"bar",data:a,options:r});break;case"Radar":s=new Chart(o,{type:"radar",data:a,options:r});break;case"PolarArea":s=new Chart(o,{data:a,type:"polarArea",options:r});break}return s}return c()},n.prototype.initCharts=function(){var t=[],i=["#1abc9c","#f1556c","#4a81d4","#e3eaef"];if(e("#revenue-chart").length>0){var a=e("#revenue-chart").data("colors"),r=a?a.split(","):i.concat(),o={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Current Week",backgroundColor:d(r[0],.3),borderColor:r[0],data:[32,42,42,62,52,75,62]},{label:"Previous Week",fill:!0,backgroundColor:"transparent",borderColor:r[1],borderDash:[5,5],data:[42,58,66,93,82,105,92]}]},l={maintainAspectRatio:!1,legend:{display:!1},tooltips:{intersect:!1},hover:{intersect:!0},plugins:{filler:{propagate:!1}},scales:{xAxes:[{reverse:!0,gridLines:{color:"rgba(0,0,0,0.05)"}}],yAxes:[{ticks:{stepSize:20},display:!0,borderDash:[5,5],gridLines:{color:"rgba(0,0,0,0)",fontColor:"#fff"}}]}};t.push(this.respChart(e("#revenue-chart"),"Line",o,l))}if(e("#projections-actuals-chart").length>0){var a=e("#projections-actuals-chart").data("colors"),r=a?a.split(","):i.concat(),c={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales Analytics",backgroundColor:r[0],borderColor:r[0],hoverBackgroundColor:r[0],hoverBorderColor:r[0],data:[65,59,80,81,56,89,40,32,65,59,80,81],barPercentage:.7,categoryPercentage:.5},{label:"Dollar Rate",backgroundColor:r[1],borderColor:r[1],hoverBackgroundColor:r[1],hoverBorderColor:r[1],data:[89,40,32,65,59,80,81,56,89,40,65,59],barPercentage:.7,categoryPercentage:.5}]},s={maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1},stacked:!1,ticks:{stepSize:20}}],xAxes:[{stacked:!1,gridLines:{color:"rgba(0,0,0,0.01)"}}]}};t.push(this.respChart(e("#projections-actuals-chart"),"Bar",c,s))}return t},n.prototype.init=function(){var t=this;Chart.defaults.global.defaultFontFamily="Nunito,sans-serif",t.charts=this.initCharts(),e(window).on("resize",function(i){e.each(t.charts,function(a,r){try{r.destroy()}catch{}}),t.charts=t.initCharts()})},e.ChartJs=new n,e.ChartJs.Constructor=n})(window.jQuery),function(e){e.ChartJs.init()}(window.jQuery);function d(e,n){var t=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return n?"rgba("+t+", "+i+", "+a+", "+n+")":"rgb("+t+", "+i+", "+a+")"}
