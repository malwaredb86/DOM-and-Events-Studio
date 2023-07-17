window.addEventListener("load", function () {
    let status = document.getElementById("flightStatus");
    let shuttleBG = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");
    let takeoff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let abort = document.getElementById("missionAbort")
    let ship = document.getElementById("rocket");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    takeoff.addEventListener("click", function (event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response === true) {
            status.innerHTML = "Shuttle in flight.";
            console.log("Shuttle in flight.");
            shuttleBG.style.backgroundColor = "blue";
            height.innerHTML = parseInt("10000");
            console.log(parseInt("10000"));
        }
    });

    landing.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        console.log("The shuttle has landed.");
        shuttleBG.style.backgroundColor = "green";
        height.innerHTML = parseInt("0");
        console.log(parseInt("0"));
    });

    abort.addEventListener("click", function () {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response === true) {
            status.innerHTML = "Mission aborted.";
            console.log("The shuttle has landed.");
            shuttleBG.style.backgroundColor = "green";
            height.innerHTML = parseInt("0");
            console.log(parseInt("0"));
        }
    });

    up.addEventListener("click", function () {
        ship.style.top = (parseInt(ship.style.top) - 10) + "px";
        height.innerHTML = parseInt(height.innerHTML) + 10000;
    });

    down.addEventListener("click", function () {
        ship.style.top = (parseInt(ship.style.top) + 10) + "px";
        height.innerHTML = parseInt(height.innerHTML) - 10000;
    });

    left.addEventListener("click", function () {
        ship.style.left = (parseInt(ship.style.left) - 10) + "px";
    });

    right.addEventListener("click", function () {
        ship.style.left = (parseInt(ship.style.left) + 10) + "px"
    });

});