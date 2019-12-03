window.onload = function () {
    let interval = setInterval(function () {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        let hour = moment().format('HH');
        $("#hour" + hour).attr("class", "present form-control col-sm-10")
            for (i = 9; i < hour || i > 18; i++) {
                $("#hour" + i).attr("class", "past form-control col-sm-10")
            }
            for (i = 17; i > hour || i < 8; i--) {
                $("#hour" + i).attr("class", "future form-control col-sm-10")
            }
        

    }, 1000);

}