function toggleContactDisplay() {
    var elem = document.getElementsByClassName("textContactInfo").item(0);

    if (elem.style.display == "none" || elem.style.display == "")
        elem.style.display = "inline";
    else
        elem.style.display = "none";
}


function toggleSpotifyWidth() {
    var frame = document.getElementsByClassName("iSpotify").item(0);
    var control = document.getElementsByClassName("contArrows").item(0);

    if (frame.style.width == "0%") {
        switch(true) {
            case window.matchMedia("(min-width: 3840px)").matches:
                frame.style.width = "15%";
                control.style.right = "15%";
                break;
            case window.matchMedia("(min-width: 2560px)").matches:
                frame.style.width = "20%";
                control.style.right = "20%";
                break;
            case window.matchMedia("(min-width: 1920px)").matches:
                frame.style.width = "25%";
                control.style.right = "25%";
                break;
            case window.matchMedia("(min-width: 1600px)").matches:
                frame.style.width = "30%";
                control.style.right = "30%";
                break;
            case window.matchMedia("(min-width: 1024px)").matches:
                frame.style.width = "35%";
                control.style.right = "35%";
                break;
            case window.matchMedia("(min-width: 800px)").matches:
                frame.style.width = "40%";
                control.style.right = "40%";
                break;        
            case window.matchMedia("(min-width: 600px)").matches:
                frame.style.width = "45%";
                control.style.right = "45%";
                break;
            case window.matchMedia("(min-width: 1px)").matches:
                frame.style.width = "50%";
                control.style.right = "50%";
                break;            
        }

        document.getElementsByClassName("lineW1").item(0).style.transform = "rotate(45deg)";
        document.getElementsByClassName("lineW2").item(0).style.transform = "rotate(-45deg)";
    }
    else {
        frame.style.width = "0%";
        control.style.right = "0%";
        document.getElementsByClassName("lineW1").item(0).style.transform = "rotate(-45deg)";
        document.getElementsByClassName("lineW2").item(0).style.transform = "rotate(45deg)";
    }
}


function toggleSpotifyHeight() {
    var frame = document.getElementsByClassName("iSpotify").item(0);

    if (frame.style.height == "80px" || frame.style.height == "") {
        frame.style.height = "100%";
        document.getElementsByClassName("lineH1").item(0).style.transform = "rotate(-45deg)";
        document.getElementsByClassName("lineH2").item(0).style.transform = "rotate(45deg)";
    }
    else {
        frame.style.height = "80px";
        document.getElementsByClassName("lineH1").item(0).style.transform = "rotate(45deg)";
        document.getElementsByClassName("lineH2").item(0).style.transform = "rotate(-45deg)";
    }
}