var trainButton = $('.train')
var display = $('#display')
var base = 0
var clickLine = $("<p></p>")
var statusLine = $("<p></p>")

trainButton.click(function() {
  var goal = $('.goal').val()
  var counter = (base += 1)
  showStatustext(counter, goal)
  appendCountertext(counter)
})

function appendCountertext(counter) {
  var countertext = clickLine.text("You have clicked " + counter + " times.")
  display.append(countertext)
  console.log("You have clicked " + counter + " times.")
}

function showStatustext(counter, goal) {
  if(counter >= goal) {
    showWin(counter, goal)
  }
  else {
    showFail(counter, goal)
  }
}

function showWin(counter, goal) {
  var finalForm = $('.final').val()
  var wintext = statusLine.text("You have reached your final form! You are now " + finalForm +"!")
  display.append(wintext)
}

function showFail(counter, goal) {
  var currentForm = $('.current').val()
  var failtext = statusLine.text("You are still " + currentForm + ". Keep training!")
  display.append(failtext)
}
