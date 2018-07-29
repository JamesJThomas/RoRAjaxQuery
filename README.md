# RoRAjaxQuery
## Usage
1. Create a public/javascripts directory and add the AJAXSearch.js file it it.

1. Create the usual search function in your controller and have it use a
parameter named "query".

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
        var QueryURL = "http://localhost:3000/books/search.json?query=";
        var ResultsDiv = "results";
        var Field = "name";
        var QueryTag = "query";
        </script>
        ```

    1. Include the script itself.

        ```
        <script type="text/javascript" src="/javascripts/AJAXSearch.js"></script>
        ```

1. Enjoy.
