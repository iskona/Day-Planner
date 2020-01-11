// Variables
let arr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let todayIs = moment().format('dddd, MMMM Do YYYY, H:mm a');
let currentHour = parseInt(moment().format('H'));
let container = $(".container");

// Functions

function renderHours() {

    let row;
    let id = 9;

    for (let i = 0; i < arr.length; i++) {
        row = $("<div>").addClass("input-group mb-3 input-group-lg row").attr("id", id);
        let hourDiv = $("<div>").addClass("input-group-prepend");
        let hourSpan = $("<span>").addClass("input-group-text").text(arr[i] + "");
        hourDiv.append(hourSpan);
        let input = $("<input>").addClass("form-control user-input").attr("type", "text").attr("aria-label", "Put some notes");
        let saveDiv = $("<div>").addClass("input-group-append");
        let button = $("<button>").addClass("btn btn-info saveBtn");
        button.attr("type", "button").attr("id", "button-addon2").text("Save").attr("data-index", arr[i]);
        saveDiv.append(button);
        row.append(hourDiv, input, saveDiv);
        container.append(row);
        id++;
        // console.log("Row: ", row);
    }
};

// When page is loaded
$(document).ready(function () {

    renderHours();

    $("#currentDay").text(todayIs).css("color", "#ff6961");

    $(".row").each(function (i, el) {

        let hourId = parseInt($(this).attr("id"));
        // console.log("ID: ", id);

        if (hourId < currentHour) {
            $(this).children(".user-input").addClass("past");
        } else if (hourId === currentHour) {
            $(this).children(".user-input").addClass("present");
            // $(this).children(".user-input").value("Current hour");
        } else {
            $(this).children(".user-input").addClass("future");
        }
        // console.log($(this).children(".user-input"));

    });

    $(".saveBtn").on("click", function (event) {

        let key = $(this).parent().parent().attr("id");
        console.log(key);

        let value = $(this).parent().parent().find(".user-input").val().trim();
        console.log(value);

        localStorage.setItem(key, value);
    });


    let elem = 9;
    $(".row").children(".user-input").each(function () {

        $(this).val(localStorage.getItem(elem));
        elem++;
    });
});
