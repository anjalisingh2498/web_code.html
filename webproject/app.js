// Initialize variables
var alarms = [];

// Get DOM elements
var timeInput = document.getElementById("time");
var setAlarmButton = document.getElementById("set-alarm");
var alarmsList = document.getElementById("alarms");

// Function to add alarm
function addAlarm() {
    var time = timeInput.value;
    var alarm = {
        time: time
    };
    alarms.push(alarm);
    renderAlarms();
}

// Function to remove alarm
function removeAlarm(index) {
    alarms.splice(index, 1);
    renderAlarms();
}

// Function to render alarms
function renderAlarms() {
    alarmsList.innerHTML = "";
    alarmsList.innerHTML += "<h2>Alarms:</h2>";
    alarmsList.innerHTML += "<ul>";
    for (var i = 0; i < alarms.length; i++) {
        var alarm = alarms[i];
        alarmsList.innerHTML += "<li>" + alarm.time + "<span class='remove-alarm' onclick='removeAlarm(" + i + ")'>X</span></li>";
    }
    alarmsList.innerHTML += "</ul>";
}

// Function to check and trigger alarms
function checkAlarms() {
    var currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    for (var i = 0; i < alarms.length; i++) {
        var alarm = alarms[i];
        if (alarm.time == currentTime) {
            alert("Alarm!");
            removeAlarm(i);
        }
    }
}

// Add event listener to set alarm button
