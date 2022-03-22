var containerDiv = document.querySelector(".container");

var hourArray = [
    "9AM",
    "10AM",
    "11AM",
    "12PM"
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
    descriptionEl.classList = "description";
    descriptionEl.setAttribute("type","text");
    saveBtn.classList = "saveBtn";
    saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", saveClick)

    containerDiv.append(timeBlockDiv);
    timeBlockDiv.append(hourH3);
    timeBlockDiv.append(descriptionEl);
    timeBlockDiv.append(saveBtn);
}

function saveClick () {
    alert("Hello")
}

   


    // <div class="time-block row">
    //     <h3 class="hour">9AM</h3>
    //     <input class="description" type="text"/>
    //     <button class="saveBtn">Save</button>
    //  </div>