// Problem: No user interaction causes no change to application
// Solution: When user interacts cause changes appropriately
var colour = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $("canvas")[0].getContext("2d");
var lastEvent;
var mouseDown = false;

// When clicking on control list items
$(".controls").on("click", "li", function() {
    // Deselect sibling elements
    $(this).siblings().removeClass("selected");

    // Select clicked element
    $(this).addClass("selected");

    // Cache current colour
    colour = $(this).css("background-color");
});

// When new colour is pressed
$("#revealColorSelect").click(function() {
    // Show colour select or hide the colour select
    changeColour();
    $("#colorSelect").toggle();
});

// Update the new colour span
function changeColour() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")")
}

// When colour sliders change
$("input[type=range]").change(changeColour);

// When add colour is pressed
$("#addNewColor").click(function() {
    // Append the colour to the controls ul
    var $newColour = $("<li></li>");
    $newColour.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColour);

    // Select the new colour
    $newColour.click();
});

// On mouse events on the canvas
$canvas.mousedown(function(e) {
    lastEvent = e;
    mouseDown = true;
}).mousemove(function(e) {
    // Draw lines
    if (mouseDown) {
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = colour;
        context.closePath();
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
    $canvas.mouseup();
});
