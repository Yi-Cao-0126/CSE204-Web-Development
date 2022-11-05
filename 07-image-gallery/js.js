 // Get the img object using its Id
var img = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");
var a = document.getElementsByClassName("pic");
var index=1;
  // Get the modal image tag
var bg2 = document.getElementById("bgchange2");
  // Get the close button element
var but2 = document.getElementsByClassName("close_button")[1];
  // Get the modal image tag
  var bg3 = document.getElementById("bgchange3");
  // Get the close button element
var but3 = document.getElementsByClassName("close_button")[2];
  // Get the modal image tag
var bg4 = document.getElementById("bgchange4");
  // Get the close button element
var but4 = document.getElementsByClassName("close_button")[3];
  // Get the modal image tag
var bg5 = document.getElementById("bgchange5");
  // Get the close button element
var but5 = document.getElementsByClassName("close_button")[4];
  // Get the modal image tag
var bg6 = document.getElementById("bgchange6");
  // Get the close button element
var but6 = document.getElementsByClassName("close_button")[5];
  // Get the modal image tag
var bg7 = document.getElementById("bgchange7");
  // Get the close button element
var but7 = document.getElementsByClassName("close_button")[6];
  // Get the modal image tag
var bg8 = document.getElementById("bgchange8");
  // Get the close button element
var but8 = document.getElementsByClassName("close_button")[7];
  // Get the modal image tag
var bg9 = document.getElementById("bgchange9");
  // Get the close button element
var but9 = document.getElementsByClassName("close_button")[8];
  // Get the modal image tag
var bg10 = document.getElementById("bgchange10");
  // Get the close button element
var but10 = document.getElementsByClassName("close_button")[9];
  // Get the modal image tag
var bg11 = document.getElementById("bgchange11");
  // Get the close button element
var but11 = document.getElementsByClassName("close_button")[10];
  // Get the modal image tag
var bg12 = document.getElementById("bgchange12");
  // Get the close button element
var but12 = document.getElementsByClassName("close_button")[11];
  // Get the modal image tag
var bg = document.getElementById("bgchange");
  // Get the close button element
var but = document.getElementsByClassName("close_button")[0];

// Function to increase image size
function enlargeImg(inputImage) {
    // Set image size to 1.5 times original
    bg.style.zIndex = "0";
    inputImage.style.zIndex ="2";
    img.style.zIndex = "2";
    bg.style.display = "block"; 
    img3.style.zIndex = "0";
    img2.style.display = "none"; 
    inputImage.style.transform = "scale(2)" + "translateX(" + 60 + "%)";
    // Animation effect
    inputImage.style.transition = "transform 0.25s ease";

  }

  
  // When the user clicks on button (x), close the modal
but.onclick = function () {
    bg.style.display = "none";
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
    img.style.zIndex = "0";
    img2.style.display = "block"; 
    img3.style.zIndex = "0";
    img2.style.zIndex = "0";
    img4.style.zIndex = "0";
    img5.style.zIndex = "0";
    img6.style.zIndex = "0";
    img7.style.zIndex = "0";
    img8.style.zIndex = "0";
    img9.style.zIndex = "0";
    img10.style.zIndex = "0";
    img11.style.zIndex = "0";
    img12.style.zIndex = "0";
    img.src="pic1.jpg";
  }


  
  // When the user clicks on <span> (x), close the modal
but2.onclick = function () {
    bg2.style.display = "none";
    img2.style.transform = "scale(1)";
    img2.style.transition = "transform 0.25s ease";
    img.style.zIndex = "0";
    img2.style.zIndex = "0";
    img3.style.zIndex = "0";
    img4.style.zIndex = "0";
    img5.style.zIndex = "0";
    img6.style.zIndex = "0";
    img7.style.zIndex = "0";
    img8.style.zIndex = "0";
    img9.style.zIndex = "0";
    img10.style.zIndex = "0";
    img11.style.zIndex = "0";
    img12.style.zIndex = "0";
    img2.src="pic2.jpg";
  }

  // When the user clicks on <span> (x), close the modal
