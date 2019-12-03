window.onload = function () {
    if (localStorage.getItem("planner") !== null) {
        for (let i = 0; i <= 8; i++) {
            let hour = i + 9;
            console.log(hour)
            $("#hour" + hour).val(JSON.parse(localStorage.planner)[i])
            console.log()
        }
    }
    let hour = moment().format('HH');
    $("#hour" + hour).attr("class", "present form-control col-sm-10")
    for (let i = 9; i < hour || i > 18; i++) {
        $("#hour" + i).attr("class", "past form-control col-sm-10")
    }
    for (let i = 17; i > hour || i < 8; i--) {
        $("#hour" + i).attr("class", "future form-control col-sm-10")
    }


    let interval = setInterval(function () {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);

    $("button").on("click", function () {
        let planner = [];
        for (let i = 9; i <= 17; i++) {
            planner.push($("#hour" + i).val());
            console.log(planner);
        }
        localStorage.setItem("planner", JSON.stringify(planner))
    })
}