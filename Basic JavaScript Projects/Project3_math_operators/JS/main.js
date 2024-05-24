
//Start of Addition function
function myFirstMath_1() { 
var Addition = 8+3;
document.getElementById("Math").innerHTML= "8+3= " + Addition;
}

//Start of Subtraction function
function myFirstMath_2() {
  var Subtraction = 8-3;
  document.getElementById("Math").innerHTML= "8-3= " + Subtraction;
  }

  //Start of Multiplication function
function myFirstMath_3() {
  var Multiplication = 8*3;
  document.getElementById("Math").innerHTML= "8*3= " + Multiplication;
  }

  //Start of Devision function
function myFirstMath_4() {
  var Devision = 8/3;
  document.getElementById("Math").innerHTML= "8/3= " + Devision;
  }

  //Start of Increment function
function myFirstMath_5() {
  var Increment = 8;
  Increment++;
  document.getElementById("Math").innerHTML= "Increment of 8 is: " + Increment;
  }

  //Start of Decrement function
function myFirstMath_6() {
  var Decrement = 8;
  Decrement--;
  document.getElementById("Math").innerHTML= "Decrement of 8 is: " + Decrement;
  }

  //Start of Random number generating function
function myFirstMath_7() {
  window.alert(Math.random()*55);
  }

