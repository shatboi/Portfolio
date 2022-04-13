
function setZoom(){
     if(window.screen.width < 1440) {	
        document.getElementById("html").style.zoom = "76%";
    } else if (window.screen.width < 1920){
        document.getElementById("html").style.zoom = "80%";
    } else {
        document.getElementById("html").style.zoom = "102%";
    }
}
