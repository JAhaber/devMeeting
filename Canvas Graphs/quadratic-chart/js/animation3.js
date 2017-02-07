$(document).ready(function(){
    s2_2.init();
});

var s2_2 = {
    optVals:[{ans: 1, count: 12},{ans: 2, count: 18},{ans: 3, count: 25}],
    graphCounter: {
        1: {count: 0},
        2: {count: 0},
        3: {count: 0}
    },
    maxWidth:300,
    bottomCurve: 90,
    init: function(){
        var scale = 0;
        s2_2.optVals.sort(function(a, b){
            return b.count - a.count;
        });
        scale = Math.ceil(s2_2.optVals[0].count/5)*5;
        if (scale > 0){
            for (var i = 1; i <= 5; i++){
                $(".y-axis[data-axisid=" + i +"]").html(scale/5*i);
            }
        }
        $("body").on("click", function(e){
            TweenMax.killAll();
            s2_2.createGraph(scale);
        });
    },
    createGraph: function(scale){
        s2_2.drawGraph("1", 350, "#004f92", scale);
        s2_2.drawGraph("2", 475, "#00abd9", scale);
        s2_2.drawGraph("3", 225, "#6c80bd", scale);
    },
    drawGraph: function(group, offset, clr, scale){
        var verticalBottom = 450;
        var maxHeight = verticalBottom - 11 - 400/scale*s2_2.optVals[group - 1].count;
        if (isNaN(maxHeight) || maxHeight == 0)
            maxHeight = verticalBottom - 11;
        s2_2.graphCounter[group].count = verticalBottom;
        TweenMax.to(s2_2.graphCounter[group], 2.5, {count: maxHeight, onUpdate:s2_2.animateGraph, onUpdateParams: [group, offset, verticalBottom, clr], ease: Power4.easeOut});
    },
    animateGraph: function(group, offset, verticalBottom, clr){
        var c = document.getElementById("group" + group);
        offsetX = offset - s2_2.maxWidth/2
        var ctx = c.getContext("2d");
        
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillStyle = clr;
        ctx.shadowColor = '#444';
          ctx.shadowBlur = 30;
          ctx.shadowOffsetX = 10;
          ctx.shadowOffsetY = 2;
        ctx.beginPath();
        ctx.moveTo(0 + offsetX, verticalBottom);
        ctx.bezierCurveTo(s2_2.bottomCurve + offsetX, verticalBottom, s2_2.maxWidth/4 + offsetX, s2_2.graphCounter[group].count, s2_2.maxWidth/2 + offsetX,s2_2.graphCounter[group].count);
        ctx.bezierCurveTo(s2_2.maxWidth*3/4 + offsetX, s2_2.graphCounter[group].count, s2_2.maxWidth - s2_2.bottomCurve + offsetX, verticalBottom, s2_2.maxWidth + offsetX, verticalBottom);

        ctx.fill();
    },

}
