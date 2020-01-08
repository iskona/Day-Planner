// Variables
let arr = [9, 10, 11, 12, 1, 2, 3, 4, 5];
let todayIs = moment().format('dddd, MMMM Do YYYY, H:mm a');
currentHour = parseInt(moment().format('H'));
console.log(typeof(currentHour));

let container = $(".container");

let userInput = "";

// Functions
localStorage.clear();

function renderHours() {
    let row;
    let id = 9;

    for (let i = 0; i < arr.length; i++) {
        row = $("<div>").addClass("input-group mb-3 input-group-lg row").attr("id", id);
        let hourDiv = $("<div>").addClass("input-group-prepend");
        let hourSpan = $("<span>").addClass("input-group-text").text(arr[i] + "").attr("id", "id");
        hourDiv.append(hourSpan);
        let input = $("<input>").addClass("form-control user-input").attr("type", "text").attr("aria-label", "Put some notes");
        let saveDiv = $("<div>").addClass("input-group-append");
        let button = $("<button>").addClass("btn btn-info saveBtn");
        button.attr("type", "button").attr("id", "button-addon2").text("Save");
        saveDiv.append(button);
        row.append(hourDiv, input, saveDiv);
        container.append(row);
        id++;
        console.log("Row: ", row);
    }
};

$(document).ready(function () {

    $("#currentDay").text(todayIs).css("color", "#ff6961");

    renderHours();

    $(".row").each(function (i, el) {

        let hourId = parseInt($(this).attr("id"));
        console.log("ID: ", id);
        
        if (hourId < currentHour) {
            $(this).children(".user-input").addClass("past");
        } else if (hourId === currentHour) {
            $(this).children(".user-input").addClass("present");
        } else {
            $(this).children(".user-input").addClass("future");
        }
        console.log($(this).children(".user-input"));
    });

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        userInput = $(".user-input").val();
        localStorage.setItem("note", userInput);
        console.log((userInput));
    })

});
