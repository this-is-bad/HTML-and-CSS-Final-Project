function closeNav() {
        document.getElementById("mySidenav").style.width = "0px";
        displayDiv();
}

function displayDiv() {

    var width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
    if (width < 540) {
        document.getElementById("hiddenMain").style.display = "inline-block";
        document.getElementById("hiddenMain").style.visibility = "hidden";
        document.getElementById("hiddenMain").style.paddingRight = "205px";
        document.getElementById("hiddenMain").style.paddingBottom = "15px";
        // document.getElementById("hiddenMain").style.paddingRight = "161px";  // at font 1.5em
        
    } else {
        document.getElementById("hiddenMain").style.display = "none";
        document.getElementById("hiddenMain").style.padding = "5px";
    }
}

function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
}

function showSection(id) {
    var fruits = ["grapefruitSection", "lemonSection", "limeSection", "orangeSection"];
    testVal = id
    for (i = 0; i < fruits.length; ++i) {
        if (id == fruits[i]) {
            document.getElementById(id).style.display = "inline-block";
        } else {
            document.getElementById(fruits[i]).style.display = "none";
        }
    }
}