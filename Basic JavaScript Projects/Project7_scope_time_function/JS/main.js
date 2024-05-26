/* Assignment Submission # 7 - WORKING VERSION*/

var Day = new Date().getDay(); //Global variable showing the current day

function get_Date() {
  var Reply; // Local variable for iteration
    if (Day = 0) {
      Reply = "Sunday";
    }
    else if (Day = 1) {
      Reply = "Monday";
    }
    else if (Day = 2) {
      Reply = "Tuesday";
    }
    else if (Day = 3) {
      Reply = "Wednesday";
    }
    else if (Day = 4) {
      Reply = "Thursday";
    }
    else if (Day = 5) {
      Reply = "Friday";
    }
    else {
      Reply = "Saturday";
    }
    document.getElementById("Result").innerHTML = "Today is " + Reply + "!"; //Print of result
  }
 /* End of Assignment Submission # 7 */


 /* Assignment Submission # 7 - FAILED VERSION
 function get_Date() {
  var Day = new Date().getDay();
  var Reply;
    if (Day = 0) {
      Reply = "It is Sunday today!";
    }
    else if (Day = 1) {
      Reply = "It is Monday today!";
    }
    else if (Day = 2) {
      Reply = "It is Tuesday today!";
    }
    else if (Day = 3) {
      Reply = "It is Wednesday today!";
    }
    else if (Day = 4) {
      Reply = "It is Thursday today!";
    }
    else if (Day = 5) {
      Reply = "It is Friday today!";
    }
    else {
      Reply = "It is Saturday today!";
    }
    document.getElementById("Result").innerHTML = Reply;
  }
  End of Assignment Submission # 7 */


/* Assignment 40
function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
  }
}
 End of Assignment 40 
 */

/* -- Assignment 42
function Classic_Car() {
  CarColor = document.getElementById("CarColor").value;
  if (CarColor <= 1980) {
    cust = "Yes, we have it!";
  }
  else {
    cust = "Sorry, we don't have it available!";
  }
  document.getElementById("CarResult").innerHTML = cust;
}
End of Assignment 42
*/

/* -- Assignment 43
function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time < 18) {
    Reply = "It is morning time!";
  }
  else if (Time > 12 == Time < 18) {
    Reply = "It is the afternoon.";
  }
  else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}
*/