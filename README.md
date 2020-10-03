# RoRAjaxQuery
## Usage
1. Create a public/javascripts directory and add the AJAXSearch.js file it it.

1. Create the usual search function in your controller and have it use a
parameter named "query".

1. Add "gem 'jquery-rails'" to the Gemfile.

1. Add "//= require jquery" to app/assets/javascripts/application.js
after "//= require turbolinks" and before "//= require\_tree ."

1. Do all of the following to the ERb file you are interested in adding
dynamic search to.
    1. Add a form similar to this.

        ```
        <%= form_tag(search_books_url, method: "get") do %>
            <%= label_tag(:query, "Search for:") %>
            <%= text_field_tag(:query) %>
            <%= submit_tag("Search") %>
        <% end %>
        ```

    1. Create a div to hold the search results.

        ```
        <br/><div id="results"></div>
        ```

    1. Set up the variables to communicate to the script.

        ```
        <script>
        var RoRAjaxQueryURL = "http://localhost:3000/books/search.json?query=";
        var RoRAjaxResultsId = "results";
        var RoRAjaxSearchField = "name";
        var RoRAjaxQueryTag = "query";
        var RoRAjaxPrefix = "";
        var RoRAjaxSuffix = "\n";
        </script>
        ```

        * RoRAjaxQueryURL is where the search URL is; you'll have to change this to reflect where it is in you application.
        * RoRAjaxResultsId is the element id where the results will be
        placed. This can be a list, a textbox, etc.
        * RoRAjaxPrefix and RoRAjaxSuffix are what are placed before and after
        the results in the RoRAjaxResultsId. The above works for a textbox,
        for a list the RoRAjaxPrefix could be "&lt;li&gt;" and the RoRAjaxSuffix
        could be "&lt;/li&gt;".
        * RoRAjaxSearchField is the result field to display.
        * RoRAjaxQueryTag is the id of the element that holds the search
        string.

    1. Include the script itself.

        ```
        <script type="text/javascript" src="/javascripts/AJAXSearch.js"></script>
        ```

1. Enjoy.
