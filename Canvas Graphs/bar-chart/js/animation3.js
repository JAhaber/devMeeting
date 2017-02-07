$(document).ready(function(){
    barChart.init();
});

var barChart = {
    init: function(){
        barChart.tl3 = new TimelineLite({delay: 0.5});
        barChart.tl3.to(".chart-3.chart-3-1", 1.5, {height:"490px",  ease: Power4.easeOut}, 0);
        barChart.tl3.to(".chart-3.chart-3-2", 1.5, {height:"374px",  ease: Power4.easeOut}, 0.3);
        barChart.tl3.to(".chart-3.chart-3-3", 1.5, {height:"342px",  ease: Power4.easeOut}, 0.3*2);
        barChart.tl3.to(".chart-3.chart-3-4", 1.5, {height:"344px",  ease: Power4.easeOut}, 0.3*3);
        barChart.tl3.to(".chart-3.chart-3-5", 1.5, {height:"298px",  ease: Power4.easeOut}, 0.3*4);
        barChart.tl3.to(".chart-3.chart-3-6", 1.5, {height:"90px",  ease: Power4.easeOut}, 0.3*5);
        barChart.tl3.pause();

        $("body").on("click", function(){
            barChart.tl3.restart();
        });
    }
}
