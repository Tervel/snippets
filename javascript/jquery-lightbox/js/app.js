// Problem: User when clicking on image goes to a dead end
// Solution: Create an overlay with the large image - Lightbox

// 1. Capture the click event on a link to an image
//  1.1 Show the overlay
//  1.2 Update overlay with the image linked in the link
//  1.3 Get child's alt attribute and set caption
// 2. Add overlay
//  2.1 An image
//  2.2 A caption
// 3. When overlay is clicked
//  3.1 Hide the overlay

var $overlay = $('<div id="overlay"></div>'); // jQuery object
var $image = $("<img>");
var $caption = $("<p></p>");

// Add image to overlay
$overlay.append($image); // appended to overlay

// Add caption to overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay) // appended to body

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    // Update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    // Show the overlay
    $overlay.show();

    // Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

// When overlay is clicked
$overlay.click(function() {
    $(this).hide();
});


