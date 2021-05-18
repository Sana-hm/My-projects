const eyes = document.querySelectorAll(".mardomak")
document.onmousemove = function(){
    var x = Event.clientX * 100/window.innerWidth + "%"

    var y = Event.clientY * 100/window.innerHeight + "%"
    eyes.forEach(eye => {
        eye.style.left = x;
        eye.style.top = y;
        eye.style.transform = "translate(-"+x+", -"+y+")"
    }
}