but3.onclick = function () {
    bg3.style.display = "none";
    img3.style.transform = "scale(1)";
    img3.style.transition = "transform 0.25s ease";
    img3.style.zIndex = "0";    
    img.style.zIndex = "1";
    img2.style.zIndex = "1";
    img4.style.zIndex = "0";
    img5.style.zIndex = "0";
    img6.style.zIndex = "0";
    img7.style.zIndex = "0";
    img8.style.zIndex = "0";
    img9.style.zIndex = "0";
    img10.style.zIndex = "0";
    img11.style.zIndex = "0";
    img12.style.zIndex = "0";
    img3.src="pic3.jpg";
  }


but4.onclick = function () {
  bg4.style.display = "none";
  img4.style.transform = "scale(1)";
  img4.style.transition = "transform 0.25s ease";
  img.style.zIndex = "0";
  img2.style.zIndex = "0";
  img3.style.zIndex = "0";
  img4.style.zIndex = "0";
  img5.style.zIndex = "0";
  img6.style.zIndex = "0";
  img7.style.zIndex = "0";
  img8.style.zIndex = "0";
  img9.style.zIndex = "0";
  img10.style.zIndex = "0";
  img11.style.zIndex = "0";
  img12.style.zIndex = "0";
  img4.src="pic4.jpg";
}

but5.onclick = function () {
  bg5.style.display = "none";
  img5.style.transform = "scale(1)";
  img5.style.transition = "transform 0.25s ease";
  img.style.zIndex = "0";
  img2.style.zIndex = "0";
  img3.style.zIndex = "0";
  img4.style.zIndex = "0";
  img5.style.zIndex = "0";
  img6.style.zIndex = "0";
  img7.style.zIndex = "0";
  img8.style.zIndex = "0";
  img9.style.zIndex = "0";
  img10.style.zIndex = "0";
  img11.style.zIndex = "0";
  img12.style.zIndex = "0";
  img5.src="pic5.jpg";
}

but6.onclick = function () {
  bg6.style.display = "none";
  img6.style.transform = "scale(1)";
  img6.style.transition = "transform 0.25s ease";
  img.style.zIndex = "0";
  img2.style.zIndex = "0";
  img3.style.zIndex = "0";
  img4.style.zIndex = "0";
  img5.style.zIndex = "0";
  img6.style.zIndex = "0";
  img7.style.zIndex = "0";
  img8.style.zIndex = "0";
  img9.style.zIndex = "0";
  img10.style.zIndex = "0";
  img11.style.zIndex = "0";
  img12.style.zIndex = "0";
  img6.src="pic6.jpg";
}

but7.onclick = function () {
  bg7.style.display = "none";
  img7.style.transform = "scale(1)";
  img7.style.transition = "transform 0.25s ease";
  img.style.zIndex = "0";
  img2.style.zIndex = "0";
  img3.style.zIndex = "0";
  img4.style.zIndex = "0";
  img5.style.zIndex = "0";
  img6.style.zIndex = "0";
  img7.style.zIndex = "0";
  img8.style.zIndex = "0";
  img9.style.zIndex = "0";
  img10.style.zIndex = "0";
  img11.style.zIndex = "0";
  img12.style.zIndex = "0";
  img7.src="pic7.jpg";
}

but8.onclick = function () {
  bg8.style.display = "none";
  img8.style.transform = "scale(1)";
  img8.style.transition = "transform 0.25s ease";
  img.style.zIndex = "0";
  img2.style.zIndex = "0";
  img3.style.zIndex = "0";
  img4.style.zIndex = "0";
  img5.style.zIndex = "0";
  img6.style.zIndex = "0";
  img7.style.zIndex = "0";
  img8.style.zIndex = "0";
  img9.style.zIndex = "0";
  img10.style.zIndex = "0";
  img11.style.zIndex = "0";
  img12.style.zIndex = "0";
  img8.src="pic8.jpg";
}

