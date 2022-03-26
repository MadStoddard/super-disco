var containerDiv = document.querySelector(".container");
var descriptionEl = document.createElement("input");
var currentDayEl = document.querySelector("#currentDay");
currentDayEl.textContent = moment().format("dddd MMMM Do");

// var auditTask = function(descriptionEl) {
//     var date = $(descriptionEl).find("span").text().trim();
//     var time = moment(date, "L").set("hour", 17);

//     if(moment().isAfter(time)) {
//         $(descriptionEl).addClass("past");
//     } else if (Math.abs(moment().diff(time, "hours")) <= 1) {
//         (descriptionEl).addClass("future")
//     }
// };

var hourArray = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
]

var basicTime = [
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17
]

for (i = 0; i < hourArray.length; i++) {
    // render an instance of the time-block
    var timeBlockDiv = document.createElement("div")
    var hourH3 = document.createElement("h3");
    var descriptionEl = document.createElement("input");
    var saveBtn = document.createElement("button");

    timeBlockDiv.classList = "time-block row";
    hourH3.classList.add("hour");
    hourH3.textContent = hourArray[i]

    if (basicTime[i] == moment().format("H")) {
        descriptionEl.classList = "description present";
    } else if (basicTime[i] < moment().format("H")) {
        descriptionEl.classList = "description past";
    } else {
        descriptionEl.classList = "description future";
    }

    descriptionEl.setAttribute("type","text");

    if(localStorage.getItem(hourArray[i])) {
        descriptionEl.value = localStorage.getItem(hourArray[i]);
    } else {
        descriptionEl.value = "";
    }



    saveBtn.classList = "saveBtn";
    saveBtn.textContent = "Save";
    saveBtn.setAttribute("data-time", basicTime[i])
    saveBtn.addEventListener("click", saveClick)

    containerDiv.append(timeBlockDiv);
    timeBlockDiv.append(hourH3);
    timeBlockDiv.append(descriptionEl);
    timeBlockDiv.append(saveBtn);
};

function saveClick (event) {
    // localStorage.setItem(descriptionEl, descriptionEl.value);

    // get the value of the input text associated with the button that was clicked
    var textToSave = event.target.previousElementSibling.value;

    // get the time represented by the button that was clicked
    var timeKey = event.target.previousElementSibling.previousElementSibling.textContent;
    // var timeKey = event.target.getAttribute("data-time");

    // save the text value to localstorage using the time as key
    localStorage.setItem(timeKey, textToSave)
    
};




   


    // <div class="time-block row">
    //     <h3 class="hour">9AM</h3>
    //     <input class="description" type="text"/>
    //     <button class="saveBtn">Save</button>
    //  </div>