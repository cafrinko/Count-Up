$(document).ready(function() {
  $("form#inputNum").submit(function(event) {
    event.preventDefault();


    if (isNaN($("input#num1").val()) === true || isNaN($("input#num2").val()) === true){
      alert("Enter something, preferably a number, ok?");
    } else {

      var countTo = parseInt($("input#num1").val());
      var countBy = parseInt($("input#num2").val());


       if (countTo < 0) {
          alert("Enter a positive number?");

      } else if (countBy > countTo) {
        alert("Please enter a large number first and a smaller number second.")
      } else {
        for (var index = countBy; index <= countTo; index += countBy)
        $("#totals").append(index + "  ");
        $(".output").show();
      }
  }
  });
});


// } else if (countTo.length === 0 || countBy.length === 0) {
//     alert("Enter something, preferably a number, ok?");
// } else if (countTo === NaN || countBy === NaN) {
//   alert("Enter something, preferably a number, ok?");

//
//     } else if (!countTo < 0 || !countBy < 0) {


//    	Math.abs(countTo, countBy); {
//
// if (countTo.length === 0 || countBy.length === 0) {
//   alert("Enter something, preferably a number, ok?");
// } else if (typeof countTo === 'string' || typeof countBy === 'string') {
//   alert("Enter something, preferably a number, ok?");
//
// if (countBy > countTo) {
//   alert("Enter a larger number 1st and a smaller number 2nd");
// } else {
