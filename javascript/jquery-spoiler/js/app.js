// Prevent spoilerphobes from seeing spoilers
// Solution: Hide spoilers and reveal them through user interaction
"use strict";

/**
 * 1. Hide spoiler
 * 2. Add a button
 * 3. When button pressed
 *    3.1 Show spoiler
 *    3.2 Get rid of button
**/

$(".spoiler span").hide();
$(".spoiler").append("<button>Reveal Spoiler!</button>");
$("button").click(function() {
    $(this).prev().show(); // Shows spoiler next to the button clicked
    // $(".spoiler span").show();
    $(this).remove();
});