but9.onclick = function () {
  bg9.style.display = "none";
  img9.style.transform = "scale(1)";
  img9.style.transition = "transform 0.25s ease";
  img.style.zIndex = "0";
  img2.style.zIndex = "0";
  img3.style.zIndex = "0";
  img4.style.zIndex = "0";
  img5.style.zIndex = "0";
  img6.style.zIndex = "0";
  img7.style.zIndex = "0";
  img8.style.zIndex = "0";
  img9.style.zIndex = "0";
  img10.style.zIndex = "0";
  img11.style.zIndex = "0";
  img12.style.zIndex = "0";
  img9.src="pic9.jpg";
}

but10.onclick = function () {
  bg10.style.display = "none";
  img10.style.transform = "scale(1)";
  img10.style.transition = "transform 0.25s ease";
  img.style.zIndex = "0";
  img2.style.zIndex = "0";
  img3.style.zIndex = "0";
  img4.style.zIndex = "0";
  img5.style.zIndex = "0";
  img6.style.zIndex = "0";
  img7.style.zIndex = "0";
  img8.style.zIndex = "0";
  img9.style.zIndex = "0";
  img10.style.zIndex = "0";
  img11.style.zIndex = "0";
  img12.style.zIndex = "0";
  img10.src="pic10.jpg";

}

but11.onclick = function () {
  bg11.style.display = "none";
  img11.style.transform = "scale(1)";
  img11.style.transition = "transform 0.25s ease";
  img.style.zIndex = "0";
  img2.style.zIndex = "0";
  img3.style.zIndex = "0";
  img4.style.zIndex = "0";
  img5.style.zIndex = "0";
  img6.style.zIndex = "0";
  img7.style.zIndex = "0";
  img8.style.zIndex = "0";
  img9.style.zIndex = "0";
  img10.style.zIndex = "0";
  img11.style.zIndex = "0";
  img12.style.zIndex = "0";
  img11.src="pic11.jpg";
}

but12.onclick = function () {
  bg12.style.display = "none";
  img12.style.transform = "scale(1)";
  img12.style.transition = "transform 0.25s ease";
  img.style.zIndex = "0";
  img2.style.zIndex = "0";
  img3.style.zIndex = "0";
  img4.style.zIndex = "0";
  img5.style.zIndex = "0";
  img6.style.zIndex = "0";
  img7.style.zIndex = "0";
  img8.style.zIndex = "0";
  img9.style.zIndex = "0";
  img10.style.zIndex = "0";
  img11.style.zIndex = "0";
  img12.style.zIndex = "0";
  img12.src="pic12.jpg";
}

  // Function to increase image size
