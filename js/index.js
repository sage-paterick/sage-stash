function toggleContactDisplay() {
    var elem = document.getElementsByClassName("textContactInfo").item(0);
    var display = (window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle).display;
    if (display == "none")
        elem.style.display = "inline";
    else
        elem.style.display = "none";       
}

function toggleSpotifyDisplay() {
    var elem1 = document.getElementsByClassName("iSpotify").item(0);
    var elem2 = document.getElementsByClassName("contListCity").item(0);
    var elem3 = document.getElementsByClassName("imgToggleSpotify").item(0);
    var display = (window.getComputedStyle ? getComputedStyle(elem2, null) : elem1.currentStyle).display;
    if (display == "none") {
        elem1.style.height = "100%";
        elem2.style.display = "list-item";
        elem3.setAttribute("src", "../images/spotify_green.png")
    }
    else {
        elem1.style.height = "80px";
        elem2.style.display = "none";
        elem3.setAttribute("src", "../images/spotify_black.png")
    }
}