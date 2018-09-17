function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

window.onload = function() {
  document.getElementById("arc1").setAttribute("d", describeArc(30, 30, 30, 10, 360));
  document.getElementById("arc2").setAttribute("d", describeArc(30, 30, 30, 45, 225));
  document.getElementById("arc3").setAttribute("d", describeArc(30, 30, 10, 225, 45));
  document.getElementById("arc4").setAttribute("d", describeArc(30, 30, 10, 45, 225));
};