function enlargeImgtest(inputImage) {
    // Set image size to 1.5 times original
    inputImage.style.zIndex ="99"; 
    if (inputImage==img){
        bg.style.zIndex = "0";
        bg.style.display = "block";
        img3.style.zIndex = "-1";
        img4.style.zIndex = "-2";
        img5.style.zIndex = "-2";
        img6.style.zIndex = "-2";
        img7.style.zIndex = "-2";
        img8.style.zIndex = "-2";
        img9.style.zIndex = "-2";
        img10.style.zIndex = "-2";
        img11.style.zIndex = "-2";
        img12.style.zIndex = "-2";
        img2.style.zIndex = "-2";
        inputImage.style.transform = "scale(2)" + "translateX(" + 63 + "%)"; 
            // Animation effect
        inputImage.style.transition = "transform 0.25s ease";
        //inputImage.style.zIndex ="99"; 
    }
    else if (inputImage==img2){
        bg2.style.zIndex = "0";
        bg2.style.display = "block";
        img3.style.zIndex = "-1";
        img.style.zIndex = "-1";
        img4.style.zIndex = "-1";
        img5.style.zIndex = "-1";
        img6.style.zIndex = "-1";
        img7.style.zIndex = "-2";
        img8.style.zIndex = "-2";
        img9.style.zIndex = "-2";
        img10.style.zIndex = "-2";
        img11.style.zIndex = "-2";
        img12.style.zIndex = "-2";
        inputImage.style.transform = "scale(2)";
        inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img3){
      bg3.style.zIndex = "0";
      bg3.style.display = "block";
      img2.style.zIndex = "-1";
      img.style.zIndex = "-1";
      img4.style.zIndex = "-1";
      img5.style.zIndex = "-1";
      img6.style.zIndex = "-1";
      img7.style.zIndex = "-2";
      img8.style.zIndex = "-2";
      img9.style.zIndex = "-2";
      img10.style.zIndex = "-2";
      img11.style.zIndex = "-2";
      img12.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)"+"translateX(-63%)";
      inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img4){
      bg4.style.zIndex = "0";
      bg4.style.display = "block";
      img.style.zIndex = "-1";
      img2.style.zIndex = "-1";
      img3.style.zIndex = "-1";
      img5.style.zIndex = "-1";
      img6.style.zIndex = "-1";
      img7.style.zIndex = "-2";
      img8.style.zIndex = "-2";
      img9.style.zIndex = "-2";
      img10.style.zIndex = "-2";
      img11.style.zIndex = "-2";
      img12.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)" + "translateX(63%)"+"translateY(-40%)";
      // Animation effect
      inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img5){
      bg5.style.zIndex = "0";
      bg5.style.display = "block";
      img.style.zIndex = "-1";
      img2.style.zIndex =  "-1";
      img3.style.zIndex =  "-1";
      img4.style.zIndex = "-1";
      img6.style.zIndex = "-1";
      img7.style.zIndex = "-2";
      img8.style.zIndex = "-2";
      img9.style.zIndex = "-2";
      img10.style.zIndex = "-2";
      img11.style.zIndex = "-2";
      img12.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)" + "translateY(-40%)";
      // Animation effect
      inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img6){
      bg6.style.zIndex = "0";
      bg6.style.display = "block";
      img.style.zIndex = "-1";
      img2.style.zIndex =  "-1";
      img3.style.zIndex =  "-1";
      img4.style.zIndex = "-1";
      img5.style.zIndex = "-1";
      img7.style.zIndex = "-2";
      img8.style.zIndex = "-2";
      img9.style.zIndex = "-2";
      img10.style.zIndex = "-2";
      img11.style.zIndex = "-2";
      img12.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)" + "translateX(-63%)"+ "translateY(-40%)";
      // Animation effect
      inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img7){
      bg7.style.zIndex = "0";
      bg7.style.display = "block";
      img.style.zIndex = "-1";
      img2.style.zIndex =  "-1";
      img3.style.zIndex =  "-1";
      img4.style.zIndex = "-1";
      img5.style.zIndex = "-1";
      img6.style.zIndex = "-2";
      img8.style.zIndex = "-2";
      img9.style.zIndex = "-2";
      img10.style.zIndex = "-2";
      img11.style.zIndex = "-2";
      img12.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)" + "translateX(63%)"+ "translateY(-40%)";
      // Animation effect
      inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img8){
      bg8.style.zIndex = "0";
      bg8.style.display = "block";
      img.style.zIndex = "-1";
      img2.style.zIndex =  "-1";
      img3.style.zIndex =  "-1";
      img4.style.zIndex = "-1";
      img5.style.zIndex = "-1";
      img6.style.zIndex = "-2";
      img7.style.zIndex = "-2";
      img9.style.zIndex = "-2";
      img10.style.zIndex = "-2";
      img11.style.zIndex = "-2";
      img12.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)" + "translateY(-40%)";
      // Animation effect
      inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img9){
      bg9.style.zIndex = "0";
      bg9.style.display = "block";
      img.style.zIndex = "-1";
      img2.style.zIndex =  "-1";
      img3.style.zIndex =  "-1";
      img4.style.zIndex = "-1";
      img5.style.zIndex = "-1";
      img6.style.zIndex = "-2";
      img7.style.zIndex = "-2";
      img8.style.zIndex = "-2";
      img10.style.zIndex = "-2";
      img11.style.zIndex = "-2";
      img12.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)" + "translateX(-63%)"+ "translateY(-40%)";
      // Animation effect
      inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img10){
      bg10.style.zIndex = "0";
      bg10.style.display = "block";
      img.style.zIndex = "-1";
      img2.style.zIndex =  "-1";
      img3.style.zIndex =  "-1";
      img4.style.zIndex = "-1";
      img5.style.zIndex = "-1";
      img6.style.zIndex = "-2";
      img7.style.zIndex = "-2";
      img8.style.zIndex = "-2";
      img9.style.zIndex = "-2";
      img11.style.zIndex = "-2";
      img12.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)" + "translateX(63%)"+ "translateY(-40%)";
      // Animation effect
      inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img11){
      bg11.style.zIndex = "0";
      bg11.style.display = "block";
      img.style.zIndex = "-1";
      img2.style.zIndex =  "-1";
      img3.style.zIndex =  "-1";
      img4.style.zIndex = "-1";
      img5.style.zIndex = "-1";
      img6.style.zIndex = "-2";
      img7.style.zIndex = "-2";
      img8.style.zIndex = "-2";
      img9.style.zIndex = "-2";
      img10.style.zIndex = "-2";
      img12.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)" +  "translateY(-40%)";
      // Animation effect
      inputImage.style.transition = "transform 0.25s ease";
    }
    else if (inputImage==img12){
      bg12.style.zIndex = "0";
      bg12.style.display = "block";
      img.style.zIndex = "-1";
      img2.style.zIndex =  "-1";
      img3.style.zIndex =  "-1";
      img4.style.zIndex = "-1";
      img5.style.zIndex = "-1";
      img6.style.zIndex = "-2";
      img7.style.zIndex = "-2";
      img8.style.zIndex = "-2";
      img9.style.zIndex = "-2";
      img10.style.zIndex = "-2";
      img11.style.zIndex = "-2";
      inputImage.style.transform = "scale(2)" + "translateX(-63%)"+ "translateY(-40%)";
      // Animation effect
      inputImage.style.transition = "transform 0.25s ease";
    }
  }

