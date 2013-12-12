// returns 10;
function f1() {
  var foo = 1;

  function bar() {
    if (!foo) {
      var foo = 10;
    }
    alert(foo);
  }

  bar();
}

// returns 1;
function f2() {

  var a = 1;

  function b() {
    a = 10;
    return;
    function a() {
    }
  }

  b();
  alert(a);
}

// Will return second 'a1', first does not exist (is deleted)
function f3(a1, a1) {
  alert(a1);
}

function progress() {
  var val = document.getElementById("prog").value;
  var arrcount = 0;
  var depcount = 0;
  var personcount = 0;
  var hotcount = 0;
  var emacount = 0;

  if (document.getElementById("arr").value != "") {
    arrcount = 1;
  } else {
    arrcount = 0;
  }

  if (document.getElementById("dep").value != "") {
    depcount = 1;
  } else {
    depcount = 0;
  }

  if (document.getElementById("person").value != 0) {
    personcount = 1;
  } else {
    personcount = 0;
  }

  if (document.getElementById("hot").value == "Something" || document.getElementById("hot").value == "something") {
    hotcount = 1;
  } else {
    hotcount = 0;
  }

  if (document.getElementById("ema").value != "") {
    emacount = 1;
  } else {
    emacount = 0;
  }

  val = arrcount + depcount + personcount + hotcount + emacount;
  document.getElementById("prog").value = val;

  if (document.getElementById('prog').value == 5) {
    document.getElementById('progressBarButton').innerHTML = "Ready!";
    document.getElementById('progressBarButton').disabled = false;
    document.getElementById('progressBarButton').style.background = '#a7d043';
  } else {
    document.getElementById('progressBarButton').innerHTML = "Not yet...";
    document.getElementById('progressBarButton').disabled = true;
    document.getElementById('progressBarButton').style.background = '#5d0909';
  }
}

// Geolocation

function showPosition(position) {
  document.getElementById('mapholder').style.display = 'block';
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  console.log(lat);
  console.log(lon);

  latlon = new google.maps.LatLng(lat, lon);
  mapholder = document.getElementById('mapholder');
  mapholder.style.height = '150px';
  mapholder.style.width = '500px';

  var myOptions = {
    center: latlon,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    }
  };
  var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
  new google.maps.Marker({
    position: latlon,
    map: map,
    title: "Here you are!"
  });
}

function showError(error) {
  var x = document.getElementById('geolocation');
  switch (error.code) {
  case error.PERMISSION_DENIED:
    x.innerHTML = "User denied the request for Geolocation.";
    break;
  case error.POSITION_UNAVAILABLE:
    x.innerHTML = "Location information is unavailable.";
    break;
  case error.TIMEOUT:
    x.innerHTML = "The request to get user location timed out.";
    break;
  case error.UNKNOWN_ERROR:
    x.innerHTML = "An unknown error occurred.";
    break;
  }
}
