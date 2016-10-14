var trainButton = $('.train')
var display = $('#display')
var base = 0
var clickLine = $("<p></p>")
var statusLine = $("<p></p>")
var goal = 5
// var goal = $('.goal').val()

trainButton.click(function() {
  var counter = (base += 1)
  showStatustext(counter)
  appendCountertext(counter)
})

function appendCountertext(counter) {
  var countertext = clickLine.text("You have clicked " + counter + " times.")
  display.append(countertext)
  console.log("You have clicked " + counter + " times.")
}

function showStatustext(counter) {
  if(counter >= goal) {
    showWin(counter)
  }
  else {
    showFail(counter)
  }
}

function showWin(counter) {
  var wintext = statusLine.text("THIS IS MY FINAL FORM")
  display.append(wintext)
}

function showFail(counter) {
  var failtext = statusLine.text("This isn't even my final form.")
  display.append(failtext)
}
