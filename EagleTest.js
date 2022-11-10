var count = 0;
function changeImage() {
  var answer = document.getElementById("answer").value;
  if (answer == "Rec") {
      document.getElementsByClassName('popup')[0].style.visibility = 'visible';
  } else if(count > 5) {
    document.getElementsByClassName('popup1')[0].style.visibility = 'visible';
  } else {
    document.getElementById('img').height = document.getElementById('img').height - 50;
    document.getElementById('img').width = document.getElementById('img').width - 50;
    count++
  }
}


