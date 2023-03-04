// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // 

  // Set color of text boxes
  // 9 AM
  var nineAm = $('#hour-9');
  var selectNine = dayjs().hour(9).$H;
  if (dayjs().hour() == selectNine){
    nineAm.removeClass('future');
    nineAm.addClass('present');
  }
  // 10 AM
  var tenAm = $('#hour-10');
  var selectTen = dayjs().hour(10).$H;
  if (dayjs().hour() == selectTen){
    tenAm.removeClass('future');
    tenAm.addClass('present');
    // set 9AM to past
    nineAm.removeClass('present future');
    nineAm.addClass('past');
  }
  // 11 AM
  var elevenAm = $('#hour-11');
  var selectEleven = dayjs().hour(11).$H;
  if (dayjs().hour() == selectEleven){
    elevenAm.removeClass('future');
    elevenAm.addClass('present');
    // set 9AM to past
    nineAm.removeClass('present future');
    nineAm.addClass('past');
    // set 10AM to past
    tenAm.removeClass('present future');
    tenAm.addClass('past');
  }
  // 12 PM
  var twelvePm = $('#hour-12');
  var selectTwelve = dayjs().hour(12).$H;
  if (dayjs().hour() == selectTwelve){
    twelvePm.removeClass('future');
    twelvePm.addClass('present');
    // set 9AM to past
    nineAm.removeClass('present future');
    nineAm.addClass('past');
    // set 10AM to past
    tenAm.removeClass('present future');
    tenAm.addClass('past');
    // set 11AM to past
    elevenAm.removeClass('present future');
    elevenAm.addClass('past');
  }
  // 1 PM
  var onePm = $('#hour-1');
  var selectOne = dayjs().hour(13).$H;
  if (dayjs().hour() == selectOne){
    onePm.removeClass('future');
    onePm.addClass('present');
    // set 9AM to past
    nineAm.removeClass('present future');
    nineAm.addClass('past');
    // set 10AM to past
    tenAm.removeClass('present future');
    tenAm.addClass('past');
    // set 11AM to past
    elevenAm.removeClass('present future');
    elevenAm.addClass('past');
    // set 12PM to past
    twelvePm.removeClass('present future');
    twelvePm.addClass('past');
  }
  // 2 PM
  var twoPm = $('#hour-2');
  var selectTwo = dayjs().hour(14).$H;
  if (dayjs().hour() == selectTwo){
    twoPm.removeClass('future');
    twoPm.addClass('present');
    // set 9AM to past
    nineAm.removeClass('present future');
    nineAm.addClass('past');
    // set 10AM to past
    tenAm.removeClass('present future');
    tenAm.addClass('past');
    // set 11AM to past
    elevenAm.removeClass('present future');
    elevenAm.addClass('past');
    // set 12PM to past
    twelvePm.removeClass('present future');
    twelvePm.addClass('past');
    // set 1PM to past
    onePm.removeClass('present future');
    onePm.addClass('past');
  }
  // 3 PM
  var threePm = $('#hour-3');
  var selectThree = dayjs().hour(15).$H;
  if (dayjs().hour() == selectThree){
    threePm.removeClass('future');
    threePm.addClass('present');
    // set 9AM to past
    nineAm.removeClass('present future');
    nineAm.addClass('past');
    // set 10AM to past
    tenAm.removeClass('present future');
    tenAm.addClass('past');
    // set 11AM to past
    elevenAm.removeClass('present future');
    elevenAm.addClass('past');
    // set 12PM to past
    twelvePm.removeClass('present future');
    twelvePm.addClass('past');
    // set 1PM to past
    onePm.removeClass('present future');
    onePm.addClass('past');
    // set 2PM to past
    twoPm.removeClass('present future');
    twoPm.addClass('past');
  }
  // 4 PM
  var fourPm = $('#hour-4');
  var selectFour = dayjs().hour(16).$H;
  if (dayjs().hour() == selectFour){
    fourPm.removeClass('future');
    fourPm.addClass('present');
    // set 9AM to past
    nineAm.removeClass('present future');
    nineAm.addClass('past');
    // set 10AM to past
    tenAm.removeClass('present future');
    tenAm.addClass('past');
    // set 11AM to past
    elevenAm.removeClass('present future');
    elevenAm.addClass('past');
    // set 12PM to past
    twelvePm.removeClass('present future');
    twelvePm.addClass('past');
    // set 1PM to past
    onePm.removeClass('present future');
    onePm.addClass('past');
    // set 2PM to past
    twoPm.removeClass('present future');
    twoPm.addClass('past');
    // set 3PM to past
    threePm.removeClass('present future');
    threePm.addClass('past');
  }
  // 5 PM
  var fivePm = $('#hour-5');
  var selectFive = dayjs().hour(17).$H;
  if (dayjs().hour() == selectFive){
    fivePm.removeClass('future');
    fivePm.addClass('present');
    // set 9AM to past
    nineAm.removeClass('present future');
    nineAm.addClass('past');
    // set 10AM to past
    tenAm.removeClass('present future');
    tenAm.addClass('past');
    // set 11AM to past
    elevenAm.removeClass('present future');
    elevenAm.addClass('past');
    // set 12PM to past
    twelvePm.removeClass('present future');
    twelvePm.addClass('past');
    // set 1PM to past
    onePm.removeClass('present future');
    onePm.addClass('past');
    // set 2PM to past
    twoPm.removeClass('present future');
    twoPm.addClass('past');
    // set 3PM to past
    threePm.removeClass('present future');
    threePm.addClass('past');
    // set 4PM to past
    fourPm.removeClass('present future');
    fourPm.addClass('past');
  }
  // AFTER 5 PM


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
 
  // Selected page header (jQuery)
  var pageHeader = $('.display-3');
  // Declared variables to set to current date (Day.js)
  var currentDay = dayjs().format('dddd'); 
  var currentMonth = dayjs().format('MMMM');
  var currentDate = dayjs().date();
  var currentYear = dayjs().year();
  // Appended date to page header
  pageHeader.append('<h2>' + currentDay + ' ' + currentMonth + ' ' + currentDate + ', ' + currentYear + '</h2>');
});
