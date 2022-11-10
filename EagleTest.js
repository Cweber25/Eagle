var count = 0;
function changeImage() {
  var answer = document.getElementById("answer").value;
  if (answer == "Rec") {
      doPopup1();
  } else if(count > 5) {
    
  } else {
    document.getElementById('img').height = document.getElementById('img').height - 50;
    document.getElementById('img').width = document.getElementById('img').width - 50;
    count++
  }
}

function doPopup1() {
  url1 = "popuip.html";
  width = 500;  // width of window in pixels
  height = 500; // height of window in pixels
  delay = 5;    // time in seconds before popup opens
  timer = setInterval("Start1(url1, width, height)", delay*1000);
} 