//function change(n) {
//    index +=n;
//    prevOrNext(index);
//}

function change(n) {
    index = index + n;
    console.log(index);
    console.log(n);
    if (index > a.length) { 
        index = a.length;
        //document.getElementById('img1').src="pic1.jpg";
        alert("This is the last image in this gallery!");
    }
    else if (index <1) {
        console.log(index);
        index=1;
        alert("This is the first image in this gallery!"); 
    }
    else if (n = 1) {
      document.getElementById('img1').src="pic1.jpg";
    }
    document.getElementById('img1').src = a[index-1].getAttribute("src");
} //function setIndex   

var index2=2;
function change2(n) {
  index2 = index2 + n;
  console.log(index2);
  console.log(n);
  if (index2 > a.length) { 
      index2 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index2 <1) {
    index2=1;
    alert("This is the first image in this gallery!"); 
  }
  else if (n = 1) {
      document.getElementById('img2').src="pic2.jpg";
  }
  document.getElementById('img2').src = a[index2-1].getAttribute("src");

} 

var index3=3;
function change3(n) {
  index3 = index3 + n;
  console.log(index3);
  console.log(n);
  if (index3 > a.length) { 
      index3 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index3 < 1) {
    index3=1;
    alert("This is the first image in this gallery!"); 
}
  else if (n = 1) {
      document.getElementById('img3').src="pic3.jpg";
  }

  document.getElementById('img3').src = a[index3-1].getAttribute("src");
}
  
