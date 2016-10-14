var trainButton = $('.train')
var display = $('#display')
var base = 0
var clickLine = $("<p></p>")
var statusLine = $("<p></p>")

trainButton.click(function() {
  appendCountertext()
  showStatustext()
})

function appendCountertext() {

  var counter = (base += 1)
  var countertext = clickLine.text("You have clicked " + counter + " times.")
  display.append(countertext)
  console.log("You have clicked " + counter + " times.")

}

function showStatustext() {
  var statustext = statusLine.text("You have not yet reached your final form.")
  display.append(statustext)
}
