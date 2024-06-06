import"./Chart.bundle.min-2956e9f2.js";import"./_commonjsHelpers-de833af9.js";(function(r){var n=function(){this.$body=r("body"),this.charts=[]};n.prototype.respChart=function(t,o,e,a){var l=t.get(0).getContext("2d"),i=r(t).parent();Chart.defaults.global.defaultFontColor="#8391a2",Chart.defaults.scale.gridLines.color="#8391a2";function c(){t.attr("width",r(i).width());var s;switch(o){case"Line":s=new Chart(l,{type:"line",data:e,options:a});break;case"Doughnut":s=new Chart(l,{type:"doughnut",data:e,options:a});break;case"Pie":s=new Chart(l,{type:"pie",data:e,options:a});break;case"Bar":s=new Chart(l,{type:"bar",data:e,options:a});break;case"Radar":s=new Chart(l,{type:"radar",data:e,options:a});break;case"PolarArea":s=new Chart(l,{data:e,type:"polarArea",options:a});break}return s}return c()},n.prototype.initCharts=function(){var t=[],o=["#1abc9c","#f1556c","#4a81d4","#e3eaef"];if(r("#line-chart-example").length>0){var e=r("#line-chart-example").data("colors"),a=e?e.split(","):o.concat(),l={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Current Week",backgroundColor:d(a[0],.3),borderColor:a[0],data:[32,42,42,62,52,75,62]},{label:"Previous Week",fill:!0,backgroundColor:"transparent",borderColor:a[1],borderDash:[5,5],data:[42,58,66,93,82,105,92]}]},i={maintainAspectRatio:!1,legend:{display:!1},tooltips:{intersect:!1},hover:{intersect:!0},plugins:{filler:{propagate:!1}},scales:{xAxes:[{reverse:!0,gridLines:{color:"rgba(0,0,0,0.05)"}}],yAxes:[{ticks:{stepSize:20},display:!0,borderDash:[5,5],gridLines:{color:"rgba(0,0,0,0)",fontColor:"#fff"}}]}};t.push(this.respChart(r("#line-chart-example"),"Line",l,i))}if(r("#bar-chart-example").length>0){var e=r("#bar-chart-example").data("colors"),a=e?e.split(","):o.concat(),c={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales Analytics",backgroundColor:a[0],borderColor:a[0],hoverBackgroundColor:a[0],hoverBorderColor:a[0],data:[65,59,80,81,56,89,40,32,65,59,80,81]},{label:"Dollar Rate",backgroundColor:a[1],borderColor:a[1],hoverBackgroundColor:a[1],hoverBorderColor:a[1],data:[89,40,32,65,59,80,81,56,89,40,65,59]}]},s={maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1},stacked:!1,ticks:{stepSize:20}}],xAxes:[{barPercentage:.7,categoryPercentage:.5,stacked:!1,gridLines:{color:"rgba(0,0,0,0.01)"}}]}};t.push(this.respChart(r("#bar-chart-example"),"Bar",c,s))}if(r("#pie-chart-example").length>0){var e=r("#pie-chart-example").data("colors"),a=e?e.split(","):o.concat(),p={labels:["Direct","Affilliate","Sponsored","E-mail"],datasets:[{data:[300,135,48,154],backgroundColor:a,borderColor:"transparent"}]},h={maintainAspectRatio:!1,legend:{display:!1}};t.push(this.respChart(r("#pie-chart-example"),"Pie",p,h))}if(r("#donut-chart-example").length>0){var e=r("#donut-chart-example").data("colors"),a=e?e.split(","):o.concat(),u={labels:["Direct","Affilliate","Sponsored"],datasets:[{data:[128,78,48],backgroundColor:a,borderColor:"transparent",borderWidth:"3"}]},C={maintainAspectRatio:!1,cutoutPercentage:60,legend:{display:!1}};t.push(this.respChart(r("#donut-chart-example"),"Doughnut",u,C))}if(r("#polar-chart-example").length>0){var e=r("#polar-chart-example").data("colors"),a=e?e.split(","):o.concat(),f={labels:["Direct","Affilliate","Sponsored","E-mail"],datasets:[{data:[251,135,48,154],backgroundColor:a,borderColor:"transparent"}]};t.push(this.respChart(r("#polar-chart-example"),"PolarArea",f))}if(r("#radar-chart-example").length>0){var e=r("#radar-chart-example").data("colors"),a=e?e.split(","):o.concat(),g={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"Desktops",backgroundColor:d(a[0],.3),borderColor:a[0],pointBackgroundColor:a[0],pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:a[0],data:[65,59,90,81,56,55,40]},{label:"Tablets",backgroundColor:d(a[1],.3),borderColor:a[1],pointBackgroundColor:a[1],pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:a[1],data:[28,48,40,19,96,27,100]}]},b={maintainAspectRatio:!1};t.push(this.respChart(r("#radar-chart-example"),"Radar",g,b))}return t},n.prototype.init=function(){var t=this;Chart.defaults.global.defaultFontFamily="Nunito,sans-serif",t.charts=this.initCharts(),r(window).on("resize",function(o){r.each(t.charts,function(e,a){try{a.destroy()}catch{}}),t.charts=t.initCharts()})},r.ChartJs=new n,r.ChartJs.Constructor=n})(window.jQuery),function(r){r.ChartJs.init()}(window.jQuery);function d(r,n){var t=parseInt(r.slice(1,3),16),o=parseInt(r.slice(3,5),16),e=parseInt(r.slice(5,7),16);return n?"rgba("+t+", "+o+", "+e+", "+n+")":"rgb("+t+", "+o+", "+e+")"}