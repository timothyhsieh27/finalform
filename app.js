var trainButton = $('.train')
var display = $('#display')
var base = 0
var paragraph = $("<p></p>")

trainButton.click(function() {
  var counter = base += 1
  var countertext = paragraph.text("You have clicked " + counter + " times.")
  display.append(countertext)
  console.log("You have clicked " + counter + " times.")
})
