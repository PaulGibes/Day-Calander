// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. Shorthand for $(document).ready(function () {})
$(function () {
  var hourSection = [
    $("#hour-1").attr("id"),
    $("#hour-2").attr("id"),
    $("#hour-3").attr("id"),
    $("#hour-4").attr("id"),
    $("#hour-5").attr("id"),
    $("#hour-6").attr("id"),
    $("#hour-7").attr("id"),
    $("#hour-8").attr("id"),
    $("#hour-9").attr("id"),
    $("#hour-10").attr("id"),
    $("#hour-11").attr("id"),
    $("#hour-12").attr("id"),
    $("#hour-13").attr("id"),
    $("#hour-14").attr("id"),
    $("#hour-15").attr("id"),
    $("#hour-16").attr("id"),
    $("#hour-17").attr("id"),
    $("#hour-18").attr("id"),
    $("#hour-19").attr("id"),
    $("#hour-20").attr("id"),
    $("#hour-21").attr("id"),
    $("#hour-22").attr("id"),
    $("#hour-23").attr("id"),
    $("#hour-24").attr("id"),
    // "#hour-1",
    // "#hour-2",
    // "#hour-3",
    // "#hour-4",
    // "#hour-5",
    // "#hour-6",
    // "#hour-7",
    // "#hour-8",
    // "#hour-9",
    // "#hour-10",
    // "#hour-11",
    // "#hour-12",
    // "#hour-13",
    // "#hour-14",
    // "#hour-15",
    // "#hour-16",
    // "#hour-17",
    // "#hour-18",
    // "#hour-19",
    // "#hour-20",
    // "#hour-21",
    // "#hour-22",
    // "#hour-23",
    // "#hour-24",
  ];
  var timeRow = [
    $("#hour-1"),
    $("#hour-2"),
    $("#hour-3"),
    $("#hour-4"),
    $("#hour-5"),
    $("#hour-6"),
    $("#hour-7"),
    $("#hour-8"),
    $("#hour-9"),
    $("#hour-10"),
    $("#hour-11"),
    $("#hour-12"),
    $("#hour-13"),
    $("#hour-14"),
    $("#hour-15"),
    $("#hour-16"),
    $("#hour-17"),
    $("#hour-18"),
    $("#hour-19"),
    $("#hour-20"),
    $("#hour-21"),
    $("#hour-22"),
    $("#hour-23"),
    $("#hour-24"),
  ];
  var currentHour = dayjs().hour();
  var workDayStatus;

  // adds text to show the current day that refreshes every second
  timeInterval = setInterval(function () {
    var today = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a");
    $(".today").text(today);
  }, 1000);

  for (let i = 0; i < hourSection.length; i++) {
    // Uses the index number in the array hourSection.
    var hourSectionNum = hourSection.indexOf("hour-" + [i]) + 1;

    // adds a class to the time row div element depending on what the current time is.
    if (currentHour === hourSectionNum) {
      $(timeRow[i]).addClass("present");
    } else if (currentHour > hourSectionNum) {
      $(timeRow[i]).addClass("past");
    } else if (currentHour < hourSectionNum) {
      $(timeRow[i]).addClass("future");
    } else {
      console.log("Congratulations! You broke time!!");
    }
  }

  for (let i = 0; i < hourSection.length; i++) {
    // in the selected time row, find the children elements with the name textarea and change its value to what is in local storage saved under hourSection[i], the id name
    $(timeRow[i])
      .children("textarea")
      .val(localStorage.getItem(hourSection[i]));
  }

  // jquery way to write, on click execute the function that follows
  $("button").click(function () {
    // When you're within the jQuery chain or event you don't have to rerun the DOM query. $(this) will hold the element that you originally requested, button. It will attach all the jQuery prototype methods again.
    // userInput is created and set equal to the value of the text area in that section because $(this).siblings selects siblings of that specific button.
    var userInput = $(this).siblings("textarea").val();
    // saveName is created and set to the value of the id of it's parent
    var saveName = $(this).parent().attr("id");
    // stores userInput as the key saveName in local storage.
    localStorage.setItem(saveName, userInput);
  });

  $(".clearButton").click(function () {
    localStorage.clear();
  });

  $(".workDayButton").click(function () {
    if (workDayStatus) {
      $(".offTime").css("display", "none");
      $(".workDayButton").text("Full Day");
      workDayStatus = false;
    } else {
      $(".offTime").css("display", "flex");
      $(".workDayButton").text("Work Day");
      workDayStatus = true;
    }
  });
});