var index4=4;
function change4(n) {
  index4 = index4 + n;
  console.log(index4);
  console.log(n);
  if (index4 > a.length) { 
      index4 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index4 < 1) {
    index4=1;
    alert("This is the first image in this gallery!");
}
  else if (n = 1) {
      document.getElementById('img4').src="pic4.jpg";
  }
  document.getElementById('img4').src = a[index4-1].getAttribute("src");
}
  
var index5=5;
function change5(n) {
  index5 = index5 + n;
  console.log(index5);
  console.log(n);
  if (index5 > a.length) { 
      index5 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index5 < 1) {
    index5=1;
    alert("This is the first image in this gallery!");
  }
  else if (n = 1) {
      document.getElementById('img5').src="pic5.jpg";
  }
  document.getElementById('img5').src = a[index5-1].getAttribute("src");
}
  

var index6=6;
function change6(n) {
  index6 = index6 + n;
  console.log(index6);
  console.log(n);
  if (index6 > a.length) { 
      index6 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index6 < 1) {
    index6=1;
    alert("This is the first image in this gallery!");
  } 
  else if (n = 1) {
      document.getElementById('img6').src="pic6.jpg";
  }
  document.getElementById('img6').src = a[index6-1].getAttribute("src");
}
  
var index7=7;
function change7(n) {
  index7 = index7 + n;
  console.log(index7);
  console.log(n);
  if (index7 > a.length) { 
      index7 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index7 < 1) {
    index7=1;
    alert("This is the first image in this gallery!");
  } 
  else if (n = 1) {
      document.getElementById('img7').src="pic7.jpg";
  }
  document.getElementById('img7').src = a[index7-1].getAttribute("src");
}
  
var index8=8;
function change8(n) {
  index8 = index8 + n;
  console.log(index8);
  console.log(n);
  if (index8 > a.length) { 
      index8 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index8 < 1) {
    index8=1;
    alert("This is the first image in this gallery!");
  } 
  else if (n = 1) {
      document.getElementById('img8').src="pic8.jpg";
  }
  document.getElementById('img8').src = a[index8-1].getAttribute("src");
}

var index9=9;
function change9(n) {
  index9 = index9 + n;
  console.log(index9);
  console.log(n);
  if (index9 > a.length) { 
      index9 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index9 < 1) {
    index9=1;
    alert("This is the first image in this gallery!");
  } 
  else if (n = 1) {
      document.getElementById('img9').src="pic9.jpg";
  }
  document.getElementById('img9').src = a[index9-1].getAttribute("src");
}
  
var index10=10;
function change10(n) {
  index10 = index10 + n;
  console.log(index10);
  console.log(n);
  if (index10 > a.length) { 
      index10 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index10 < 1) {
    index10=1;
    alert("This is the first image in this gallery!");
  } 
  else if (n = 1) {
      document.getElementById('img10').src="pic10.jpg";
  }
  document.getElementById('img10').src = a[index10-1].getAttribute("src");
}    

var index11=11;
function change11(n) {
  index11 = index11 + n;
  console.log(index11);
  console.log(n);
  if (index11 > a.length) { 
      index11 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index11 < 1) {
    index11=1;
    alert("This is the first image in this gallery!");
  } 
  else if (n = 1) {
      document.getElementById('img11').src="pic11.jpg";
  }
  document.getElementById('img11').src = a[index11-1].getAttribute("src");
}    

var index12=12;
function change12(n) {
  index12 = index12 + n;
  console.log(index12);
  console.log(n);
  if (index12 > a.length) { 
      index12 = a.length;
      alert("This is the last image in this gallery!");
  }
  else if (index12 < 1) {
    index12=1;
    alert("This is the first image in this gallery!");
  } 
  else if (n = 1) {
      document.getElementById('img12').src="pic12.jpg";
  }
  document.getElementById('img12').src = a[index12-1].getAttribute("src");
}    
  
