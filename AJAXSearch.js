$(document).ready(
  function () {
    $("#" + RoRAjaxQueryTag).keydown(
      function (event) {
        let current = $("#" + RoRAjaxQueryTag + ":text").val();

        // if the key was a backspace, remove a character
        if (8 === event.keyCode) {
          current = current.substring(0, current.length - 1);
        } else {
          current += String.fromCharCode(event.which);
        }

        $("#" + RoRAjaxResultsId).empty();

        if (0 === current.length) { return; }

        $.getJSON(RoRAjaxQueryURL + current, function (json) {
          json.forEach(j =>
           $("#" + RoRAjaxResultsId).append
             (RoRAjaxPrefix +
             j[RoRAjaxSearchField] +
             RoRAjaxSuffix)
           );
        });
      }
    );
  }
);
