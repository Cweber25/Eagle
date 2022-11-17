var count = 0;
var array = [
  {
  answer: 'rec',
  Image: "/images/00_rec.JPG"
  },
  {
    answer: 'Niss',
    Image: "/images/00_niss-interior.JPG"
  }
];

function myFunction(){
  let a = 0;

  document.getElementById("img").src = array[a][Image];
}

function changeImage() {
  var answer = document.getElementById("answer").value;
  if (answer == "Rec") {
      document.getElementsByClassName('popup')[0].style.visibility = 'visible';
  } else if(count > 4) {
    document.getElementsByClassName('popup1')[0].style.visibility = 'visible';
  } else {
    document.getElementById('img').height = document.getElementById('img').height - 200;
    document.getElementById('img').width = document.getElementById('img').width - 200;
    count++
  }
}


