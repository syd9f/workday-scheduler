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
  
  // select save button for each element
  var saveButton = $('#hour-9').children('.saveButton');

  saveButton.addEventListener('click', saveButton);
  // select user input
  var contentNine = $('.nineAm-text').textValue;
  var contentTen = $('.tenAm-text').textValue;
  var contentEleven = $('.elevenAm-text').textValue;
  var contentTwelve = $('.twelvePm-text').textValue;
  var contentOne = $('.onePm-text').textValue;
  var contentTwo = $('.twoPm-text').textValue;
  var contentThree = $('.threePm-text').textValue;
  var contentFour = $('.fourPm-text').textValue;
  var contentFive = $('.fivePm-text').textValue;

  // save to local storage
  localStorage.setItem("nineAm", contentNine);
  localStorage.setItem("tenAm", contentTen);
  localStorage.setItem("elevenAm", contentEleven);
  localStorage.setItem("twelvePm", contentTwelve);
  localStorage.setItem("onePm", contentOne);
  localStorage.setItem("twoPm", contentTwo);
  localStorage.setItem("threePm", contentThree);
  localStorage.setItem("fourPm", contentFour);
  localStorage.setItem("fivePm", contentFive);

  // Set color of text boxes
  // 9 AM
  var nineAm = $('#hour-9');
  var selectNine = dayjs().hour(9);
  if (dayjs().hour() == selectNine){
    nineAm.removeClass('future');
    nineAm.addClass('present');
  }
  // 10 AM
  var tenAm = $('#hour-10');
  var selectTen = dayjs().hour(10);
  if (dayjs().hour() == selectTen){
    tenAm.removeClass('future');
    tenAm.addClass('present');
    // set 9AM to past
    nineAm.removeClass('present');
    nineAm.addClass('past');
  }
  // 11 AM
  var elevenAm = $('#hour-11');
  var selectEleven = dayjs().hour(11);
  if (dayjs().hour() == selectEleven){
    elevenAm.removeClass('future');
    elevenAm.addClass('present');
    // set 10AM to past
    tenAm.removeClass('present');
    tenAm.addClass('past');
  }
  // 12 PM
  var twelvePm = $('#hour-12');
  var selectTwelve = dayjs().hour(12);
  if (dayjs().hour() == selectTwelve){
    twelvePm.removeClass('future');
    twelvePm.addClass('present');
    // set 11AM to past
    elevenAm.removeClass('present');
    elevenAm.addClass('past');
  }
  // 1 PM
  var onePm = $('#hour-1');
  var selectOne = dayjs().hour(13);
  if (dayjs().hour() == selectOne){
    onePm.removeClass('future');
    onePm.addClass('present');
    // set 12PM to past
    twelvePm.removeClass('present');
    twelvePm.addClass('past');
  }
  // 2 PM
  var twoPm = $('#hour-2');
  var selectTwo = dayjs().hour(14);
  if (dayjs().hour() == selectTwo){
    twoPm.removeClass('future');
    twoPm.addClass('present');
    // set 1PM to past
    onePm.removeClass('present');
    onePm.addClass('past');
  }
  // 3 PM
  var threePm = $('#hour-3');
  var selectThree = dayjs().hour(15);
  if (dayjs().hour() == selectThree){
    threePm.removeClass('future');
    threePm.addClass('present');
    // set 2PM to past
    twoPm.removeClass('present');
    twoPm.addClass('past');
  }
  // 4 PM
  var fourPm = $('#hour-4');
  var selectFour = dayjs().hour(16);
  if (dayjs().hour() == selectFour){
    fourPm.removeClass('future');
    fourPm.addClass('present');
    // set 3PM to past
    threePm.removeClass('present');
    threePm.addClass('past');
  }
  // 5 PM
  var fivePm = $('#hour-5');
  var selectFive = dayjs().hour(17);
  if (dayjs().hour() == selectFive){
    fivePm.removeClass('future');
    fivePm.addClass('present');
    // set 4PM to past
    fourPm.removeClass('present');
    fourPm.addClass('past');
  }

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
