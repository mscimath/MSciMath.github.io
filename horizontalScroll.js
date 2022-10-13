var windowWidth = window.innerWidth;
var horizontalLength = document.querySelector(".element-container").scrollWidth;
var distanceFromTop = document.querySelector(".horizontal-section").offsetTop;
var scrollDistance = distanceFromTop + horizontalLength - windowWidth;

console.log(scrollDistance);

/*Set the Height of the Horizontal Section*/
document.querySelector(".horizontal-section").style.height = horizontalLength + "px";

window.onscroll = function() {
    var scrollTop = window.pageYOffset;

    if (scrollTop >= distanceFromTop && scrollTop <= scrollDistance) {
        document.querySelector(".element-container").style.transform = 
        'translateX(-'+(scrollTop - distanceFromTop) + "px)";
    }

}