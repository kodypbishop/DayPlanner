window.onload = function () {
    let today = moment().format("MMM Do YY"); 
    if (localStorage.getItem(today) !== null) {
        for (let i = 0; i <= 8; i++) {
            let hour = i + 9;
            console.log(today)
            $("#hour" + hour).val(JSON.parse(localStorage.getItem(today))[i])
        }
    }
    let time = moment().format('HH');
    function currentHour() {
        // let time = 4;
        if (time < 18 && time > 8) {
            $("#hour" + time).attr("class", "present form-control col-sm-10")
        }
        console.log(time)
        for (let i = 9; i < 18; i++) {
            if (i < time) {
                $("#hour" + i).attr("class", "past form-control col-sm-10")
            }
        };
        for (let i = 17; i > 8; i--) {
            if (i > time) {
                $("#hour" + i).attr("class", "future form-control col-sm-10");
            }
        };
    }
    currentHour();

    let interval = setInterval(function () {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        let hour = moment().format('HH');
        if (hour != time){
            time = hour
        currentHour();
        }
    }, 1000);

    $("button").on("click", function () {
        let planner = [];
        for (let i = 9; i <= 17; i++) {
            planner.push($("#hour" + i).val());
            console.log(planner);
        }
        localStorage.setItem(moment().format("MMM Do YY") , JSON.stringify(planner))
    })
}