$(document).ready(
  function () {
    $("#" + AjaxQueryId).keydown(
      function (event) {
        let current = $("#" + AjaxQueryId + ":text").val();

        // if the key was a backspace, remove a character
        if (8 === event.keyCode) {
          current = current.substring(0, current.length - 1);
        } else {
          // ASCII, but if focused any keydown will be sent...
          if (32 <= event.keyCode && 126 >= event.keyCode) {
            current += String.fromCharCode(event.which);
          }
        }

        $("#" + AjaxResultsId).empty();

        if (0 === current.length) { return; }

        $.getJSON(AjaxQueryURL + current, function (json) {
          json.forEach(j =>
           $("#" + AjaxResultsId).append
             (AjaxPrefix +
             j[AjaxQueryResults] +
             AjaxSuffix)
           );
        });
      }
    );
  }
);
