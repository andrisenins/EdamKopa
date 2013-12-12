var active = 'one';

function openmenu(id) {
  if (active == id) {
    return;
  }

  var items = ["one", "two", "three"];

  if (items.indexOf(id) == -1) {
    return;
  }

  if (active == id) {
    $("#sec_" + active).fadeOut("normal");
    return;
  }

  if (active != null) {
    $("#sec_" + active).fadeOut("normal");
  }

  $("#sec_" + active).fadeOut("slow", function() {
    $("#sec_" + id).fadeIn("normal");
  });
  active = id;
  // console.log(active + ', ' + id);
  return false;
}

function showHide(shID) {
  if (document.getElementById(shID)) {
    if (document.getElementById(shID + '-show').style.display != 'none') {
      document.getElementById(shID + '-show').style.display = 'none';
      document.getElementById(shID + '-hide').style.display = 'inline';
      document.getElementById(shID).style.display = 'block';
    } else {
      document.getElementById(shID + '-show').style.display = 'inline';
      document.getElementById(shID + '-hide').style.display = 'none';
      document.getElementById(shID).style.display = 'none';
    }
  }
}

function changeShow(shID, hdID) {
  document.getElementById(hdID).style.display = 'none';
  document.getElementById(hdID + '-button').style.display = 'none';
  document.getElementById(shID).style.display = 'inline';
  document.getElementById(shID + '-button').style.display = 'inline';
}

var topPos;
var updatedPos;
window.onscroll = navPos;
if (!topPos) {
  topPos = 10;
}
function navPos() {
  var pos = window.scrollY;
  if (!topPos) {
    topPos = 10;
  }
  var navi = document.getElementById('flyNavigatorFly');
  if (navi) {
    if (pos < topPos && updatedPos != 'absolute') {
      navi.style.position = 'absolute';
      navi.style.top = topPos + 'px';
      updatedPos = 'absolute';
    } else if (pos >= topPos && updatedPos != 'fixed') {
      navi.style.position = 'fixed';
      navi.style.top = '0';
      updatedPos = 'fixed';
    }
    ;
  }
  ;
}
navPos();
