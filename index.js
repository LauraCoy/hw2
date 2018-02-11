// Your code goes here:
// let clickThumbnail = function(event) {
//   console.log(event)
// }
// jQuery("#thumbnails img").on("click", clickThumbnail)

// same thing with this
// let chooseThumbnail = function() {
//   let bigPic = jQuery(this)
//   console.log("Got a click event:", event)
//   let srcValue = bigPic.attr("src")
//   console.log(srcValue)
// jQuery("#main-image").attr("src", bigPic.attr("src"))
// }

// Same thing with event.target
let chooseThumbnail = function() {
  let bigPic = jQuery(event.target)
  console.log("Got a click event:", event)
  let srcValue = bigPic.attr("src")
  console.log(srcValue)
jQuery("#main-image").attr("src", bigPic.attr("src"))
}

jQuery("#thumbnails img").on("click", chooseThumbnail)
