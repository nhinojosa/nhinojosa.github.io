function countSenators() {
    const checkboxes = document.getElementsByName("senators");
    let checked = 0;
    for(let count = 0; count < checkboxes.length; count++) {
        if(checkboxes[count].checked) {
            checked++;
        }
    }

    let output = "<h1>Number in attendance: " + checked + "</h1>";
    document.getElementById("result").innerHTML = output;

    if(checked < 22) {
        document.getElementById("quorum").innerHTML = "<h1 style='color: red'> Number for quorum: " + (22-checked) + " (not met)</h1>";
    }
    else {
        document.getElementById("quorum").innerHTML = "<h1 style='color: green'> Number for quorum: " + (22-checked) + " (met)</h1>";
    }

}