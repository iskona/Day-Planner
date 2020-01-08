let todayDate = moment().format('dddd, MMMM Do YYYY');
console.log(todayDate);
$("#currentDay").text(todayDate).css("color", "red");
let userInput;

$(document).ready(function () {
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        userInput;
        let targetElem = $(this).val().trim();
        console.log(targetElem);
        
    })
})