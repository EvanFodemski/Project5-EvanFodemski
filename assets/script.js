
// Sets date and week day at top
getTime = () => {
  var today = moment().format('dddd MMMM, DD hh:mm:ss')
  $('#currentTimeDay').text(today);
}
//sets to refresh to time every second
setInterval(getTime, 1000)
var timeNow = moment().hours()
console.log(timeNow)


//Adds color change classes for past, present and future
var timeblocks = $(".time-block")
for(var i = 0; i < timeblocks.length; i++){
 console.log($(timeblocks[i]).attr('id').split("hour-")[1])
 var ids = $(timeblocks[i]).attr('id').split("hour-")[1];
 if(ids < timeNow){
 $(timeblocks[i]).addClass("past")
}
if(ids == timeNow){
  $(timeblocks[i]).addClass("present")
}
if(ids > timeNow){
  $(timeblocks[i]).addClass("future")
}
}




//Global variables set for localStorage function
var typeText;
var typeTime;



//Saves text and text location to local storage
$(".saveBtn").click(function(){
  typeText = $(this).siblings(".description").val();
  typeTime = $(this).siblings(".hour").text()
  console.log (typeText);
  console.log(typeTime);
localStorage.setItem(typeTime, JSON.stringify(typeText));
console.log(localStorage);
})

//Gets description from locatStorage and sets it to the correct hour.
$("#hour-9").children([1]).val(JSON.parse(localStorage.getItem("9AM")));
$("#hour-10").children([1]).val(JSON.parse(localStorage.getItem("10AM")));
$("#hour-11").children([1]).val(JSON.parse(localStorage.getItem("11AM")));
$("#hour-12").children([1]).val(JSON.parse(localStorage.getItem("12AM")));
$("#hour-13").children([1]).val(JSON.parse(localStorage.getItem("1PM")));
$("#hour-14").children([1]).val(JSON.parse(localStorage.getItem("2PM")));
$("#hour-15").children([1]).val(JSON.parse(localStorage.getItem("3PM")));
$("#hour-16").children([1]).val(JSON.parse(localStorage.getItem("4PM")));
$("#hour-17").children([1]).val(JSON.parse(localStorage.getItem("5PM")));




//Initial attempt at color change but discovered a way to do it without this much code.
// var timeBlock9 = $("#hour-9")
// var timeBlock10 = $("#hour-10")
// console.log(timeBlock9)

// if(9 < timeNow){
//   timeBlock9.addClass("past")
// }
// if(9 === timeNow){
//   timeBlock9.addClass("present")
// }
// if(9 > timeNow){
//   timeBlock9.addClass("future")
// }
// if(10 < timeNow){
//   timeBlock10.addClass("past")
// }
// if(10 === timeNow){
//   timeBlock10.addClass("present")
// }
// if(10 > timeNow){
//   timeBlock10.addClass("future")
// }





