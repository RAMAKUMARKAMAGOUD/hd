/* empty css                      */import"./flatpickr.min-4f1e3e58.js";import{A as a}from"./apexcharts.common-b39be1f1.js";import"./_commonjsHelpers-de833af9.js";let l=["#f1556c"],e=$("#total-revenue").data("colors");e&&(l=e.split(","));let s={series:[68],chart:{height:242,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"65%"}}},colors:l,labels:["Revenue"]},r=new a(document.querySelector("#total-revenue"),s);r.render();let o=["#1abc9c","#4a81d4"],t=$("#sales-analytics").data("colors");t&&(o=t.split(","));let n={series:[{name:"Revenue",type:"column",data:[440,505,414,671,227,413,201,352,752,320,257,160]},{name:"Sales",type:"line",data:[23,42,35,27,43,22,17,31,22,22,12,16]}],chart:{height:378,type:"line",offsetY:10},stroke:{width:[2,3]},plotOptions:{bar:{columnWidth:"50%"}},colors:o,dataLabels:{enabled:!0,enabledOnSeries:[1]},labels:["01 Jan 2001","02 Jan 2001","03 Jan 2001","04 Jan 2001","05 Jan 2001","06 Jan 2001","07 Jan 2001","08 Jan 2001","09 Jan 2001","10 Jan 2001","11 Jan 2001","12 Jan 2001"],xaxis:{type:"datetime"},legend:{offsetY:7},grid:{padding:{bottom:20}},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:.75,opacityTo:.75,stops:[0,0,0]}},yaxis:[{title:{text:"Net Revenue"}},{opposite:!0,title:{text:"Number of Sales"}}]},i=new a(document.querySelector("#sales-analytics"),n);i.render();$("#dash-daterange").flatpickr({altInput:!0,mode:"range",altFormat:"F j, y",defaultDate:"today"});
