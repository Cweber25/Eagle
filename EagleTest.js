var count = 5;
var answerFinal = null;

function ImageArray(n) {
    this.length = n;
    for(var i =1; i <= n; i++) {
        this[i] = ' '
    }
}

var numImages = 11
image = new ImageArray(numImages);
image[0] = '00_niss-interior.JPG';
image[1] = '00_rec.JPG';
image[2] = '06_niss-exterior2.JPG';
image[3] = '06_niss-interior1.JPG';
image[4] = '07_stadium-sign1.JPG';
image[5] = '08_dwight-schar2.JPG';
image[6] = '09_dauch2.JPG';
image[7] = '11_patterson1.JPG';
image[8] = '12_quad1.JPG';
image[9] = '20_library-exterior1.jpg';
image[10] = '20_library-exterior2.jpg.JPG';


const awr = {
  0: "Niss Interior",
  1: "Recreation Center",
  2: "Niss Exterior",
  3: "Niss Interior",
  4: "Jack Miller Stadium Sign",
  5: "Dwight Schar College of Education",
  6: "Dauch College of Business",
  7: "Patterson",
  8: "The Quad",
  9: "Archer Library",
  10: "Archer Library"
};

const paragraph = {
  // ----------------------------------------------------------------------80-
  0: "The Niss Athletic Center is one of the more recent locations added to the campus. Accompanied by a track, a soccer field, and viewing areas, The Niss Athletic Center is used for the Indoor Track and Field team, and is even used to host Track events across the division.",
  1: "The Rec Center is quite a centralized building on the Ashland University campus. There are many things that the Rec Center is used for by many students, such as being the student body’s free gym, and it also houses Tuffy’s Smoothie Bar. Some of the attractions as a gym include dumbbells, machines, Basketball Courts, an aerobics room, and even a rock climbing wall. It houses the swimming pool that is used for the Swim Team, and the swimming club. It also has a few classrooms that are mainly used for Sports Management Majors, and Exercise Science Majors. Its connection to the Kates Gymnasium gives students easy access to the athletic training center, and also the Rinehardt Room.",
  2: "The Niss Athletic Center is one of the more recent locations added to the campus. Accompanied by a track, a soccer field, and viewing areas, The Niss Athletic Center is used for the Indoor Track and Field team, and is even used to host Track events across the division.",
  3: "The Niss Athletic Center is one of the more recent locations added to the campus. Accompanied by a track, a soccer field, and viewing areas, The Niss Athletic Center is used for the Indoor Track and Field team, and is even used to host Track events across the division.",
  4: "The Jack Miller Stadium is where many athletes will frequently visit. This building is near the outdoor tracks, Niss Athletic Center, and Football fields. Most visitors to AU will end up visiting this area the most, whether that be visiting athletes, or the families of athletes.",
  5: "Schar is a classroom oriented building on the Ashland campus. Many classes relating to history, law, education, and psychology tend to take place in this building. Due to the size of the building, many classes from other fields will end up taking place here, so this tends to be more of a general building. Another area in the College of Education would be the Schar Caffe, which is a small place to get snacks and coffee in the mornings.",
  6: "Dauch is a building where, as the name suggests, business and economics take place. There are many offices and conference rooms around the interior, and there is even a lounge. Many classes take place in Dauch - most of which are related to math in some way, be it accounting, core math classes, and also some miscellaneous classes.",
  7: "Patterson",
  8: "The Quad is where the University actually started. The most defining trait of the Quad is the flagpole that flies the United States flag, and is the designated meeting place for mass gatherings. Many frequently accessed locations are surrounding the Quad. A few examples of this are: the Library, the Kettering Science Center, Patterson, and Founder’s Hall.",
  9: "The Campus Library is the tallest building on the Ashland campus. It is more than just a library, as it is also a hub of scholarly research articles that the students have access to free of charge. The Library also provides services assisting students with formatting papers, and gives the students a quiet area to focus on schoolwork; this also extends to private study rooms that are free to be reserved by students. The uses of the Library extend even further, as the Library is where the Freshman Academic Advisors work, and where tutors can be found.",
  10: "The Campus Library is the tallest building on the Ashland campus. It is more than just a library, as it is also a hub of scholarly research articles that the students have access to free of charge. The Library also provides services assisting students with formatting papers, and gives the students a quiet area to focus on schoolwork; this also extends to private study rooms that are free to be reserved by students. The uses of the Library extend even further, as the Library is where the Freshman Academic Advisors work, and where tutors can be found."
};

var date = new Date()
var currDay = date.getDate() - 1 // -1 to 0-index the value

function getDailyImage() {
  // var date = new Date()
  // var currDay = date.getDate() - 1 // -1 to 0-index the value
  document.getElementById("img").src = `images/${image[(currDay % numImages)]}`
}

function changeImage() {
    var answer = document.getElementById("answer").value;
    // if(answer == "Rec") {
    if(answer == awr[(currDay % numImages)]) {
        document.getElementsByClassName('popup')[0].style.visibility = 'visible';
        document.getElementById("popImg").src = `images/${image[(currDay % numImages)]}`;
        
        document.getElementById("popup_h2").style.background = "#6fd649";
        document.getElementById("popup_h2").innerHTML = "Correct!";

        document.getElementById("tinter").style.visibility = 'visible';
        document.getElementById("pg").innerHTML = paragraph[(currDay % numImages)]
    }
    else if(count > 4) {
        document.getElementsByClassName('popup')[0].style.visibility = 'visible';
        document.getElementById("popImg").src = `images/${image[(currDay % numImages)]}`;

        document.getElementById("popup_h2").style.background = "rgb(255, 0, 0)";
        document.getElementById("popup_h2").innerHTML = "Better luck next time!";

        document.getElementById("tinter").style.visibility = 'visible';

    }
    else {
        document.getElementById('img').height = document.getElementById('img').height - 200;
        document.getElementById('img').width = document.getElementById('img').width - 200;
        count++
    }
}


