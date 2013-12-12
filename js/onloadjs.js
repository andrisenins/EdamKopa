window.onload = function() {

  // Raphael
  var paper1 = Raphael(document.getElementById('ball1'), 100, 100);
  var paper1_2 = Raphael(document.getElementById('rect1'), 100, 100);
  var paper1_3 = Raphael(document.getElementById('elli1'), 100, 100);
  var paper2 = Raphael(document.getElementById('ball2'), 100, 100);
  var paper2_2 = Raphael(document.getElementById('rect2'), 100, 100);
  var paper2_3 = Raphael(document.getElementById('elli2'), 100, 100);

  paper1.circle(50, 50, 20);
  paper1_2.rect(20, 20, 50, 50);
  paper1_3.ellipse(50, 50, 25, 10);

  paper2.circle(50, 50, 20).attr("fill", "#317a24");
  paper2_2.rect(20, 20, 50, 50).attr({
    fill: '#fccae2',
    stroke: '#edf64c',
    'stroke-width': 10,
    'stroke-linejoin': 'round'
  });
  paper2_3.ellipse(50, 50, 25, 10).attr({
    gradient: '0-#caf7fc-#2209c8',
  });

  // Geolocation main function
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById('geolocation').innerHTML = "Geolocation is not supported by this browser.";
  }

};
