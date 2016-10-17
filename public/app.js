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

  var finalForm = $('.final').val()
  var currentForm = $('.current').val()
  // create(currentForm, finalForm, counter)
  update(currentForm, finalForm, counter)
})

// function retrieve() {
//   $.ajax({
//   method: 'GET',
//   url: '/api/trainee/',
//   data: {
//     currentform: currentForm,
//     finalform: finalForm,
//     trainnumber: counter
//   },
//   dataType: 'json'
//   })
// }

function create(currentForm, finalForm, counter) {
  $.ajax({
  method: 'POST',
  url: '/api/trainee/',
  data: {
    currentform: currentForm,
    finalform: finalForm,
    trainnumber: counter
  },
  dataType: 'json'
  })
}

function update(currentForm, finalForm, counter) {
  $.ajax({
  method: 'PUT',
  url: '/api/trainee/' + variableidnumbafromget + '',
  data: {
    currentform: currentForm,
    finalform: finalForm,
    trainnumber: counter
  },
  dataType: 'json'
}).done(function(){
  console.log("it's working!!");
}).fail(function(){
  console.log("faiure");
});
}
//
// $.ajax({
//     type: 'POST', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
//     dataType: 'json', // Set datatype - affects Accept header
//     url: "http://example.com/people/1", // A valid URL
//     headers: {"X-HTTP-Method-Override": "PUT"}, // X-HTTP-Method-Override set to PUT.
    // data: '{"name": "Dave"}' // Some data e.g. Valid JSON as a string
// });


function appendCountertext(counter) {
  var countertext = clickLine.text("You trained " + counter + " times.")
  display.append(countertext)
  console.log("You clicked " + counter + " times.")
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
