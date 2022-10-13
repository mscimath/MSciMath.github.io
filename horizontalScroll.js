var windowWidth = window.innerWidth;
var horizontalLength = document.querySelector(".element-container").scrollWidth;
var distanceFromTop = document.querySelector(".horizontal-section").offsetTop;
var scrollDistance = distanceFromTop + horizontalLength - windowWidth;
/*For Small devices*/
var distanceFromTopSmall = document.querySelector(".horizontal-section").offsetTop -100;

/*Set the Height of the Horizontal Section*/
document.querySelector(".horizontal-section").style.height = horizontalLength + "px";

window.onscroll = function() {
    var scrollTop = window.pageYOffset;
    
    /*Determine if on Small Device*/
    if (windowWidth < 400) {
        
        if ( (scrollTop-100)  >= (distanceFromTop) && scrollTop <= scrollDistance) {
            document.querySelector(".element-container").style.transform = 
            'translateX(-'+(scrollTop - distanceFromTop) + "px)";
        }

    } else if (scrollTop >= distanceFromTop && scrollTop <= scrollDistance ) {
        document.querySelector(".element-container").style.transform = 
        'translateX(-'+(scrollTop - distanceFromTop) + "px)";
    };

}